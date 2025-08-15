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
var cfscript_1;
var hasRequiredCfscript;
function requireCfscript() {
  if (hasRequiredCfscript) return cfscript_1;
  hasRequiredCfscript = 1;
  cfscript_1 = cfscript2;
  cfscript2.displayName = "cfscript";
  cfscript2.aliases = [];
  function cfscript2(Prism) {
    Prism.languages.cfscript = Prism.languages.extend("clike", {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: true,
          inside: {
            annotation: {
              pattern: /(?:^|[^.])@[\w\.]+/,
              alias: "punctuation"
            }
          }
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      keyword: /\b(?:abstract|break|catch|component|continue|default|do|else|extends|final|finally|for|function|if|in|include|package|private|property|public|remote|required|rethrow|return|static|switch|throw|try|var|while|xml)\b(?!\s*=)/,
      operator: [
        /\+\+|--|&&|\|\||::|=>|[!=]==|<=?|>=?|[-+*/%&|^!=<>]=?|\?(?:\.|:)?|[?:]/,
        /\b(?:and|contains|eq|equal|eqv|gt|gte|imp|is|lt|lte|mod|not|or|xor)\b/
      ],
      scope: {
        pattern: /\b(?:application|arguments|cgi|client|cookie|local|session|super|this|variables)\b/,
        alias: "global"
      },
      type: {
        pattern: /\b(?:any|array|binary|boolean|date|guid|numeric|query|string|struct|uuid|void|xml)\b/,
        alias: "builtin"
      }
    });
    Prism.languages.insertBefore("cfscript", "keyword", {
      // This must be declared before keyword because we use "function" inside the lookahead
      "function-variable": {
        pattern: /[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      }
    });
    delete Prism.languages.cfscript["class-name"];
    Prism.languages.cfc = Prism.languages["cfscript"];
  }
  return cfscript_1;
}
var cfscriptExports = requireCfscript();
const cfscript = /* @__PURE__ */ getDefaultExportFromCjs(cfscriptExports);
const cfscript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: cfscript
}, [cfscriptExports]);
export {
  cfscript$1 as c
};
