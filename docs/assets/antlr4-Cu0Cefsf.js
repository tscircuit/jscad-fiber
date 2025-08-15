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
var antlr4_1;
var hasRequiredAntlr4;
function requireAntlr4() {
  if (hasRequiredAntlr4) return antlr4_1;
  hasRequiredAntlr4 = 1;
  antlr4_1 = antlr42;
  antlr42.displayName = "antlr4";
  antlr42.aliases = ["g4"];
  function antlr42(Prism) {
    Prism.languages.antlr4 = {
      comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      string: {
        pattern: /'(?:\\.|[^\\'\r\n])*'/,
        greedy: true
      },
      "character-class": {
        pattern: /\[(?:\\.|[^\\\]\r\n])*\]/,
        greedy: true,
        alias: "regex",
        inside: {
          range: {
            pattern: /([^[]|(?:^|[^\\])(?:\\\\)*\\\[)-(?!\])/,
            lookbehind: true,
            alias: "punctuation"
          },
          escape: /\\(?:u(?:[a-fA-F\d]{4}|\{[a-fA-F\d]+\})|[pP]\{[=\w-]+\}|[^\r\nupP])/,
          punctuation: /[\[\]]/
        }
      },
      action: {
        pattern: /\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\}/,
        greedy: true,
        inside: {
          content: {
            // this might be C, C++, Python, Java, C#, or any other language ANTLR4 compiles to
            pattern: /(\{)[\s\S]+(?=\})/,
            lookbehind: true
          },
          punctuation: /[{}]/
        }
      },
      command: {
        pattern: /(->\s*(?!\s))(?:\s*(?:,\s*)?\b[a-z]\w*(?:\s*\([^()\r\n]*\))?)+(?=\s*;)/i,
        lookbehind: true,
        inside: {
          function: /\b\w+(?=\s*(?:[,(]|$))/,
          punctuation: /[,()]/
        }
      },
      annotation: {
        pattern: /@\w+(?:::\w+)*/,
        alias: "keyword"
      },
      label: {
        pattern: /#[ \t]*\w+/,
        alias: "punctuation"
      },
      keyword: /\b(?:catch|channels|finally|fragment|grammar|import|lexer|locals|mode|options|parser|returns|throws|tokens)\b/,
      definition: [
        {
          pattern: /\b[a-z]\w*(?=\s*:)/,
          alias: ["rule", "class-name"]
        },
        {
          pattern: /\b[A-Z]\w*(?=\s*:)/,
          alias: ["token", "constant"]
        }
      ],
      constant: /\b[A-Z][A-Z_]*\b/,
      operator: /\.\.|->|[|~]|[*+?]\??/,
      punctuation: /[;:()=]/
    };
    Prism.languages.g4 = Prism.languages.antlr4;
  }
  return antlr4_1;
}
var antlr4Exports = requireAntlr4();
const antlr4 = /* @__PURE__ */ getDefaultExportFromCjs(antlr4Exports);
const antlr4$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: antlr4
}, [antlr4Exports]);
export {
  antlr4$1 as a
};
