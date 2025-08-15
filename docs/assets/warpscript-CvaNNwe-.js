import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
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
var warpscript_1;
var hasRequiredWarpscript;
function requireWarpscript() {
  if (hasRequiredWarpscript) return warpscript_1;
  hasRequiredWarpscript = 1;
  warpscript_1 = warpscript2;
  warpscript2.displayName = "warpscript";
  warpscript2.aliases = [];
  function warpscript2(Prism) {
    Prism.languages.warpscript = {
      comment: /#.*|\/\/.*|\/\*[\s\S]*?\*\//,
      string: {
        pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/,
        greedy: true
      },
      variable: /\$\S+/,
      macro: {
        pattern: /@\S+/,
        alias: "property"
      },
      // WarpScript doesn't have any keywords, these are all functions under the control category
      // https://www.warp10.io/tags/control
      keyword: /\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/,
      number: /[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/,
      boolean: /\b(?:F|T|false|true)\b/,
      punctuation: /<%|%>|[{}[\]()]/,
      // Some operators from the "operators" category
      // https://www.warp10.io/tags/operators
      operator: /==|&&?|\|\|?|\*\*?|>>>?|<<|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/
    };
  }
  return warpscript_1;
}
var warpscriptExports = requireWarpscript();
const warpscript = /* @__PURE__ */ getDefaultExportFromCjs(warpscriptExports);
const warpscript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: warpscript
}, [warpscriptExports]);
export {
  warpscript$1 as w
};
