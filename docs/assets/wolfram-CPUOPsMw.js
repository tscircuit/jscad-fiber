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
var wolfram_1;
var hasRequiredWolfram;
function requireWolfram() {
  if (hasRequiredWolfram) return wolfram_1;
  hasRequiredWolfram = 1;
  wolfram_1 = wolfram2;
  wolfram2.displayName = "wolfram";
  wolfram2.aliases = ["mathematica", "wl", "nb"];
  function wolfram2(Prism) {
    Prism.languages.wolfram = {
      // Allow one level of nesting - note: regex taken from applescipt
      comment: /\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,
      string: {
        pattern: /"(?:\\.|[^"\\\r\n])*"/,
        greedy: true
      },
      keyword: /\b(?:Abs|AbsArg|Accuracy|Block|Do|For|Function|If|Manipulate|Module|Nest|NestList|None|Return|Switch|Table|Which|While)\b/,
      context: {
        pattern: /\b\w+`+\w*/,
        alias: "class-name"
      },
      blank: {
        pattern: /\b\w+_\b/,
        alias: "regex"
      },
      "global-variable": {
        pattern: /\$\w+/,
        alias: "variable"
      },
      boolean: /\b(?:False|True)\b/,
      number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
      operator: /\/\.|;|=\.|\^=|\^:=|:=|<<|>>|<\||\|>|:>|\|->|->|<-|@@@|@@|@|\/@|=!=|===|==|=|\+|-|\^|\[\/-+%=\]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
      punctuation: /[{}[\];(),.:]/
    };
    Prism.languages.mathematica = Prism.languages.wolfram;
    Prism.languages.wl = Prism.languages.wolfram;
    Prism.languages.nb = Prism.languages.wolfram;
  }
  return wolfram_1;
}
var wolframExports = requireWolfram();
const wolfram = /* @__PURE__ */ getDefaultExportFromCjs(wolframExports);
const wolfram$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: wolfram
}, [wolframExports]);
export {
  wolfram$1 as w
};
