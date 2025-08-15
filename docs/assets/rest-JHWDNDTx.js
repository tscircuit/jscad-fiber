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
var rest_1;
var hasRequiredRest;
function requireRest() {
  if (hasRequiredRest) return rest_1;
  hasRequiredRest = 1;
  rest_1 = rest2;
  rest2.displayName = "rest";
  rest2.aliases = [];
  function rest2(Prism) {
    Prism.languages.rest = {
      table: [
        {
          pattern: /(^[\t ]*)(?:\+[=-]+)+\+(?:\r?\n|\r)(?:\1[+|].+[+|](?:\r?\n|\r))+\1(?:\+[=-]+)+\+/m,
          lookbehind: true,
          inside: {
            punctuation: /\||(?:\+[=-]+)+\+/
          }
        },
        {
          pattern: /(^[\t ]*)=+ [ =]*=(?:(?:\r?\n|\r)\1.+)+(?:\r?\n|\r)\1=+ [ =]*=(?=(?:\r?\n|\r){2}|\s*$)/m,
          lookbehind: true,
          inside: {
            punctuation: /[=-]+/
          }
        }
      ],
      // Directive-like patterns
      "substitution-def": {
        pattern: /(^[\t ]*\.\. )\|(?:[^|\s](?:[^|]*[^|\s])?)\| [^:]+::/m,
        lookbehind: true,
        inside: {
          substitution: {
            pattern: /^\|(?:[^|\s]|[^|\s][^|]*[^|\s])\|/,
            alias: "attr-value",
            inside: {
              punctuation: /^\||\|$/
            }
          },
          directive: {
            pattern: /( )(?! )[^:]+::/,
            lookbehind: true,
            alias: "function",
            inside: {
              punctuation: /::$/
            }
          }
        }
      },
      "link-target": [
        {
          pattern: /(^[\t ]*\.\. )\[[^\]]+\]/m,
          lookbehind: true,
          alias: "string",
          inside: {
            punctuation: /^\[|\]$/
          }
        },
        {
          pattern: /(^[\t ]*\.\. )_(?:`[^`]+`|(?:[^:\\]|\\.)+):/m,
          lookbehind: true,
          alias: "string",
          inside: {
            punctuation: /^_|:$/
          }
        }
      ],
      directive: {
        pattern: /(^[\t ]*\.\. )[^:]+::/m,
        lookbehind: true,
        alias: "function",
        inside: {
          punctuation: /::$/
        }
      },
      comment: {
        // The two alternatives try to prevent highlighting of blank comments
        pattern: /(^[\t ]*\.\.)(?:(?: .+)?(?:(?:\r?\n|\r).+)+| .+)(?=(?:\r?\n|\r){2}|$)/m,
        lookbehind: true
      },
      title: [
        // Overlined and underlined
        {
          pattern: /^(([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+)(?:\r?\n|\r).+(?:\r?\n|\r)\1$/m,
          inside: {
            punctuation: /^[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+|[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
            important: /.+/
          }
        },
        // Underlined only
        {
          pattern: /(^|(?:\r?\n|\r){2}).+(?:\r?\n|\r)([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+(?=\r?\n|\r|$)/,
          lookbehind: true,
          inside: {
            punctuation: /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
            important: /.+/
          }
        }
      ],
      hr: {
        pattern: /((?:\r?\n|\r){2})([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2{3,}(?=(?:\r?\n|\r){2})/,
        lookbehind: true,
        alias: "punctuation"
      },
      field: {
        pattern: /(^[\t ]*):[^:\r\n]+:(?= )/m,
        lookbehind: true,
        alias: "attr-name"
      },
      "command-line-option": {
        pattern: /(^[\t ]*)(?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?(?:, (?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?)*(?=(?:\r?\n|\r)? {2,}\S)/im,
        lookbehind: true,
        alias: "symbol"
      },
      "literal-block": {
        pattern: /::(?:\r?\n|\r){2}([ \t]+)(?![ \t]).+(?:(?:\r?\n|\r)\1.+)*/,
        inside: {
          "literal-block-punctuation": {
            pattern: /^::/,
            alias: "punctuation"
          }
        }
      },
      "quoted-literal-block": {
        pattern: /::(?:\r?\n|\r){2}([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]).*(?:(?:\r?\n|\r)\1.*)*/,
        inside: {
          "literal-block-punctuation": {
            pattern: /^(?:::|([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\1*)/m,
            alias: "punctuation"
          }
        }
      },
      "list-bullet": {
        pattern: /(^[\t ]*)(?:[*+\-•‣⁃]|\(?(?:\d+|[a-z]|[ivxdclm]+)\)|(?:\d+|[a-z]|[ivxdclm]+)\.)(?= )/im,
        lookbehind: true,
        alias: "punctuation"
      },
      "doctest-block": {
        pattern: /(^[\t ]*)>>> .+(?:(?:\r?\n|\r).+)*/m,
        lookbehind: true,
        inside: {
          punctuation: /^>>>/
        }
      },
      inline: [
        {
          pattern: /(^|[\s\-:\/'"<(\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\*\*?|``?|\|)(?!\s)(?:(?!\2).)*\S\2(?=[\s\-.,:;!?\\\/'")\]}]|$))/m,
          lookbehind: true,
          inside: {
            bold: {
              pattern: /(^\*\*).+(?=\*\*$)/,
              lookbehind: true
            },
            italic: {
              pattern: /(^\*).+(?=\*$)/,
              lookbehind: true
            },
            "inline-literal": {
              pattern: /(^``).+(?=``$)/,
              lookbehind: true,
              alias: "symbol"
            },
            role: {
              pattern: /^:[^:]+:|:[^:]+:$/,
              alias: "function",
              inside: {
                punctuation: /^:|:$/
              }
            },
            "interpreted-text": {
              pattern: /(^`).+(?=`$)/,
              lookbehind: true,
              alias: "attr-value"
            },
            substitution: {
              pattern: /(^\|).+(?=\|$)/,
              lookbehind: true,
              alias: "attr-value"
            },
            punctuation: /\*\*?|``?|\|/
          }
        }
      ],
      link: [
        {
          pattern: /\[[^\[\]]+\]_(?=[\s\-.,:;!?\\\/'")\]}]|$)/,
          alias: "string",
          inside: {
            punctuation: /^\[|\]_$/
          }
        },
        {
          pattern: /(?:\b[a-z\d]+(?:[_.:+][a-z\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\s\-.,:;!?\\\/'")\]}]|$)/i,
          alias: "string",
          inside: {
            punctuation: /^_?`|`$|`?_?_$/
          }
        }
      ],
      // Line block start,
      // quote attribution,
      // explicit markup start,
      // and anonymous hyperlink target shortcut (__)
      punctuation: {
        pattern: /(^[\t ]*)(?:\|(?= |$)|(?:---?|—|\.\.|__)(?= )|\.\.$)/m,
        lookbehind: true
      }
    };
  }
  return rest_1;
}
var restExports = requireRest();
const rest = /* @__PURE__ */ getDefaultExportFromCjs(restExports);
const rest$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: rest
}, [restExports]);
export {
  rest$1 as r
};
