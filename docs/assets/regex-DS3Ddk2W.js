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
var regex_1;
var hasRequiredRegex;
function requireRegex() {
  if (hasRequiredRegex) return regex_1;
  hasRequiredRegex = 1;
  regex_1 = regex2;
  regex2.displayName = "regex";
  regex2.aliases = [];
  function regex2(Prism) {
    (function(Prism2) {
      var specialEscape = {
        pattern: /\\[\\(){}[\]^$+*?|.]/,
        alias: "escape"
      };
      var escape = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/;
      var charSet = {
        pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
        alias: "class-name"
      };
      var charSetWithoutDot = {
        pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
        alias: "class-name"
      };
      var rangeChar = "(?:[^\\\\-]|" + escape.source + ")";
      var range = RegExp(rangeChar + "-" + rangeChar);
      var groupName = {
        pattern: /(<|')[^<>']+(?=[>']$)/,
        lookbehind: true,
        alias: "variable"
      };
      Prism2.languages.regex = {
        "char-class": {
          pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
          lookbehind: true,
          inside: {
            "char-class-negation": {
              pattern: /(^\[)\^/,
              lookbehind: true,
              alias: "operator"
            },
            "char-class-punctuation": {
              pattern: /^\[|\]$/,
              alias: "punctuation"
            },
            range: {
              pattern: range,
              inside: {
                escape,
                "range-punctuation": {
                  pattern: /-/,
                  alias: "operator"
                }
              }
            },
            "special-escape": specialEscape,
            "char-set": charSetWithoutDot,
            escape
          }
        },
        "special-escape": specialEscape,
        "char-set": charSet,
        backreference: [
          {
            // a backreference which is not an octal escape
            pattern: /\\(?![123][0-7]{2})[1-9]/,
            alias: "keyword"
          },
          {
            pattern: /\\k<[^<>']+>/,
            alias: "keyword",
            inside: {
              "group-name": groupName
            }
          }
        ],
        anchor: {
          pattern: /[$^]|\\[ABbGZz]/,
          alias: "function"
        },
        escape,
        group: [
          {
            // https://docs.oracle.com/javase/10/docs/api/java/util/regex/Pattern.html
            // https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference?view=netframework-4.7.2#grouping-constructs
            // (), (?<name>), (?'name'), (?>), (?:), (?=), (?!), (?<=), (?<!), (?is-m), (?i-m:)
            pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
            alias: "punctuation",
            inside: {
              "group-name": groupName
            }
          },
          {
            pattern: /\)/,
            alias: "punctuation"
          }
        ],
        quantifier: {
          pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
          alias: "number"
        },
        alternation: {
          pattern: /\|/,
          alias: "keyword"
        }
      };
    })(Prism);
  }
  return regex_1;
}
var regexExports = requireRegex();
const regex = /* @__PURE__ */ getDefaultExportFromCjs(regexExports);
const regex$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: regex
}, [regexExports]);
export {
  regex$1 as r
};
