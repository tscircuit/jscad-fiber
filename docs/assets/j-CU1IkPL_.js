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
var j_1;
var hasRequiredJ;
function requireJ() {
  if (hasRequiredJ) return j_1;
  hasRequiredJ = 1;
  j_1 = j2;
  j2.displayName = "j";
  j2.aliases = [];
  function j2(Prism) {
    Prism.languages.j = {
      comment: {
        pattern: /\bNB\..*/,
        greedy: true
      },
      string: {
        pattern: /'(?:''|[^'\r\n])*'/,
        greedy: true
      },
      keyword: /\b(?:(?:CR|LF|adverb|conjunction|def|define|dyad|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,
      verb: {
        // Negative look-ahead prevents bad highlighting
        // of ^: ;. =. =: !. !:
        pattern: /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,
        alias: "keyword"
      },
      number: /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:ad|ar|[ejpx])_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_\b(?!\.))/,
      adverb: {
        pattern: /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/,
        alias: "builtin"
      },
      operator: /[=a][.:]|_\./,
      conjunction: {
        pattern: /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,
        alias: "variable"
      },
      punctuation: /[()]/
    };
  }
  return j_1;
}
var jExports = requireJ();
const j = /* @__PURE__ */ getDefaultExportFromCjs(jExports);
const j$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: j
}, [jExports]);
export {
  j$1 as j
};
