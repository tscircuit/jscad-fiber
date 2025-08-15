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
var monkey_1;
var hasRequiredMonkey;
function requireMonkey() {
  if (hasRequiredMonkey) return monkey_1;
  hasRequiredMonkey = 1;
  monkey_1 = monkey2;
  monkey2.displayName = "monkey";
  monkey2.aliases = [];
  function monkey2(Prism) {
    Prism.languages.monkey = {
      comment: {
        pattern: /^#Rem\s[\s\S]*?^#End|'.+/im,
        greedy: true
      },
      string: {
        pattern: /"[^"\r\n]*"/,
        greedy: true
      },
      preprocessor: {
        pattern: /(^[ \t]*)#.+/m,
        lookbehind: true,
        greedy: true,
        alias: "property"
      },
      function: /\b\w+(?=\()/,
      "type-char": {
        pattern: /\b[?%#$]/,
        alias: "class-name"
      },
      number: {
        pattern: /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,
        lookbehind: true
      },
      keyword: /\b(?:Abstract|Array|Bool|Case|Catch|Class|Const|Continue|Default|Eachin|Else|ElseIf|End|EndIf|Exit|Extends|Extern|False|Field|Final|Float|For|Forever|Function|Global|If|Implements|Import|Inline|Int|Interface|Local|Method|Module|New|Next|Null|Object|Private|Property|Public|Repeat|Return|Select|Self|Step|Strict|String|Super|Then|Throw|To|True|Try|Until|Void|Wend|While)\b/i,
      operator: /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
      punctuation: /[.,:;()\[\]]/
    };
  }
  return monkey_1;
}
var monkeyExports = requireMonkey();
const monkey = /* @__PURE__ */ getDefaultExportFromCjs(monkeyExports);
const monkey$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: monkey
}, [monkeyExports]);
export {
  monkey$1 as m
};
