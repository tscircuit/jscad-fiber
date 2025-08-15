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
var openqasm_1;
var hasRequiredOpenqasm;
function requireOpenqasm() {
  if (hasRequiredOpenqasm) return openqasm_1;
  hasRequiredOpenqasm = 1;
  openqasm_1 = openqasm2;
  openqasm2.displayName = "openqasm";
  openqasm2.aliases = ["qasm"];
  function openqasm2(Prism) {
    Prism.languages.openqasm = {
      comment: /\/\*[\s\S]*?\*\/|\/\/.*/,
      string: {
        pattern: /"[^"\r\n\t]*"|'[^'\r\n\t]*'/,
        greedy: true
      },
      keyword: /\b(?:CX|OPENQASM|U|barrier|boxas|boxto|break|const|continue|ctrl|def|defcal|defcalgrammar|delay|else|end|for|gate|gphase|if|in|include|inv|kernel|lengthof|let|measure|pow|reset|return|rotary|stretchinf|while)\b|#pragma\b/,
      "class-name": /\b(?:angle|bit|bool|creg|fixed|float|int|length|qreg|qubit|stretch|uint)\b/,
      function: /\b(?:cos|exp|ln|popcount|rotl|rotr|sin|sqrt|tan)\b(?=\s*\()/,
      constant: /\b(?:euler|pi|tau)\b|π|𝜏|ℇ/,
      number: {
        pattern: /(^|[^.\w$])(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?(?:dt|ns|us|µs|ms|s)?/i,
        lookbehind: true
      },
      operator: /->|>>=?|<<=?|&&|\|\||\+\+|--|[!=<>&|~^+\-*/%]=?|@/,
      punctuation: /[(){}\[\];,:.]/
    };
    Prism.languages.qasm = Prism.languages.openqasm;
  }
  return openqasm_1;
}
var openqasmExports = requireOpenqasm();
const openqasm = /* @__PURE__ */ getDefaultExportFromCjs(openqasmExports);
const openqasm$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: openqasm
}, [openqasmExports]);
export {
  openqasm$1 as o
};
