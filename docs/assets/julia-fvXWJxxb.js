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
var julia_1;
var hasRequiredJulia;
function requireJulia() {
  if (hasRequiredJulia) return julia_1;
  hasRequiredJulia = 1;
  julia_1 = julia2;
  julia2.displayName = "julia";
  julia2.aliases = [];
  function julia2(Prism) {
    Prism.languages.julia = {
      comment: {
        // support one level of nested comments
        // https://github.com/JuliaLang/julia/pull/6128
        pattern: /(^|[^\\])(?:#=(?:[^#=]|=(?!#)|#(?!=)|#=(?:[^#=]|=(?!#)|#(?!=))*=#)*=#|#.*)/,
        lookbehind: true
      },
      regex: {
        // https://docs.julialang.org/en/v1/manual/strings/#Regular-Expressions-1
        pattern: /r"(?:\\.|[^"\\\r\n])*"[imsx]{0,4}/,
        greedy: true
      },
      string: {
        // https://docs.julialang.org/en/v1/manual/strings/#String-Basics-1
        // https://docs.julialang.org/en/v1/manual/strings/#non-standard-string-literals-1
        // https://docs.julialang.org/en/v1/manual/running-external-programs/#Running-External-Programs-1
        pattern: /"""[\s\S]+?"""|(?:\b\w+)?"(?:\\.|[^"\\\r\n])*"|`(?:[^\\`\r\n]|\\.)*`/,
        greedy: true
      },
      char: {
        // https://docs.julialang.org/en/v1/manual/strings/#man-characters-1
        pattern: /(^|[^\w'])'(?:\\[^\r\n][^'\r\n]*|[^\\\r\n])'/,
        lookbehind: true,
        greedy: true
      },
      keyword: /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,
      boolean: /\b(?:false|true)\b/,
      number: /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+(?:_[\da-f]+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[efp][+-]?\d+(?:_\d+)*)?j?/i,
      // https://docs.julialang.org/en/v1/manual/mathematical-operations/
      // https://docs.julialang.org/en/v1/manual/mathematical-operations/#Operator-Precedence-and-Associativity-1
      operator: /&&|\|\||[-+*^%÷⊻&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:|])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥'√∛]/,
      punctuation: /::?|[{}[\]();,.?]/,
      // https://docs.julialang.org/en/v1/base/numbers/#Base.im
      constant: /\b(?:(?:Inf|NaN)(?:16|32|64)?|im|pi)\b|[πℯ]/
    };
  }
  return julia_1;
}
var juliaExports = requireJulia();
const julia = /* @__PURE__ */ getDefaultExportFromCjs(juliaExports);
const julia$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: julia
}, [juliaExports]);
export {
  julia$1 as j
};
