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
var arff_1;
var hasRequiredArff;
function requireArff() {
  if (hasRequiredArff) return arff_1;
  hasRequiredArff = 1;
  arff_1 = arff2;
  arff2.displayName = "arff";
  arff2.aliases = [];
  function arff2(Prism) {
    Prism.languages.arff = {
      comment: /%.*/,
      string: {
        pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      keyword: /@(?:attribute|data|end|relation)\b/i,
      number: /\b\d+(?:\.\d+)?\b/,
      punctuation: /[{},]/
    };
  }
  return arff_1;
}
var arffExports = requireArff();
const arff = /* @__PURE__ */ getDefaultExportFromCjs(arffExports);
const arff$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: arff
}, [arffExports]);
export {
  arff$1 as a
};
