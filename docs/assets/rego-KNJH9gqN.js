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
var rego_1;
var hasRequiredRego;
function requireRego() {
  if (hasRequiredRego) return rego_1;
  hasRequiredRego = 1;
  rego_1 = rego2;
  rego2.displayName = "rego";
  rego2.aliases = [];
  function rego2(Prism) {
    Prism.languages.rego = {
      comment: /#.*/,
      property: {
        pattern: /(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i,
        lookbehind: true,
        greedy: true
      },
      string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/,
        lookbehind: true,
        greedy: true
      },
      keyword: /\b(?:as|default|else|import|not|null|package|set(?=\s*\()|some|with)\b/,
      boolean: /\b(?:false|true)\b/,
      function: {
        pattern: /\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i,
        inside: {
          namespace: /\b\w+\b(?=\s*\.)/,
          punctuation: /\./
        }
      },
      number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
      operator: /[-+*/%|&]|[<>:=]=?|!=|\b_\b/,
      punctuation: /[,;.\[\]{}()]/
    };
  }
  return rego_1;
}
var regoExports = requireRego();
const rego = /* @__PURE__ */ getDefaultExportFromCjs(regoExports);
const rego$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: rego
}, [regoExports]);
export {
  rego$1 as r
};
