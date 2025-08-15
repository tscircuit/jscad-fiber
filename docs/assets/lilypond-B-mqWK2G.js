import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireScheme } from "./scheme-BIkXa0-K.js";
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
var lilypond_1;
var hasRequiredLilypond;
function requireLilypond() {
  if (hasRequiredLilypond) return lilypond_1;
  hasRequiredLilypond = 1;
  var refractorScheme = requireScheme();
  lilypond_1 = lilypond2;
  lilypond2.displayName = "lilypond";
  lilypond2.aliases = [];
  function lilypond2(Prism) {
    Prism.register(refractorScheme);
    (function(Prism2) {
      var schemeExpression = /\((?:[^();"#\\]|\\[\s\S]|;.*(?!.)|"(?:[^"\\]|\\.)*"|#(?:\{(?:(?!#\})[\s\S])*#\}|[^{])|<expr>)*\)/.source;
      var recursivenessLog2 = 5;
      for (var i = 0; i < recursivenessLog2; i++) {
        schemeExpression = schemeExpression.replace(/<expr>/g, function() {
          return schemeExpression;
        });
      }
      schemeExpression = schemeExpression.replace(/<expr>/g, /[^\s\S]/.source);
      var lilypond3 = Prism2.languages.lilypond = {
        comment: /%(?:(?!\{).*|\{[\s\S]*?%\})/,
        "embedded-scheme": {
          pattern: RegExp(
            /(^|[=\s])#(?:"(?:[^"\\]|\\.)*"|[^\s()"]*(?:[^\s()]|<expr>))/.source.replace(
              /<expr>/g,
              function() {
                return schemeExpression;
              }
            ),
            "m"
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            scheme: {
              pattern: /^(#)[\s\S]+$/,
              lookbehind: true,
              alias: "language-scheme",
              inside: {
                "embedded-lilypond": {
                  pattern: /#\{[\s\S]*?#\}/,
                  greedy: true,
                  inside: {
                    punctuation: /^#\{|#\}$/,
                    lilypond: {
                      pattern: /[\s\S]+/,
                      alias: "language-lilypond",
                      inside: null
                      // see below
                    }
                  }
                },
                rest: Prism2.languages.scheme
              }
            },
            punctuation: /#/
          }
        },
        string: {
          pattern: /"(?:[^"\\]|\\.)*"/,
          greedy: true
        },
        "class-name": {
          pattern: /(\\new\s+)[\w-]+/,
          lookbehind: true
        },
        keyword: {
          pattern: /\\[a-z][-\w]*/i,
          inside: {
            punctuation: /^\\/
          }
        },
        operator: /[=|]|<<|>>/,
        punctuation: {
          pattern: /(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,
          lookbehind: true
        },
        number: /\b\d+(?:\/\d+)?\b/
      };
      lilypond3["embedded-scheme"].inside["scheme"].inside["embedded-lilypond"].inside["lilypond"].inside = lilypond3;
      Prism2.languages.ly = lilypond3;
    })(Prism);
  }
  return lilypond_1;
}
var lilypondExports = requireLilypond();
const lilypond = /* @__PURE__ */ getDefaultExportFromCjs(lilypondExports);
const lilypond$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: lilypond
}, [lilypondExports]);
export {
  lilypond$1 as l
};
