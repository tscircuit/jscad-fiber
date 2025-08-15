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
var markdown_1;
var hasRequiredMarkdown;
function requireMarkdown() {
  if (hasRequiredMarkdown) return markdown_1;
  hasRequiredMarkdown = 1;
  markdown_1 = markdown2;
  markdown2.displayName = "markdown";
  markdown2.aliases = ["md"];
  function markdown2(Prism) {
    (function(Prism2) {
      var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function createInline(pattern) {
        pattern = pattern.replace(/<inner>/g, function() {
          return inner;
        });
        return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + pattern + ")");
      }
      var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
      var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
        /__/g,
        function() {
          return tableCell;
        }
      );
      var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      Prism2.languages.markdown = Prism2.languages.extend("markup", {});
      Prism2.languages.insertBefore("markdown", "prolog", {
        "front-matter-block": {
          pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
          lookbehind: true,
          greedy: true,
          inside: {
            punctuation: /^---|---$/,
            "front-matter": {
              pattern: /\S+(?:\s+\S+)*/,
              alias: ["yaml", "language-yaml"],
              inside: Prism2.languages.yaml
            }
          }
        },
        blockquote: {
          // > ...
          pattern: /^>(?:[\t ]*>)*/m,
          alias: "punctuation"
        },
        table: {
          pattern: RegExp(
            "^" + tableRow + tableLine + "(?:" + tableRow + ")*",
            "m"
          ),
          inside: {
            "table-data-rows": {
              pattern: RegExp(
                "^(" + tableRow + tableLine + ")(?:" + tableRow + ")*$"
              ),
              lookbehind: true,
              inside: {
                "table-data": {
                  pattern: RegExp(tableCell),
                  inside: Prism2.languages.markdown
                },
                punctuation: /\|/
              }
            },
            "table-line": {
              pattern: RegExp("^(" + tableRow + ")" + tableLine + "$"),
              lookbehind: true,
              inside: {
                punctuation: /\||:?-{3,}:?/
              }
            },
            "table-header-row": {
              pattern: RegExp("^" + tableRow + "$"),
              inside: {
                "table-header": {
                  pattern: RegExp(tableCell),
                  alias: "important",
                  inside: Prism2.languages.markdown
                },
                punctuation: /\|/
              }
            }
          }
        },
        code: [
          {
            // Prefixed by 4 spaces or 1 tab and preceded by an empty line
            pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: true,
            alias: "keyword"
          },
          {
            // ```optional language
            // code block
            // ```
            pattern: /^```[\s\S]*?^```$/m,
            greedy: true,
            inside: {
              "code-block": {
                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                lookbehind: true
              },
              "code-language": {
                pattern: /^(```).+/,
                lookbehind: true
              },
              punctuation: /```/
            }
          }
        ],
        title: [
          {
            // title 1
            // =======
            // title 2
            // -------
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: "important",
            inside: {
              punctuation: /==+$|--+$/
            }
          },
          {
            // # title 1
            // ###### title 6
            pattern: /(^\s*)#.+/m,
            lookbehind: true,
            alias: "important",
            inside: {
              punctuation: /^#+|#+$/
            }
          }
        ],
        hr: {
          // ***
          // ---
          // * * *
          // -----------
          pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
          lookbehind: true,
          alias: "punctuation"
        },
        list: {
          // * item
          // + item
          // - item
          // 1. item
          pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
          lookbehind: true,
          alias: "punctuation"
        },
        "url-reference": {
          // [id]: http://example.com "Optional title"
          // [id]: http://example.com 'Optional title'
          // [id]: http://example.com (Optional title)
          // [id]: <http://example.com> "Optional title"
          pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
          inside: {
            variable: {
              pattern: /^(!?\[)[^\]]+/,
              lookbehind: true
            },
            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/
          },
          alias: "url"
        },
        bold: {
          // **strong**
          // __strong__
          // allow one nested instance of italic text using the same delimiter
          pattern: createInline(
            /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^..)[\s\S]+(?=..$)/,
              lookbehind: true,
              inside: {}
              // see below
            },
            punctuation: /\*\*|__/
          }
        },
        italic: {
          // *em*
          // _em_
          // allow one nested instance of bold text using the same delimiter
          pattern: createInline(
            /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^.)[\s\S]+(?=.$)/,
              lookbehind: true,
              inside: {}
              // see below
            },
            punctuation: /[*_]/
          }
        },
        strike: {
          // ~~strike through~~
          // ~strike~
          // eslint-disable-next-line regexp/strict
          pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^~~?)[\s\S]+(?=\1$)/,
              lookbehind: true,
              inside: {}
              // see below
            },
            punctuation: /~~?/
          }
        },
        "code-snippet": {
          // `code`
          // ``code``
          pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
          lookbehind: true,
          greedy: true,
          alias: ["code", "keyword"]
        },
        url: {
          // [example](http://example.com "Optional title")
          // [example][id]
          // [example] [id]
          pattern: createInline(
            /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            operator: /^!/,
            content: {
              pattern: /(^\[)[^\]]+(?=\])/,
              lookbehind: true,
              inside: {}
              // see below
            },
            variable: {
              pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
              lookbehind: true
            },
            url: {
              pattern: /(^\]\()[^\s)]+/,
              lookbehind: true
            },
            string: {
              pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
              lookbehind: true
            }
          }
        }
      });
      ["url", "bold", "italic", "strike"].forEach(function(token) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(inside) {
          if (token !== inside) {
            Prism2.languages.markdown[token].inside.content.inside[inside] = Prism2.languages.markdown[inside];
          }
        });
      });
      Prism2.hooks.add("after-tokenize", function(env) {
        if (env.language !== "markdown" && env.language !== "md") {
          return;
        }
        function walkTokens(tokens) {
          if (!tokens || typeof tokens === "string") {
            return;
          }
          for (var i = 0, l = tokens.length; i < l; i++) {
            var token = tokens[i];
            if (token.type !== "code") {
              walkTokens(token.content);
              continue;
            }
            var codeLang = token.content[1];
            var codeBlock = token.content[3];
            if (codeLang && codeBlock && codeLang.type === "code-language" && codeBlock.type === "code-block" && typeof codeLang.content === "string") {
              var lang = codeLang.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
              lang = (/[a-z][\w-]*/i.exec(lang) || [""])[0].toLowerCase();
              var alias = "language-" + lang;
              if (!codeBlock.alias) {
                codeBlock.alias = [alias];
              } else if (typeof codeBlock.alias === "string") {
                codeBlock.alias = [codeBlock.alias, alias];
              } else {
                codeBlock.alias.push(alias);
              }
            }
          }
        }
        walkTokens(env.tokens);
      });
      Prism2.hooks.add("wrap", function(env) {
        if (env.type !== "code-block") {
          return;
        }
        var codeLang = "";
        for (var i = 0, l = env.classes.length; i < l; i++) {
          var cls = env.classes[i];
          var match = /language-(.+)/.exec(cls);
          if (match) {
            codeLang = match[1];
            break;
          }
        }
        var grammar = Prism2.languages[codeLang];
        if (!grammar) {
          if (codeLang && codeLang !== "none" && Prism2.plugins.autoloader) {
            var id = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
            env.attributes["id"] = id;
            Prism2.plugins.autoloader.loadLanguages(codeLang, function() {
              var ele = document.getElementById(id);
              if (ele) {
                ele.innerHTML = Prism2.highlight(
                  ele.textContent,
                  Prism2.languages[codeLang],
                  codeLang
                );
              }
            });
          }
        } else {
          env.content = Prism2.highlight(
            textContent(env.content.value),
            grammar,
            codeLang
          );
        }
      });
      var tagPattern = RegExp(Prism2.languages.markup.tag.pattern.source, "gi");
      var KNOWN_ENTITY_NAMES = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: '"'
      };
      var fromCodePoint = String.fromCodePoint || String.fromCharCode;
      function textContent(html) {
        var text = html.replace(tagPattern, "");
        text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(m, code) {
          code = code.toLowerCase();
          if (code[0] === "#") {
            var value;
            if (code[1] === "x") {
              value = parseInt(code.slice(2), 16);
            } else {
              value = Number(code.slice(1));
            }
            return fromCodePoint(value);
          } else {
            var known = KNOWN_ENTITY_NAMES[code];
            if (known) {
              return known;
            }
            return m;
          }
        });
        return text;
      }
      Prism2.languages.md = Prism2.languages.markdown;
    })(Prism);
  }
  return markdown_1;
}
var markdownExports = requireMarkdown();
const markdown = /* @__PURE__ */ getDefaultExportFromCjs(markdownExports);
const markdown$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: markdown
}, [markdownExports]);
export {
  markdown$1 as m
};
