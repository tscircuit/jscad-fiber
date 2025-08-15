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
var r_1;
var hasRequiredR;
function requireR() {
  if (hasRequiredR) return r_1;
  hasRequiredR = 1;
  r_1 = r2;
  r2.displayName = "r";
  r2.aliases = [];
  function r2(Prism) {
    Prism.languages.r = {
      comment: /#.*/,
      string: {
        pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      "percent-operator": {
        // Includes user-defined operators
        // and %%, %*%, %/%, %in%, %o%, %x%
        pattern: /%[^%\s]*%/,
        alias: "operator"
      },
      boolean: /\b(?:FALSE|TRUE)\b/,
      ellipsis: /\.\.(?:\.|\d+)/,
      number: [
        /\b(?:Inf|NaN)\b/,
        /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/
      ],
      keyword: /\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,
      operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
      punctuation: /[(){}\[\],;]/
    };
  }
  return r_1;
}
var rExports = requireR();
const r = /* @__PURE__ */ getDefaultExportFromCjs(rExports);
const r$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: r
}, [rExports]);
export {
  r$1 as r
};
