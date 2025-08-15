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
var ftl_1;
var hasRequiredFtl;
function requireFtl() {
  if (hasRequiredFtl) return ftl_1;
  hasRequiredFtl = 1;
  var refractorMarkupTemplating = requireMarkupTemplating();
  ftl_1 = ftl2;
  ftl2.displayName = "ftl";
  ftl2.aliases = [];
  function ftl2(Prism) {
    Prism.register(refractorMarkupTemplating);
    (function(Prism2) {
      var FTL_EXPR = /[^<()"']|\((?:<expr>)*\)|<(?!#--)|<#--(?:[^-]|-(?!->))*-->|"(?:[^\\"]|\\.)*"|'(?:[^\\']|\\.)*'/.source;
      for (var i = 0; i < 2; i++) {
        FTL_EXPR = FTL_EXPR.replace(/<expr>/g, function() {
          return FTL_EXPR;
        });
      }
      FTL_EXPR = FTL_EXPR.replace(/<expr>/g, /[^\s\S]/.source);
      var ftl3 = {
        comment: /<#--[\s\S]*?-->/,
        string: [
          {
            // raw string
            pattern: /\br("|')(?:(?!\1)[^\\]|\\.)*\1/,
            greedy: true
          },
          {
            pattern: RegExp(
              /("|')(?:(?!\1|\$\{)[^\\]|\\.|\$\{(?:(?!\})(?:<expr>))*\})*\1/.source.replace(
                /<expr>/g,
                function() {
                  return FTL_EXPR;
                }
              )
            ),
            greedy: true,
            inside: {
              interpolation: {
                pattern: RegExp(
                  /((?:^|[^\\])(?:\\\\)*)\$\{(?:(?!\})(?:<expr>))*\}/.source.replace(
                    /<expr>/g,
                    function() {
                      return FTL_EXPR;
                    }
                  )
                ),
                lookbehind: true,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^\$\{|\}$/,
                    alias: "punctuation"
                  },
                  rest: null
                }
              }
            }
          }
        ],
        keyword: /\b(?:as)\b/,
        boolean: /\b(?:false|true)\b/,
        "builtin-function": {
          pattern: /((?:^|[^?])\?\s*)\w+/,
          lookbehind: true,
          alias: "function"
        },
        function: /\b\w+(?=\s*\()/,
        number: /\b\d+(?:\.\d+)?\b/,
        operator: /\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,
        punctuation: /[,;.:()[\]{}]/
      };
      ftl3.string[1].inside.interpolation.inside.rest = ftl3;
      Prism2.languages.ftl = {
        "ftl-comment": {
          // the pattern is shortened to be more efficient
          pattern: /^<#--[\s\S]*/,
          alias: "comment"
        },
        "ftl-directive": {
          pattern: /^<[\s\S]+>$/,
          inside: {
            directive: {
              pattern: /(^<\/?)[#@][a-z]\w*/i,
              lookbehind: true,
              alias: "keyword"
            },
            punctuation: /^<\/?|\/?>$/,
            content: {
              pattern: /\s*\S[\s\S]*/,
              alias: "ftl",
              inside: ftl3
            }
          }
        },
        "ftl-interpolation": {
          pattern: /^\$\{[\s\S]*\}$/,
          inside: {
            punctuation: /^\$\{|\}$/,
            content: {
              pattern: /\s*\S[\s\S]*/,
              alias: "ftl",
              inside: ftl3
            }
          }
        }
      };
      Prism2.hooks.add("before-tokenize", function(env) {
        var pattern = RegExp(
          /<#--[\s\S]*?-->|<\/?[#@][a-zA-Z](?:<expr>)*?>|\$\{(?:<expr>)*?\}/.source.replace(
            /<expr>/g,
            function() {
              return FTL_EXPR;
            }
          ),
          "gi"
        );
        Prism2.languages["markup-templating"].buildPlaceholders(
          env,
          "ftl",
          pattern
        );
      });
      Prism2.hooks.add("after-tokenize", function(env) {
        Prism2.languages["markup-templating"].tokenizePlaceholders(env, "ftl");
      });
    })(Prism);
  }
  return ftl_1;
}
var ftlExports = requireFtl();
const ftl = /* @__PURE__ */ getDefaultExportFromCjs(ftlExports);
const ftl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: ftl
}, [ftlExports]);
export {
  ftl$1 as f
};
