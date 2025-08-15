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
var smalltalk_1;
var hasRequiredSmalltalk;
function requireSmalltalk() {
  if (hasRequiredSmalltalk) return smalltalk_1;
  hasRequiredSmalltalk = 1;
  smalltalk_1 = smalltalk2;
  smalltalk2.displayName = "smalltalk";
  smalltalk2.aliases = [];
  function smalltalk2(Prism) {
    Prism.languages.smalltalk = {
      comment: {
        pattern: /"(?:""|[^"])*"/,
        greedy: true
      },
      char: {
        pattern: /\$./,
        greedy: true
      },
      string: {
        pattern: /'(?:''|[^'])*'/,
        greedy: true
      },
      symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
      "block-arguments": {
        pattern: /(\[\s*):[^\[|]*\|/,
        lookbehind: true,
        inside: {
          variable: /:[\da-z]+/i,
          punctuation: /\|/
        }
      },
      "temporary-variables": {
        pattern: /\|[^|]+\|/,
        inside: {
          variable: /[\da-z]+/i,
          punctuation: /\|/
        }
      },
      keyword: /\b(?:new|nil|self|super)\b/,
      boolean: /\b(?:false|true)\b/,
      number: [
        /\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
        /\b\d+(?:\.\d+)?(?:e-?\d+)?/
      ],
      operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
      punctuation: /[.;:?\[\](){}]/
    };
  }
  return smalltalk_1;
}
var smalltalkExports = requireSmalltalk();
const smalltalk = /* @__PURE__ */ getDefaultExportFromCjs(smalltalkExports);
const smalltalk$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: smalltalk
}, [smalltalkExports]);
export {
  smalltalk$1 as s
};
