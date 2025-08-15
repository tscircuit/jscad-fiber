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
var ebnf_1;
var hasRequiredEbnf;
function requireEbnf() {
  if (hasRequiredEbnf) return ebnf_1;
  hasRequiredEbnf = 1;
  ebnf_1 = ebnf2;
  ebnf2.displayName = "ebnf";
  ebnf2.aliases = [];
  function ebnf2(Prism) {
    Prism.languages.ebnf = {
      comment: /\(\*[\s\S]*?\*\)/,
      string: {
        pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
        greedy: true
      },
      special: {
        pattern: /\?[^?\r\n]*\?/,
        greedy: true,
        alias: "class-name"
      },
      definition: {
        pattern: /^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,
        lookbehind: true,
        alias: ["rule", "keyword"]
      },
      rule: /\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i,
      punctuation: /\([:/]|[:/]\)|[.,;()[\]{}]/,
      operator: /[-=|*/!]/
    };
  }
  return ebnf_1;
}
var ebnfExports = requireEbnf();
const ebnf = /* @__PURE__ */ getDefaultExportFromCjs(ebnfExports);
const ebnf$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: ebnf
}, [ebnfExports]);
export {
  ebnf$1 as e
};
