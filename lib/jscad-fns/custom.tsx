import type { Geom3 } from "@jscad/modeling/src/geometries/types"
import type { JSCADModule } from "../jscad-primitives"
import type { MaterialProps } from "../material"
import { withColorProp } from "../wrappers/with-color-prop"
import { withOffsetProp } from "../wrappers/with-offset-prop"
import { withRotationProp } from "../wrappers/with-rotation-prop"

export type CustomProps = {
  geometry?: Geom3 | Geom3[]
  code?: string
  params?: Record<string, unknown>
} & MaterialProps

function transpileJscadModuleSyntax(source: string): string {
  return source
    .replace(
      /import\s+\*\s+as\s+([A-Za-z_$][\w$]*)\s+from\s+["']([^"']+)["']\s*;?/g,
      'const $1 = require("$2");',
    )
    .replace(
      /import\s*\{([^}]+)\}\s*from\s*["']([^"']+)["']\s*;?/g,
      (_match, specifiers: string, moduleName: string) => {
        const mapped = specifiers
          .split(",")
          .map((part) => part.trim())
          .filter(Boolean)
          .map((part) => part.replace(/\s+as\s+/g, ": "))
          .join(", ")
        return `const { ${mapped} } = require("${moduleName}");`
      },
    )
    .replace(
      /export\s+default\s+function\s+([A-Za-z_$][\w$]*)/g,
      "exports.default = function $1",
    )
    .replace(/export\s+default\s+/g, "exports.default = ")
    .replace(/export\s+function\s+([A-Za-z_$][\w$]*)/g, "function $1")
    .replace(
      /export\s+(const|let|var)\s+([A-Za-z_$][\w$]*)\s*=/g,
      "$1 $2 = exports.$2 =",
    )
    .replace(/export\s*\{([^}]+)\}\s*;?/g, (_match, exportedNames: string) =>
      exportedNames
        .split(",")
        .map((part) => part.trim())
        .filter(Boolean)
        .map((part) => {
          const [localName, exportedName] = part
            .split(/\s+as\s+/)
            .map((token) => token.trim())
          return `exports.${exportedName || localName} = ${localName};`
        })
        .join("\n"),
    )
}

export function evalJscadCode(
  code: string,
  jscad: JSCADModule,
  params: Record<string, unknown> = {},
): any {
  const trimmed = code.trim()
  if (!trimmed) {
    throw new Error("Custom JSCAD code must be a non-empty string")
  }

  const customRequire = (specifier: string) => {
    if (specifier === "@jscad/modeling") {
      return jscad
    }
    if (specifier.startsWith("@jscad/modeling/")) {
      const subPath = specifier
        .slice("@jscad/modeling/".length)
        .replace(/^src\//, "")
      const parts = subPath.split("/").filter(Boolean)
      let current: any = jscad
      for (const part of parts) {
        current = current?.[part]
      }
      if (current !== undefined) {
        return current
      }
    }
    throw new Error(`Unsupported module import in JSCAD code: ${specifier}`)
  }

  const runWithBody = (bodySource: string) => {
    const moduleObj: { exports: any } = { exports: {} }
    const fn = new Function(
      "jscad",
      "primitives",
      "booleans",
      "transforms",
      "extrusions",
      "colors",
      "hulls",
      "params",
      "require",
      "module",
      "exports",
      `{
${bodySource}
if (typeof module.exports === "function") {
  return module.exports(params);
}
if (module.exports && typeof module.exports.main === "function") {
  return module.exports.main(params);
}
if (module.exports && typeof module.exports.default === "function") {
  return module.exports.default(params);
}
if (module.exports && module.exports.default !== undefined) {
  return module.exports.default;
}
if (typeof main === "function") {
  return main(params);
}
return undefined;
}`,
    )

    return fn(
      jscad,
      jscad.primitives,
      jscad.booleans,
      jscad.transforms,
      jscad.extrusions,
      jscad.colors,
      jscad.hulls,
      params,
      customRequire,
      moduleObj,
      moduleObj.exports,
    )
  }

  const transpiled = transpileJscadModuleSyntax(trimmed)
  const result = runWithBody(transpiled)
  if (result !== undefined) {
    return result
  }

  return runWithBody(`return (\n${transpiled}\n);`)
}

function CustomBase({ material, geometry, code, params }: CustomProps) {
  return (
    <custom
      material={material}
      geometry={geometry}
      code={code}
      params={params}
    />
  )
}

export const Custom = withOffsetProp(
  withRotationProp(withColorProp(CustomBase)),
)
