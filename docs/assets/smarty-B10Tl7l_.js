import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireMarkupTemplating } from "./markup-templating-hY-QSL53.js";
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
var smarty_1;
var hasRequiredSmarty;
function requireSmarty() {
  if (hasRequiredSmarty) return smarty_1;
  hasRequiredSmarty = 1;
  var refractorMarkupTemplating = requireMarkupTemplating();
  smarty_1 = smarty2;
  smarty2.displayName = "smarty";
  smarty2.aliases = [];
  function smarty2(Prism) {
    Prism.register(refractorMarkupTemplating);
    (function(Prism2) {
      Prism2.languages.smarty = {
        comment: {
          pattern: /^\{\*[\s\S]*?\*\}/,
          greedy: true
        },
        "embedded-php": {
          pattern: /^\{php\}[\s\S]*?\{\/php\}/,
          greedy: true,
          inside: {
            smarty: {
              pattern: /^\{php\}|\{\/php\}$/,
              inside: null
              // see below
            },
            php: {
              pattern: /[\s\S]+/,
              alias: "language-php",
              inside: Prism2.languages.php
            }
          }
        },
        string: [
          {
            pattern: /"(?:\\.|[^"\\\r\n])*"/,
            greedy: true,
            inside: {
              interpolation: {
                pattern: /\{[^{}]*\}|`[^`]*`/,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^[{`]|[`}]$/,
                    alias: "punctuation"
                  },
                  expression: {
                    pattern: /[\s\S]+/,
                    inside: null
                    // see below
                  }
                }
              },
              variable: /\$\w+/
            }
          },
          {
            pattern: /'(?:\\.|[^'\\\r\n])*'/,
            greedy: true
          }
        ],
        keyword: {
          pattern: /(^\{\/?)[a-z_]\w*\b(?!\()/i,
          lookbehind: true,
          greedy: true
        },
        delimiter: {
          pattern: /^\{\/?|\}$/,
          greedy: true,
          alias: "punctuation"
        },
        number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
        variable: [
          /\$(?!\d)\w+/,
          /#(?!\d)\w+#/,
          {
            pattern: /(\.|->|\w\s*=)(?!\d)\w+\b(?!\()/,
            lookbehind: true
          },
          {
            pattern: /(\[)(?!\d)\w+(?=\])/,
            lookbehind: true
          }
        ],
        function: {
          pattern: /(\|\s*)@?[a-z_]\w*|\b[a-z_]\w*(?=\()/i,
          lookbehind: true
        },
        "attr-name": /\b[a-z_]\w*(?=\s*=)/i,
        boolean: /\b(?:false|no|off|on|true|yes)\b/,
        punctuation: /[\[\](){}.,:`]|->/,
        operator: [
          /[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,
          /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,
          /\b(?:and|eq|gt?e|gt|lt?e|lt|mod|neq?|not|or)\b/
        ]
      };
      Prism2.languages.smarty["embedded-php"].inside.smarty.inside = Prism2.languages.smarty;
      Prism2.languages.smarty.string[0].inside.interpolation.inside.expression.inside = Prism2.languages.smarty;
      var string = /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/;
      var smartyPattern = RegExp(
        // comments
        /\{\*[\s\S]*?\*\}/.source + "|" + // php tags
        /\{php\}[\s\S]*?\{\/php\}/.source + "|" + // smarty blocks
        /\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>)*\})*\})*\}/.source.replace(
          /<str>/g,
          function() {
            return string.source;
          }
        ),
        "g"
      );
      Prism2.hooks.add("before-tokenize", function(env) {
        var smartyLiteralStart = "{literal}";
        var smartyLiteralEnd = "{/literal}";
        var smartyLiteralMode = false;
        Prism2.languages["markup-templating"].buildPlaceholders(
          env,
          "smarty",
          smartyPattern,
          function(match) {
            if (match === smartyLiteralEnd) {
              smartyLiteralMode = false;
            }
            if (!smartyLiteralMode) {
              if (match === smartyLiteralStart) {
                smartyLiteralMode = true;
              }
              return true;
            }
            return false;
          }
        );
      });
      Prism2.hooks.add("after-tokenize", function(env) {
        Prism2.languages["markup-templating"].tokenizePlaceholders(env, "smarty");
      });
    })(Prism);
  }
  return smarty_1;
}
var smartyExports = requireSmarty();
const smarty = /* @__PURE__ */ getDefaultExportFromCjs(smartyExports);
const smarty$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: smarty
}, [smartyExports]);
export {
  smarty$1 as s
};
