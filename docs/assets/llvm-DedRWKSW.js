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
var llvm_1;
var hasRequiredLlvm;
function requireLlvm() {
  if (hasRequiredLlvm) return llvm_1;
  hasRequiredLlvm = 1;
  llvm_1 = llvm2;
  llvm2.displayName = "llvm";
  llvm2.aliases = [];
  function llvm2(Prism) {
    (function(Prism2) {
      Prism2.languages.llvm = {
        comment: /;.*/,
        string: {
          pattern: /"[^"]*"/,
          greedy: true
        },
        boolean: /\b(?:false|true)\b/,
        variable: /[%@!#](?:(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+|\d+)/i,
        label: /(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+:/i,
        type: {
          pattern: /\b(?:double|float|fp128|half|i[1-9]\d*|label|metadata|ppc_fp128|token|void|x86_fp80|x86_mmx)\b/,
          alias: "class-name"
        },
        keyword: /\b[a-z_][a-z_0-9]*\b/,
        number: /[+-]?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-Fa-f]+\b|\b0xK[\dA-Fa-f]{20}\b|\b0x[ML][\dA-Fa-f]{32}\b|\b0xH[\dA-Fa-f]{4}\b/,
        punctuation: /[{}[\];(),.!*=<>]/
      };
    })(Prism);
  }
  return llvm_1;
}
var llvmExports = requireLlvm();
const llvm = /* @__PURE__ */ getDefaultExportFromCjs(llvmExports);
const llvm$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: llvm
}, [llvmExports]);
export {
  llvm$1 as l
};
