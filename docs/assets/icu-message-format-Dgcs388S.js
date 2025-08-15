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
var icuMessageFormat_1;
var hasRequiredIcuMessageFormat;
function requireIcuMessageFormat() {
  if (hasRequiredIcuMessageFormat) return icuMessageFormat_1;
  hasRequiredIcuMessageFormat = 1;
  icuMessageFormat_1 = icuMessageFormat2;
  icuMessageFormat2.displayName = "icuMessageFormat";
  icuMessageFormat2.aliases = [];
  function icuMessageFormat2(Prism) {
    (function(Prism2) {
      function nested(source, level) {
        if (level <= 0) {
          return /[]/.source;
        } else {
          return source.replace(/<SELF>/g, function() {
            return nested(source, level - 1);
          });
        }
      }
      var stringPattern = /'[{}:=,](?:[^']|'')*'(?!')/;
      var escape = {
        pattern: /''/,
        greedy: true,
        alias: "operator"
      };
      var string = {
        pattern: stringPattern,
        greedy: true,
        inside: {
          escape
        }
      };
      var argumentSource = nested(
        /\{(?:[^{}']|'(?![{},'])|''|<STR>|<SELF>)*\}/.source.replace(
          /<STR>/g,
          function() {
            return stringPattern.source;
          }
        ),
        8
      );
      var nestedMessage = {
        pattern: RegExp(argumentSource),
        inside: {
          message: {
            pattern: /^(\{)[\s\S]+(?=\}$)/,
            lookbehind: true,
            inside: null
            // see below
          },
          "message-delimiter": {
            pattern: /./,
            alias: "punctuation"
          }
        }
      };
      Prism2.languages["icu-message-format"] = {
        argument: {
          pattern: RegExp(argumentSource),
          greedy: true,
          inside: {
            content: {
              pattern: /^(\{)[\s\S]+(?=\}$)/,
              lookbehind: true,
              inside: {
                "argument-name": {
                  pattern: /^(\s*)[^{}:=,\s]+/,
                  lookbehind: true
                },
                "choice-style": {
                  // https://unicode-org.github.io/icu-docs/apidoc/released/icu4c/classicu_1_1ChoiceFormat.html#details
                  pattern: /^(\s*,\s*choice\s*,\s*)\S(?:[\s\S]*\S)?/,
                  lookbehind: true,
                  inside: {
                    punctuation: /\|/,
                    range: {
                      pattern: /^(\s*)[+-]?(?:\d+(?:\.\d*)?|\u221e)\s*[<#\u2264]/,
                      lookbehind: true,
                      inside: {
                        operator: /[<#\u2264]/,
                        number: /\S+/
                      }
                    },
                    rest: null
                    // see below
                  }
                },
                "plural-style": {
                  // https://unicode-org.github.io/icu-docs/apidoc/released/icu4j/com/ibm/icu/text/PluralFormat.html#:~:text=Patterns%20and%20Their%20Interpretation
                  pattern: /^(\s*,\s*(?:plural|selectordinal)\s*,\s*)\S(?:[\s\S]*\S)?/,
                  lookbehind: true,
                  inside: {
                    offset: /^offset:\s*\d+/,
                    "nested-message": nestedMessage,
                    selector: {
                      pattern: /=\d+|[^{}:=,\s]+/,
                      inside: {
                        keyword: /^(?:few|many|one|other|two|zero)$/
                      }
                    }
                  }
                },
                "select-style": {
                  // https://unicode-org.github.io/icu-docs/apidoc/released/icu4j/com/ibm/icu/text/SelectFormat.html#:~:text=Patterns%20and%20Their%20Interpretation
                  pattern: /^(\s*,\s*select\s*,\s*)\S(?:[\s\S]*\S)?/,
                  lookbehind: true,
                  inside: {
                    "nested-message": nestedMessage,
                    selector: {
                      pattern: /[^{}:=,\s]+/,
                      inside: {
                        keyword: /^other$/
                      }
                    }
                  }
                },
                keyword: /\b(?:choice|plural|select|selectordinal)\b/,
                "arg-type": {
                  pattern: /\b(?:date|duration|number|ordinal|spellout|time)\b/,
                  alias: "keyword"
                },
                "arg-skeleton": {
                  pattern: /(,\s*)::[^{}:=,\s]+/,
                  lookbehind: true
                },
                "arg-style": {
                  pattern: /(,\s*)(?:currency|full|integer|long|medium|percent|short)(?=\s*$)/,
                  lookbehind: true
                },
                "arg-style-text": {
                  pattern: RegExp(
                    /(^\s*,\s*(?=\S))/.source + nested(/(?:[^{}']|'[^']*'|\{(?:<SELF>)?\})+/.source, 8) + "$"
                  ),
                  lookbehind: true,
                  alias: "string"
                },
                punctuation: /,/
              }
            },
            "argument-delimiter": {
              pattern: /./,
              alias: "operator"
            }
          }
        },
        escape,
        string
      };
      nestedMessage.inside.message.inside = Prism2.languages["icu-message-format"];
      Prism2.languages["icu-message-format"].argument.inside.content.inside["choice-style"].inside.rest = Prism2.languages["icu-message-format"];
    })(Prism);
  }
  return icuMessageFormat_1;
}
var icuMessageFormatExports = requireIcuMessageFormat();
const icuMessageFormat = /* @__PURE__ */ getDefaultExportFromCjs(icuMessageFormatExports);
const icuMessageFormat$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: icuMessageFormat
}, [icuMessageFormatExports]);
export {
  icuMessageFormat$1 as i
};
