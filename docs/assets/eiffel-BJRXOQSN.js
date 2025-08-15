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
var eiffel_1;
var hasRequiredEiffel;
function requireEiffel() {
  if (hasRequiredEiffel) return eiffel_1;
  hasRequiredEiffel = 1;
  eiffel_1 = eiffel2;
  eiffel2.displayName = "eiffel";
  eiffel2.aliases = [];
  function eiffel2(Prism) {
    Prism.languages.eiffel = {
      comment: /--.*/,
      string: [
        // Aligned-verbatim-strings
        {
          pattern: /"([^[]*)\[[\s\S]*?\]\1"/,
          greedy: true
        },
        // Non-aligned-verbatim-strings
        {
          pattern: /"([^{]*)\{[\s\S]*?\}\1"/,
          greedy: true
        },
        // Single-line string
        {
          pattern: /"(?:%(?:(?!\n)\s)*\n\s*%|%\S|[^%"\r\n])*"/,
          greedy: true
        }
      ],
      // normal char | special char | char code
      char: /'(?:%.|[^%'\r\n])+'/,
      keyword: /\b(?:across|agent|alias|all|and|as|assign|attached|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
      boolean: /\b(?:False|True)\b/i,
      // Convention: class-names are always all upper-case characters
      "class-name": /\b[A-Z][\dA-Z_]*\b/,
      number: [
        // hexa | octal | bin
        /\b0[xcb][\da-f](?:_*[\da-f])*\b/i,
        // Decimal
        /(?:\b\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*\b|\b\d(?:_*\d)*\b\.?/i
      ],
      punctuation: /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
      operator: /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/
    };
  }
  return eiffel_1;
}
var eiffelExports = requireEiffel();
const eiffel = /* @__PURE__ */ getDefaultExportFromCjs(eiffelExports);
const eiffel$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: eiffel
}, [eiffelExports]);
export {
  eiffel$1 as e
};
