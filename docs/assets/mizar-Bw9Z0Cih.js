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
var mizar_1;
var hasRequiredMizar;
function requireMizar() {
  if (hasRequiredMizar) return mizar_1;
  hasRequiredMizar = 1;
  mizar_1 = mizar2;
  mizar2.displayName = "mizar";
  mizar2.aliases = [];
  function mizar2(Prism) {
    Prism.languages.mizar = {
      comment: /::.+/,
      keyword: /@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|end|environ|equals|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:ies|y)|when|where|with|wrt)\b/,
      parameter: {
        pattern: /\$(?:10|\d)/,
        alias: "variable"
      },
      variable: /\b\w+(?=:)/,
      number: /(?:\b|-)\d+\b/,
      operator: /\.\.\.|->|&|\.?=/,
      punctuation: /\(#|#\)|[,:;\[\](){}]/
    };
  }
  return mizar_1;
}
var mizarExports = requireMizar();
const mizar = /* @__PURE__ */ getDefaultExportFromCjs(mizarExports);
const mizar$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: mizar
}, [mizarExports]);
export {
  mizar$1 as m
};
