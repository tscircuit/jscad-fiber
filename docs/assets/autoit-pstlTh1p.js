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
var autoit_1;
var hasRequiredAutoit;
function requireAutoit() {
  if (hasRequiredAutoit) return autoit_1;
  hasRequiredAutoit = 1;
  autoit_1 = autoit2;
  autoit2.displayName = "autoit";
  autoit2.aliases = [];
  function autoit2(Prism) {
    Prism.languages.autoit = {
      comment: [
        /;.*/,
        {
          // The multi-line comments delimiters can actually be commented out with ";"
          pattern: /(^[\t ]*)#(?:comments-start|cs)[\s\S]*?^[ \t]*#(?:ce|comments-end)/m,
          lookbehind: true
        }
      ],
      url: {
        pattern: /(^[\t ]*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
        lookbehind: true
      },
      string: {
        pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
        greedy: true,
        inside: {
          variable: /([%$@])\w+\1/
        }
      },
      directive: {
        pattern: /(^[\t ]*)#[\w-]+/m,
        lookbehind: true,
        alias: "keyword"
      },
      function: /\b\w+(?=\()/,
      // Variables and macros
      variable: /[$@]\w+/,
      keyword: /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
      number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
      boolean: /\b(?:False|True)\b/i,
      operator: /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Not|Or)\b/i,
      punctuation: /[\[\]().,:]/
    };
  }
  return autoit_1;
}
var autoitExports = requireAutoit();
const autoit = /* @__PURE__ */ getDefaultExportFromCjs(autoitExports);
const autoit$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: autoit
}, [autoitExports]);
export {
  autoit$1 as a
};
