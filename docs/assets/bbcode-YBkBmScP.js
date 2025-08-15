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
var bbcode_1;
var hasRequiredBbcode;
function requireBbcode() {
  if (hasRequiredBbcode) return bbcode_1;
  hasRequiredBbcode = 1;
  bbcode_1 = bbcode2;
  bbcode2.displayName = "bbcode";
  bbcode2.aliases = ["shortcode"];
  function bbcode2(Prism) {
    Prism.languages.bbcode = {
      tag: {
        pattern: /\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,
        inside: {
          tag: {
            pattern: /^\[\/?[^\s=\]]+/,
            inside: {
              punctuation: /^\[\/?/
            }
          },
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,
            inside: {
              punctuation: [
                /^=/,
                {
                  pattern: /^(\s*)["']|["']$/,
                  lookbehind: true
                }
              ]
            }
          },
          punctuation: /\]/,
          "attr-name": /[^\s=\]]+/
        }
      }
    };
    Prism.languages.shortcode = Prism.languages.bbcode;
  }
  return bbcode_1;
}
var bbcodeExports = requireBbcode();
const bbcode = /* @__PURE__ */ getDefaultExportFromCjs(bbcodeExports);
const bbcode$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: bbcode
}, [bbcodeExports]);
export {
  bbcode$1 as b
};
