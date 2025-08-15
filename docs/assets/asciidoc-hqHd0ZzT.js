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
var asciidoc_1;
var hasRequiredAsciidoc;
function requireAsciidoc() {
  if (hasRequiredAsciidoc) return asciidoc_1;
  hasRequiredAsciidoc = 1;
  asciidoc_1 = asciidoc2;
  asciidoc2.displayName = "asciidoc";
  asciidoc2.aliases = ["adoc"];
  function asciidoc2(Prism) {
    (function(Prism2) {
      var attributes = {
        pattern: /(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\[\]\\]|\\.)*\]|[^\[\]\\"'$`]|\\.)*\]/m,
        lookbehind: true,
        inside: {
          quoted: {
            pattern: /([$`])(?:(?!\1)[^\\]|\\.)*\1/,
            inside: {
              punctuation: /^[$`]|[$`]$/
            }
          },
          interpreted: {
            pattern: /'(?:[^'\\]|\\.)*'/,
            inside: {
              punctuation: /^'|'$/
              // See rest below
            }
          },
          string: /"(?:[^"\\]|\\.)*"/,
          variable: /\w+(?==)/,
          punctuation: /^\[|\]$|,/,
          operator: /=/,
          // The negative look-ahead prevents blank matches
          "attr-value": /(?!^\s+$).+/
        }
      };
      var asciidoc3 = Prism2.languages.asciidoc = {
        "comment-block": {
          pattern: /^(\/{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1/m,
          alias: "comment"
        },
        table: {
          pattern: /^\|={3,}(?:(?:\r?\n|\r(?!\n)).*)*?(?:\r?\n|\r)\|={3,}$/m,
          inside: {
            specifiers: {
              pattern: /(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*](?:[<^>](?:\.[<^>])?|\.[<^>])?|[<^>](?:\.[<^>])?|\.[<^>])[a-z]*|[a-z]+)(?=\|)/,
              alias: "attr-value"
            },
            punctuation: {
              pattern: /(^|[^\\])[|!]=*/,
              lookbehind: true
            }
            // See rest below
          }
        },
        "passthrough-block": {
          pattern: /^(\+{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
          inside: {
            punctuation: /^\++|\++$/
            // See rest below
          }
        },
        // Literal blocks and listing blocks
        "literal-block": {
          pattern: /^(-{4,}|\.{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
          inside: {
            punctuation: /^(?:-+|\.+)|(?:-+|\.+)$/
            // See rest below
          }
        },
        // Sidebar blocks, quote blocks, example blocks and open blocks
        "other-block": {
          pattern: /^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
          inside: {
            punctuation: /^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/
            // See rest below
          }
        },
        // list-punctuation and list-label must appear before indented-block
        "list-punctuation": {
          pattern: /(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,
          lookbehind: true,
          alias: "punctuation"
        },
        "list-label": {
          pattern: /(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,
          lookbehind: true,
          alias: "symbol"
        },
        "indented-block": {
          pattern: /((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,
          lookbehind: true
        },
        comment: /^\/\/.*/m,
        title: {
          pattern: /^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} .+|^\.(?![\s.]).*/m,
          alias: "important",
          inside: {
            punctuation: /^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/
            // See rest below
          }
        },
        "attribute-entry": {
          pattern: /^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,
          alias: "tag"
        },
        attributes,
        hr: {
          pattern: /^'{3,}$/m,
          alias: "punctuation"
        },
        "page-break": {
          pattern: /^<{3,}$/m,
          alias: "punctuation"
        },
        admonition: {
          pattern: /^(?:CAUTION|IMPORTANT|NOTE|TIP|WARNING):/m,
          alias: "keyword"
        },
        callout: [
          {
            pattern: /(^[ \t]*)<?\d*>/m,
            lookbehind: true,
            alias: "symbol"
          },
          {
            pattern: /<\d+>/,
            alias: "symbol"
          }
        ],
        macro: {
          pattern: /\b[a-z\d][a-z\d-]*::?(?:[^\s\[\]]*\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
          inside: {
            function: /^[a-z\d-]+(?=:)/,
            punctuation: /^::?/,
            attributes: {
              pattern: /(?:\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
              inside: attributes.inside
            }
          }
        },
        inline: {
          /*
          The initial look-behind prevents the highlighting of escaped quoted text.
          Quoted text can be multi-line but cannot span an empty line.
          All quoted text can have attributes before [foobar, 'foobar', baz="bar"].
          First, we handle the constrained quotes.
          Those must be bounded by non-word chars and cannot have spaces between the delimiter and the first char.
          They are, in order: _emphasis_, ``double quotes'', `single quotes', `monospace`, 'emphasis', *strong*, +monospace+ and #unquoted#
          Then we handle the unconstrained quotes.
          Those do not have the restrictions of the constrained quotes.
          They are, in order: __emphasis__, **strong**, ++monospace++, +++passthrough+++, ##unquoted##, $$passthrough$$, ~subscript~, ^superscript^, {attribute-reference}, [[anchor]], [[[bibliography anchor]]], <<xref>>, (((indexes))) and ((indexes))
          */
          pattern: /(^|[^\\])(?:(?:\B\[(?:[^\]\\"']|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?:[^`'\s]|\s+\S)+['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"']|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,
          lookbehind: true,
          inside: {
            attributes,
            url: {
              pattern: /^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,
              inside: {
                punctuation: /^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/
              }
            },
            "attribute-ref": {
              pattern: /^\{.+\}$/,
              inside: {
                variable: {
                  pattern: /(^\{)[a-z\d,+_-]+/,
                  lookbehind: true
                },
                operator: /^[=?!#%@$]|!(?=[:}])/,
                punctuation: /^\{|\}$|::?/
              }
            },
            italic: {
              pattern: /^(['_])[\s\S]+\1$/,
              inside: {
                punctuation: /^(?:''?|__?)|(?:''?|__?)$/
              }
            },
            bold: {
              pattern: /^\*[\s\S]+\*$/,
              inside: {
                punctuation: /^\*\*?|\*\*?$/
              }
            },
            punctuation: /^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/
          }
        },
        replacement: {
          pattern: /\((?:C|R|TM)\)/,
          alias: "builtin"
        },
        entity: /&#?[\da-z]{1,8};/i,
        "line-continuation": {
          pattern: /(^| )\+$/m,
          lookbehind: true,
          alias: "punctuation"
        }
      };
      function copyFromAsciiDoc(keys) {
        keys = keys.split(" ");
        var o = {};
        for (var i = 0, l = keys.length; i < l; i++) {
          o[keys[i]] = asciidoc3[keys[i]];
        }
        return o;
      }
      attributes.inside["interpreted"].inside.rest = copyFromAsciiDoc(
        "macro inline replacement entity"
      );
      asciidoc3["passthrough-block"].inside.rest = copyFromAsciiDoc("macro");
      asciidoc3["literal-block"].inside.rest = copyFromAsciiDoc("callout");
      asciidoc3["table"].inside.rest = copyFromAsciiDoc(
        "comment-block passthrough-block literal-block other-block list-punctuation indented-block comment title attribute-entry attributes hr page-break admonition list-label callout macro inline replacement entity line-continuation"
      );
      asciidoc3["other-block"].inside.rest = copyFromAsciiDoc(
        "table list-punctuation indented-block comment attribute-entry attributes hr page-break admonition list-label macro inline replacement entity line-continuation"
      );
      asciidoc3["title"].inside.rest = copyFromAsciiDoc(
        "macro inline replacement entity"
      );
      Prism2.hooks.add("wrap", function(env) {
        if (env.type === "entity") {
          env.attributes["title"] = env.content.value.replace(/&amp;/, "&");
        }
      });
      Prism2.languages.adoc = Prism2.languages.asciidoc;
    })(Prism);
  }
  return asciidoc_1;
}
var asciidocExports = requireAsciidoc();
const asciidoc = /* @__PURE__ */ getDefaultExportFromCjs(asciidocExports);
const asciidoc$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: asciidoc
}, [asciidocExports]);
export {
  asciidoc$1 as a
};
