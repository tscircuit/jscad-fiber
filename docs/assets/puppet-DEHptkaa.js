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
var puppet_1;
var hasRequiredPuppet;
function requirePuppet() {
  if (hasRequiredPuppet) return puppet_1;
  hasRequiredPuppet = 1;
  puppet_1 = puppet2;
  puppet2.displayName = "puppet";
  puppet2.aliases = [];
  function puppet2(Prism) {
    (function(Prism2) {
      Prism2.languages.puppet = {
        heredoc: [
          // Matches the content of a quoted heredoc string (subject to interpolation)
          {
            pattern: /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
            lookbehind: true,
            alias: "string",
            inside: {
              // Matches the end tag
              punctuation: /(?=\S).*\S(?= *$)/
              // See interpolation below
            }
          },
          // Matches the content of an unquoted heredoc string (no interpolation)
          {
            pattern: /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
            lookbehind: true,
            greedy: true,
            alias: "string",
            inside: {
              // Matches the end tag
              punctuation: /(?=\S).*\S(?= *$)/
            }
          },
          // Matches the start tag of heredoc strings
          {
            pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
            alias: "string",
            inside: {
              punctuation: {
                pattern: /(\().+?(?=\))/,
                lookbehind: true
              }
            }
          }
        ],
        "multiline-comment": {
          pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
          lookbehind: true,
          greedy: true,
          alias: "comment"
        },
        regex: {
          // Must be prefixed with the keyword "node" or a non-word char
          pattern: /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
          lookbehind: true,
          greedy: true,
          inside: {
            // Extended regexes must have the x flag. They can contain single-line comments.
            "extended-regex": {
              pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,
              inside: {
                comment: /#.*/
              }
            }
          }
        },
        comment: {
          pattern: /(^|[^\\])#.*/,
          lookbehind: true,
          greedy: true
        },
        string: {
          // Allow for one nested level of double quotes inside interpolation
          pattern: /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|\$(?!\{)|(?!\1)[^\\$]|\\[\s\S])*\1/,
          greedy: true,
          inside: {
            "double-quoted": {
              pattern: /^"[\s\S]*"$/,
              inside: {
                // See interpolation below
              }
            }
          }
        },
        variable: {
          pattern: /\$(?:::)?\w+(?:::\w+)*/,
          inside: {
            punctuation: /::/
          }
        },
        "attr-name": /(?:\b\w+|\*)(?=\s*=>)/,
        function: [
          {
            pattern: /(\.)(?!\d)\w+/,
            lookbehind: true
          },
          /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/
        ],
        number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
        boolean: /\b(?:false|true)\b/,
        // Includes words reserved for future use
        keyword: /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
        datatype: {
          pattern: /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
          alias: "symbol"
        },
        operator: /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
        punctuation: /[\[\]{}().,;]|:+/
      };
      var interpolation = [
        {
          // Allow for one nested level of braces inside interpolation
          pattern: /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
          lookbehind: true,
          inside: {
            "short-variable": {
              // Negative look-ahead prevent wrong highlighting of functions
              pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
              lookbehind: true,
              alias: "variable",
              inside: {
                punctuation: /::/
              }
            },
            delimiter: {
              pattern: /^\$/,
              alias: "variable"
            },
            rest: Prism2.languages.puppet
          }
        },
        {
          pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
          lookbehind: true,
          alias: "variable",
          inside: {
            punctuation: /::/
          }
        }
      ];
      Prism2.languages.puppet["heredoc"][0].inside.interpolation = interpolation;
      Prism2.languages.puppet["string"].inside["double-quoted"].inside.interpolation = interpolation;
    })(Prism);
  }
  return puppet_1;
}
var puppetExports = requirePuppet();
const puppet = /* @__PURE__ */ getDefaultExportFromCjs(puppetExports);
const puppet$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: puppet
}, [puppetExports]);
export {
  puppet$1 as p
};
