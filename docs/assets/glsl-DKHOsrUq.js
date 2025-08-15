import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireC } from "./c-BM9zQzkN.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var glsl_1;
var hasRequiredGlsl;
function requireGlsl() {
  if (hasRequiredGlsl) return glsl_1;
  hasRequiredGlsl = 1;
  var refractorC = requireC();
  glsl_1 = glsl2;
  glsl2.displayName = "glsl";
  glsl2.aliases = [];
  function glsl2(Prism) {
    Prism.register(refractorC);
    Prism.languages.glsl = Prism.languages.extend("c", {
      keyword: /\b(?:active|asm|atomic_uint|attribute|[ibdu]?vec[234]|bool|break|buffer|case|cast|centroid|class|coherent|common|const|continue|d?mat[234](?:x[234])?|default|discard|do|double|else|enum|extern|external|false|filter|fixed|flat|float|for|fvec[234]|goto|half|highp|hvec[234]|[iu]?sampler2DMS(?:Array)?|[iu]?sampler2DRect|[iu]?samplerBuffer|[iu]?samplerCube|[iu]?samplerCubeArray|[iu]?sampler[123]D|[iu]?sampler[12]DArray|[iu]?image2DMS(?:Array)?|[iu]?image2DRect|[iu]?imageBuffer|[iu]?imageCube|[iu]?imageCubeArray|[iu]?image[123]D|[iu]?image[12]DArray|if|in|inline|inout|input|int|interface|invariant|layout|long|lowp|mediump|namespace|noinline|noperspective|out|output|partition|patch|precise|precision|public|readonly|resource|restrict|return|sample|sampler[12]DArrayShadow|sampler[12]DShadow|sampler2DRectShadow|sampler3DRect|samplerCubeArrayShadow|samplerCubeShadow|shared|short|sizeof|smooth|static|struct|subroutine|superp|switch|template|this|true|typedef|uint|uniform|union|unsigned|using|varying|void|volatile|while|writeonly)\b/
    });
  }
  return glsl_1;
}
var glslExports = requireGlsl();
const glsl = /* @__PURE__ */ getDefaultExportFromCjs(glslExports);
const glsl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: glsl
}, [glslExports]);
export {
  glsl$1 as g
};
