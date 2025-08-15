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
var concurnas_1;
var hasRequiredConcurnas;
function requireConcurnas() {
  if (hasRequiredConcurnas) return concurnas_1;
  hasRequiredConcurnas = 1;
  concurnas_1 = concurnas2;
  concurnas2.displayName = "concurnas";
  concurnas2.aliases = ["conc"];
  function concurnas2(Prism) {
    Prism.languages.concurnas = {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\/\/.*)/,
        lookbehind: true,
        greedy: true
      },
      langext: {
        pattern: /\b\w+\s*\|\|[\s\S]+?\|\|/,
        greedy: true,
        inside: {
          "class-name": /^\w+/,
          string: {
            pattern: /(^\s*\|\|)[\s\S]+(?=\|\|$)/,
            lookbehind: true
          },
          punctuation: /\|\|/
        }
      },
      function: {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/,
        lookbehind: true
      },
      keyword: /\b(?:abstract|actor|also|annotation|assert|async|await|bool|boolean|break|byte|case|catch|changed|char|class|closed|constant|continue|def|default|del|double|elif|else|enum|every|extends|false|finally|float|for|from|global|gpudef|gpukernel|if|import|in|init|inject|int|lambda|local|long|loop|match|new|nodefault|null|of|onchange|open|out|override|package|parfor|parforsync|post|pre|private|protected|provide|provider|public|return|shared|short|single|size_t|sizeof|super|sync|this|throw|trait|trans|transient|true|try|typedef|unchecked|using|val|var|void|while|with)\b/,
      boolean: /\b(?:false|true)\b/,
      number: /\b0b[01][01_]*L?\b|\b0x(?:[\da-f_]*\.)?[\da-f_p+-]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfls]?/i,
      punctuation: /[{}[\];(),.:]/,
      operator: /<==|>==|=>|->|<-|<>|&==|&<>|\?:?|\.\?|\+\+|--|[-+*/=<>]=?|[!^~]|\b(?:and|as|band|bor|bxor|comp|is|isnot|mod|or)\b=?/,
      annotation: {
        pattern: /@(?:\w+:)?(?:\w+|\[[^\]]+\])?/,
        alias: "builtin"
      }
    };
    Prism.languages.insertBefore("concurnas", "langext", {
      "regex-literal": {
        pattern: /\br("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true,
        inside: {
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: true,
            inside: Prism.languages.concurnas
          },
          regex: /[\s\S]+/
        }
      },
      "string-literal": {
        pattern: /(?:\B|\bs)("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true,
        inside: {
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: true,
            inside: Prism.languages.concurnas
          },
          string: /[\s\S]+/
        }
      }
    });
    Prism.languages.conc = Prism.languages.concurnas;
  }
  return concurnas_1;
}
var concurnasExports = requireConcurnas();
const concurnas = /* @__PURE__ */ getDefaultExportFromCjs(concurnasExports);
const concurnas$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: concurnas
}, [concurnasExports]);
export {
  concurnas$1 as c
};
