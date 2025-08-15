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
var matlab_1;
var hasRequiredMatlab;
function requireMatlab() {
  if (hasRequiredMatlab) return matlab_1;
  hasRequiredMatlab = 1;
  matlab_1 = matlab2;
  matlab2.displayName = "matlab";
  matlab2.aliases = [];
  function matlab2(Prism) {
    Prism.languages.matlab = {
      comment: [/%\{[\s\S]*?\}%/, /%.+/],
      string: {
        pattern: /\B'(?:''|[^'\r\n])*'/,
        greedy: true
      },
      // FIXME We could handle imaginary numbers as a whole
      number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
      keyword: /\b(?:NaN|break|case|catch|continue|else|elseif|end|for|function|if|inf|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
      function: /\b(?!\d)\w+(?=\s*\()/,
      operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
      punctuation: /\.{3}|[.,;\[\](){}!]/
    };
  }
  return matlab_1;
}
var matlabExports = requireMatlab();
const matlab = /* @__PURE__ */ getDefaultExportFromCjs(matlabExports);
const matlab$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: matlab
}, [matlabExports]);
export {
  matlab$1 as m
};
