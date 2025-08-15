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
var brightscript_1;
var hasRequiredBrightscript;
function requireBrightscript() {
  if (hasRequiredBrightscript) return brightscript_1;
  hasRequiredBrightscript = 1;
  brightscript_1 = brightscript2;
  brightscript2.displayName = "brightscript";
  brightscript2.aliases = [];
  function brightscript2(Prism) {
    Prism.languages.brightscript = {
      comment: /(?:\brem|').*/i,
      "directive-statement": {
        pattern: /(^[\t ]*)#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if).*/im,
        lookbehind: true,
        alias: "property",
        inside: {
          "error-message": {
            pattern: /(^#error).+/,
            lookbehind: true
          },
          directive: {
            pattern: /^#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if)/,
            alias: "keyword"
          },
          expression: {
            pattern: /[\s\S]+/,
            inside: null
            // see below
          }
        }
      },
      property: {
        pattern: /([\r\n{,][\t ]*)(?:(?!\d)\w+|"(?:[^"\r\n]|"")*"(?!"))(?=[ \t]*:)/,
        lookbehind: true,
        greedy: true
      },
      string: {
        pattern: /"(?:[^"\r\n]|"")*"(?!")/,
        greedy: true
      },
      "class-name": {
        pattern: /(\bAs[\t ]+)\w+/i,
        lookbehind: true
      },
      keyword: /\b(?:As|Dim|Each|Else|Elseif|End|Exit|For|Function|Goto|If|In|Print|Return|Step|Stop|Sub|Then|To|While)\b/i,
      boolean: /\b(?:false|true)\b/i,
      function: /\b(?!\d)\w+(?=[\t ]*\()/,
      number: /(?:\b\d+(?:\.\d+)?(?:[ed][+-]\d+)?|&h[a-f\d]+)\b[%&!#]?/i,
      operator: /--|\+\+|>>=?|<<=?|<>|[-+*/\\<>]=?|[:^=?]|\b(?:and|mod|not|or)\b/i,
      punctuation: /[.,;()[\]{}]/,
      constant: /\b(?:LINE_NUM)\b/i
    };
    Prism.languages.brightscript["directive-statement"].inside.expression.inside = Prism.languages.brightscript;
  }
  return brightscript_1;
}
var brightscriptExports = requireBrightscript();
const brightscript = /* @__PURE__ */ getDefaultExportFromCjs(brightscriptExports);
const brightscript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: brightscript
}, [brightscriptExports]);
export {
  brightscript$1 as b
};
