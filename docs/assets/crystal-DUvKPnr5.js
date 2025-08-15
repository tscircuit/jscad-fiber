import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireRuby } from "./ruby-BhyE9auN.js";
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
var crystal_1;
var hasRequiredCrystal;
function requireCrystal() {
  if (hasRequiredCrystal) return crystal_1;
  hasRequiredCrystal = 1;
  var refractorRuby = requireRuby();
  crystal_1 = crystal2;
  crystal2.displayName = "crystal";
  crystal2.aliases = [];
  function crystal2(Prism) {
    Prism.register(refractorRuby);
    (function(Prism2) {
      Prism2.languages.crystal = Prism2.languages.extend("ruby", {
        keyword: [
          /\b(?:__DIR__|__END_LINE__|__FILE__|__LINE__|abstract|alias|annotation|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|ifdef|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|ptr|require|rescue|return|select|self|sizeof|struct|super|then|type|typeof|undef|uninitialized|union|unless|until|when|while|with|yield)\b/,
          {
            pattern: /(\.\s*)(?:is_a|responds_to)\?/,
            lookbehind: true
          }
        ],
        number: /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/,
        operator: [/->/, Prism2.languages.ruby.operator],
        punctuation: /[(){}[\].,;\\]/
      });
      Prism2.languages.insertBefore("crystal", "string-literal", {
        attribute: {
          pattern: /@\[.*?\]/,
          inside: {
            delimiter: {
              pattern: /^@\[|\]$/,
              alias: "punctuation"
            },
            attribute: {
              pattern: /^(\s*)\w+/,
              lookbehind: true,
              alias: "class-name"
            },
            args: {
              pattern: /\S(?:[\s\S]*\S)?/,
              inside: Prism2.languages.crystal
            }
          }
        },
        expansion: {
          pattern: /\{(?:\{.*?\}|%.*?%)\}/,
          inside: {
            content: {
              pattern: /^(\{.)[\s\S]+(?=.\}$)/,
              lookbehind: true,
              inside: Prism2.languages.crystal
            },
            delimiter: {
              pattern: /^\{[\{%]|[\}%]\}$/,
              alias: "operator"
            }
          }
        },
        char: {
          pattern: /'(?:[^\\\r\n]{1,2}|\\(?:.|u(?:[A-Fa-f0-9]{1,4}|\{[A-Fa-f0-9]{1,6}\})))'/,
          greedy: true
        }
      });
    })(Prism);
  }
  return crystal_1;
}
var crystalExports = requireCrystal();
const crystal = /* @__PURE__ */ getDefaultExportFromCjs(crystalExports);
const crystal$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: crystal
}, [crystalExports]);
export {
  crystal$1 as c
};
