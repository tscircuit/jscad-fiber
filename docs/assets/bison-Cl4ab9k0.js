import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireC } from "./c-BM9zQzkN.js";
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
var bison_1;
var hasRequiredBison;
function requireBison() {
  if (hasRequiredBison) return bison_1;
  hasRequiredBison = 1;
  var refractorC = requireC();
  bison_1 = bison2;
  bison2.displayName = "bison";
  bison2.aliases = [];
  function bison2(Prism) {
    Prism.register(refractorC);
    Prism.languages.bison = Prism.languages.extend("c", {});
    Prism.languages.insertBefore("bison", "comment", {
      bison: {
        // This should match all the beginning of the file
        // including the prologue(s), the bison declarations and
        // the grammar rules.
        pattern: /^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,
        inside: {
          c: {
            // Allow for one level of nested braces
            pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
            inside: {
              delimiter: {
                pattern: /^%?\{|%?\}$/,
                alias: "punctuation"
              },
              "bison-variable": {
                pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
                alias: "variable",
                inside: {
                  punctuation: /<|>/
                }
              },
              rest: Prism.languages.c
            }
          },
          comment: Prism.languages.c.comment,
          string: Prism.languages.c.string,
          property: /\S+(?=:)/,
          keyword: /%\w+/,
          number: {
            pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
            lookbehind: true
          },
          punctuation: /%[%?]|[|:;\[\]<>]/
        }
      }
    });
  }
  return bison_1;
}
var bisonExports = requireBison();
const bison = /* @__PURE__ */ getDefaultExportFromCjs(bisonExports);
const bison$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: bison
}, [bisonExports]);
export {
  bison$1 as b
};
