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
var kotlin_1;
var hasRequiredKotlin;
function requireKotlin() {
  if (hasRequiredKotlin) return kotlin_1;
  hasRequiredKotlin = 1;
  kotlin_1 = kotlin2;
  kotlin2.displayName = "kotlin";
  kotlin2.aliases = ["kt", "kts"];
  function kotlin2(Prism) {
    (function(Prism2) {
      Prism2.languages.kotlin = Prism2.languages.extend("clike", {
        keyword: {
          // The lookbehind prevents wrong highlighting of e.g. kotlin.properties.get
          pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
          lookbehind: true
        },
        function: [
          {
            pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
            greedy: true
          },
          {
            pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
            lookbehind: true,
            greedy: true
          }
        ],
        number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
        operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
      });
      delete Prism2.languages.kotlin["class-name"];
      var interpolationInside = {
        "interpolation-punctuation": {
          pattern: /^\$\{?|\}$/,
          alias: "punctuation"
        },
        expression: {
          pattern: /[\s\S]+/,
          inside: Prism2.languages.kotlin
        }
      };
      Prism2.languages.insertBefore("kotlin", "string", {
        // https://kotlinlang.org/spec/expressions.html#string-interpolation-expressions
        "string-literal": [
          {
            pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
            alias: "multiline",
            inside: {
              interpolation: {
                pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                inside: interpolationInside
              },
              string: /[\s\S]+/
            }
          },
          {
            pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
            alias: "singleline",
            inside: {
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                lookbehind: true,
                inside: interpolationInside
              },
              string: /[\s\S]+/
            }
          }
        ],
        char: {
          // https://kotlinlang.org/spec/expressions.html#character-literals
          pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
          greedy: true
        }
      });
      delete Prism2.languages.kotlin["string"];
      Prism2.languages.insertBefore("kotlin", "keyword", {
        annotation: {
          pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
          alias: "builtin"
        }
      });
      Prism2.languages.insertBefore("kotlin", "function", {
        label: {
          pattern: /\b\w+@|@\w+\b/,
          alias: "symbol"
        }
      });
      Prism2.languages.kt = Prism2.languages.kotlin;
      Prism2.languages.kts = Prism2.languages.kotlin;
    })(Prism);
  }
  return kotlin_1;
}
var kotlinExports = requireKotlin();
const kotlin = /* @__PURE__ */ getDefaultExportFromCjs(kotlinExports);
const kotlin$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: kotlin
}, [kotlinExports]);
export {
  kotlin$1 as k
};
