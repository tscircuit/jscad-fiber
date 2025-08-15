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
var textile_1;
var hasRequiredTextile;
function requireTextile() {
  if (hasRequiredTextile) return textile_1;
  hasRequiredTextile = 1;
  textile_1 = textile2;
  textile2.displayName = "textile";
  textile2.aliases = [];
  function textile2(Prism) {
    (function(Prism2) {
      var modifierRegex = /\([^|()\n]+\)|\[[^\]\n]+\]|\{[^}\n]+\}/.source;
      var parenthesesRegex = /\)|\((?![^|()\n]+\))/.source;
      function withModifier(source, flags) {
        return RegExp(
          source.replace(/<MOD>/g, function() {
            return "(?:" + modifierRegex + ")";
          }).replace(/<PAR>/g, function() {
            return "(?:" + parenthesesRegex + ")";
          }),
          flags || ""
        );
      }
      var modifierTokens = {
        css: {
          pattern: /\{[^{}]+\}/,
          inside: {
            rest: Prism2.languages.css
          }
        },
        "class-id": {
          pattern: /(\()[^()]+(?=\))/,
          lookbehind: true,
          alias: "attr-value"
        },
        lang: {
          pattern: /(\[)[^\[\]]+(?=\])/,
          lookbehind: true,
          alias: "attr-value"
        },
        // Anything else is punctuation (the first pattern is for row/col spans inside tables)
        punctuation: /[\\\/]\d+|\S/
      };
      var textile3 = Prism2.languages.textile = Prism2.languages.extend("markup", {
        phrase: {
          pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
          lookbehind: true,
          inside: {
            // h1. Header 1
            "block-tag": {
              pattern: withModifier(/^[a-z]\w*(?:<MOD>|<PAR>|[<>=])*\./.source),
              inside: {
                modifier: {
                  pattern: withModifier(
                    /(^[a-z]\w*)(?:<MOD>|<PAR>|[<>=])+(?=\.)/.source
                  ),
                  lookbehind: true,
                  inside: modifierTokens
                },
                tag: /^[a-z]\w*/,
                punctuation: /\.$/
              }
            },
            // # List item
            // * List item
            list: {
              pattern: withModifier(/^[*#]+<MOD>*\s+\S.*/.source, "m"),
              inside: {
                modifier: {
                  pattern: withModifier(/(^[*#]+)<MOD>+/.source),
                  lookbehind: true,
                  inside: modifierTokens
                },
                punctuation: /^[*#]+/
              }
            },
            // | cell | cell | cell |
            table: {
              // Modifiers can be applied to the row: {color:red}.|1|2|3|
              // or the cell: |{color:red}.1|2|3|
              pattern: withModifier(
                /^(?:(?:<MOD>|<PAR>|[<>=^~])+\.\s*)?(?:\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.))[^|]*)+\|/.source,
                "m"
              ),
              inside: {
                modifier: {
                  // Modifiers for rows after the first one are
                  // preceded by a pipe and a line feed
                  pattern: withModifier(
                    /(^|\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+(?=\.)/.source
                  ),
                  lookbehind: true,
                  inside: modifierTokens
                },
                punctuation: /\||^\./
              }
            },
            inline: {
              // eslint-disable-next-line regexp/no-super-linear-backtracking
              pattern: withModifier(
                /(^|[^a-zA-Z\d])(\*\*|__|\?\?|[*_%@+\-^~])<MOD>*.+?\2(?![a-zA-Z\d])/.source
              ),
              lookbehind: true,
              inside: {
                // Note: superscripts and subscripts are not handled specifically
                // *bold*, **bold**
                bold: {
                  // eslint-disable-next-line regexp/no-super-linear-backtracking
                  pattern: withModifier(/(^(\*\*?)<MOD>*).+?(?=\2)/.source),
                  lookbehind: true
                },
                // _italic_, __italic__
                italic: {
                  // eslint-disable-next-line regexp/no-super-linear-backtracking
                  pattern: withModifier(/(^(__?)<MOD>*).+?(?=\2)/.source),
                  lookbehind: true
                },
                // ??cite??
                cite: {
                  // eslint-disable-next-line regexp/no-super-linear-backtracking
                  pattern: withModifier(/(^\?\?<MOD>*).+?(?=\?\?)/.source),
                  lookbehind: true,
                  alias: "string"
                },
                // @code@
                code: {
                  // eslint-disable-next-line regexp/no-super-linear-backtracking
                  pattern: withModifier(/(^@<MOD>*).+?(?=@)/.source),
                  lookbehind: true,
                  alias: "keyword"
                },
                // +inserted+
                inserted: {
                  // eslint-disable-next-line regexp/no-super-linear-backtracking
                  pattern: withModifier(/(^\+<MOD>*).+?(?=\+)/.source),
                  lookbehind: true
                },
                // -deleted-
                deleted: {
                  // eslint-disable-next-line regexp/no-super-linear-backtracking
                  pattern: withModifier(/(^-<MOD>*).+?(?=-)/.source),
                  lookbehind: true
                },
                // %span%
                span: {
                  // eslint-disable-next-line regexp/no-super-linear-backtracking
                  pattern: withModifier(/(^%<MOD>*).+?(?=%)/.source),
                  lookbehind: true
                },
                modifier: {
                  pattern: withModifier(
                    /(^\*\*|__|\?\?|[*_%@+\-^~])<MOD>+/.source
                  ),
                  lookbehind: true,
                  inside: modifierTokens
                },
                punctuation: /[*_%?@+\-^~]+/
              }
            },
            // [alias]http://example.com
            "link-ref": {
              pattern: /^\[[^\]]+\]\S+$/m,
              inside: {
                string: {
                  pattern: /(^\[)[^\]]+(?=\])/,
                  lookbehind: true
                },
                url: {
                  pattern: /(^\])\S+$/,
                  lookbehind: true
                },
                punctuation: /[\[\]]/
              }
            },
            // "text":http://example.com
            // "text":link-ref
            link: {
              // eslint-disable-next-line regexp/no-super-linear-backtracking
              pattern: withModifier(
                /"<MOD>*[^"]+":.+?(?=[^\w/]?(?:\s|$))/.source
              ),
              inside: {
                text: {
                  // eslint-disable-next-line regexp/no-super-linear-backtracking
                  pattern: withModifier(/(^"<MOD>*)[^"]+(?=")/.source),
                  lookbehind: true
                },
                modifier: {
                  pattern: withModifier(/(^")<MOD>+/.source),
                  lookbehind: true,
                  inside: modifierTokens
                },
                url: {
                  pattern: /(:).+/,
                  lookbehind: true
                },
                punctuation: /[":]/
              }
            },
            // !image.jpg!
            // !image.jpg(Title)!:http://example.com
            image: {
              pattern: withModifier(
                /!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\s()]+(?:\([^)]+\))?!(?::.+?(?=[^\w/]?(?:\s|$)))?/.source
              ),
              inside: {
                source: {
                  pattern: withModifier(
                    /(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\s()]+(?:\([^)]+\))?(?=!)/.source
                  ),
                  lookbehind: true,
                  alias: "url"
                },
                modifier: {
                  pattern: withModifier(/(^!)(?:<MOD>|<PAR>|[<>=])+/.source),
                  lookbehind: true,
                  inside: modifierTokens
                },
                url: {
                  pattern: /(:).+/,
                  lookbehind: true
                },
                punctuation: /[!:]/
              }
            },
            // Footnote[1]
            footnote: {
              pattern: /\b\[\d+\]/,
              alias: "comment",
              inside: {
                punctuation: /\[|\]/
              }
            },
            // CSS(Cascading Style Sheet)
            acronym: {
              pattern: /\b[A-Z\d]+\([^)]+\)/,
              inside: {
                comment: {
                  pattern: /(\()[^()]+(?=\))/,
                  lookbehind: true
                },
                punctuation: /[()]/
              }
            },
            // Prism(C)
            mark: {
              pattern: /\b\((?:C|R|TM)\)/,
              alias: "comment",
              inside: {
                punctuation: /[()]/
              }
            }
          }
        }
      });
      var phraseInside = textile3["phrase"].inside;
      var nestedPatterns = {
        inline: phraseInside["inline"],
        link: phraseInside["link"],
        image: phraseInside["image"],
        footnote: phraseInside["footnote"],
        acronym: phraseInside["acronym"],
        mark: phraseInside["mark"]
      };
      textile3.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;
      var phraseInlineInside = phraseInside["inline"].inside;
      phraseInlineInside["bold"].inside = nestedPatterns;
      phraseInlineInside["italic"].inside = nestedPatterns;
      phraseInlineInside["inserted"].inside = nestedPatterns;
      phraseInlineInside["deleted"].inside = nestedPatterns;
      phraseInlineInside["span"].inside = nestedPatterns;
      var phraseTableInside = phraseInside["table"].inside;
      phraseTableInside["inline"] = nestedPatterns["inline"];
      phraseTableInside["link"] = nestedPatterns["link"];
      phraseTableInside["image"] = nestedPatterns["image"];
      phraseTableInside["footnote"] = nestedPatterns["footnote"];
      phraseTableInside["acronym"] = nestedPatterns["acronym"];
      phraseTableInside["mark"] = nestedPatterns["mark"];
    })(Prism);
  }
  return textile_1;
}
var textileExports = requireTextile();
const textile = /* @__PURE__ */ getDefaultExportFromCjs(textileExports);
const textile$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: textile
}, [textileExports]);
export {
  textile$1 as t
};
