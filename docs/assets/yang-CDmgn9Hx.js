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
var yang_1;
var hasRequiredYang;
function requireYang() {
  if (hasRequiredYang) return yang_1;
  hasRequiredYang = 1;
  yang_1 = yang2;
  yang2.displayName = "yang";
  yang2.aliases = [];
  function yang2(Prism) {
    Prism.languages.yang = {
      // https://tools.ietf.org/html/rfc6020#page-34
      // http://www.yang-central.org/twiki/bin/view/Main/YangExamples
      comment: /\/\*[\s\S]*?\*\/|\/\/.*/,
      string: {
        pattern: /"(?:[^\\"]|\\.)*"|'[^']*'/,
        greedy: true
      },
      keyword: {
        pattern: /(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,
        lookbehind: true
      },
      namespace: {
        pattern: /(\s)[a-z_][\w.-]*(?=:)/i,
        lookbehind: true
      },
      boolean: /\b(?:false|true)\b/,
      operator: /\+/,
      punctuation: /[{};:]/
    };
  }
  return yang_1;
}
var yangExports = requireYang();
const yang = /* @__PURE__ */ getDefaultExportFromCjs(yangExports);
const yang$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: yang
}, [yangExports]);
export {
  yang$1 as y
};
