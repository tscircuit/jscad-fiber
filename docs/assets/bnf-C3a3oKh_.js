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
var bnf_1;
var hasRequiredBnf;
function requireBnf() {
  if (hasRequiredBnf) return bnf_1;
  hasRequiredBnf = 1;
  bnf_1 = bnf2;
  bnf2.displayName = "bnf";
  bnf2.aliases = ["rbnf"];
  function bnf2(Prism) {
    Prism.languages.bnf = {
      string: {
        pattern: /"[^\r\n"]*"|'[^\r\n']*'/
      },
      definition: {
        pattern: /<[^<>\r\n\t]+>(?=\s*::=)/,
        alias: ["rule", "keyword"],
        inside: {
          punctuation: /^<|>$/
        }
      },
      rule: {
        pattern: /<[^<>\r\n\t]+>/,
        inside: {
          punctuation: /^<|>$/
        }
      },
      operator: /::=|[|()[\]{}*+?]|\.{3}/
    };
    Prism.languages.rbnf = Prism.languages.bnf;
  }
  return bnf_1;
}
var bnfExports = requireBnf();
const bnf = /* @__PURE__ */ getDefaultExportFromCjs(bnfExports);
const bnf$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: bnf
}, [bnfExports]);
export {
  bnf$1 as b
};
