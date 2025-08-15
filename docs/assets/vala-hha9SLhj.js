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
var vala_1;
var hasRequiredVala;
function requireVala() {
  if (hasRequiredVala) return vala_1;
  hasRequiredVala = 1;
  vala_1 = vala2;
  vala2.displayName = "vala";
  vala2.aliases = [];
  function vala2(Prism) {
    Prism.languages.vala = Prism.languages.extend("clike", {
      // Classes copied from prism-csharp
      "class-name": [
        {
          // (Foo bar, Bar baz)
          pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=(?:\?\s+|\*?\s+\*?)\w)/,
          inside: {
            punctuation: /\./
          }
        },
        {
          // [Foo]
          pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
          lookbehind: true,
          inside: {
            punctuation: /\./
          }
        },
        {
          // class Foo : Bar
          pattern: /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
          lookbehind: true,
          inside: {
            punctuation: /\./
          }
        },
        {
          // class Foo
          pattern: /((?:\b(?:class|enum|interface|new|struct)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
          lookbehind: true,
          inside: {
            punctuation: /\./
          }
        }
      ],
      keyword: /\b(?:abstract|as|assert|async|base|bool|break|case|catch|char|class|const|construct|continue|default|delegate|delete|do|double|dynamic|else|ensures|enum|errordomain|extern|finally|float|for|foreach|get|if|in|inline|int|int16|int32|int64|int8|interface|internal|is|lock|long|namespace|new|null|out|override|owned|params|private|protected|public|ref|requires|return|set|short|signal|sizeof|size_t|ssize_t|static|string|struct|switch|this|throw|throws|try|typeof|uchar|uint|uint16|uint32|uint64|uint8|ulong|unichar|unowned|ushort|using|value|var|virtual|void|volatile|weak|while|yield)\b/i,
      function: /\b\w+(?=\s*\()/,
      number: /(?:\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?:f|u?l?)?/i,
      operator: /\+\+|--|&&|\|\||<<=?|>>=?|=>|->|~|[+\-*\/%&^|=!<>]=?|\?\??|\.\.\./,
      punctuation: /[{}[\];(),.:]/,
      constant: /\b[A-Z0-9_]+\b/
    });
    Prism.languages.insertBefore("vala", "string", {
      "raw-string": {
        pattern: /"""[\s\S]*?"""/,
        greedy: true,
        alias: "string"
      },
      "template-string": {
        pattern: /@"[\s\S]*?"/,
        greedy: true,
        inside: {
          interpolation: {
            pattern: /\$(?:\([^)]*\)|[a-zA-Z]\w*)/,
            inside: {
              delimiter: {
                pattern: /^\$\(?|\)$/,
                alias: "punctuation"
              },
              rest: Prism.languages.vala
            }
          },
          string: /[\s\S]+/
        }
      }
    });
    Prism.languages.insertBefore("vala", "keyword", {
      regex: {
        pattern: /\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[imsx]{0,4}(?=\s*(?:$|[\r\n,.;})\]]))/,
        greedy: true,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: true,
            alias: "language-regex",
            inside: Prism.languages.regex
          },
          "regex-delimiter": /^\//,
          "regex-flags": /^[a-z]+$/
        }
      }
    });
  }
  return vala_1;
}
var valaExports = requireVala();
const vala = /* @__PURE__ */ getDefaultExportFromCjs(valaExports);
const vala$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: vala
}, [valaExports]);
export {
  vala$1 as v
};
