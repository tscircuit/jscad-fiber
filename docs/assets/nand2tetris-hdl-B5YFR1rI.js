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
var nand2tetrisHdl_1;
var hasRequiredNand2tetrisHdl;
function requireNand2tetrisHdl() {
  if (hasRequiredNand2tetrisHdl) return nand2tetrisHdl_1;
  hasRequiredNand2tetrisHdl = 1;
  nand2tetrisHdl_1 = nand2tetrisHdl2;
  nand2tetrisHdl2.displayName = "nand2tetrisHdl";
  nand2tetrisHdl2.aliases = [];
  function nand2tetrisHdl2(Prism) {
    Prism.languages["nand2tetris-hdl"] = {
      comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      keyword: /\b(?:BUILTIN|CHIP|CLOCKED|IN|OUT|PARTS)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b[A-Za-z][A-Za-z0-9]*(?=\()/,
      number: /\b\d+\b/,
      operator: /=|\.\./,
      punctuation: /[{}[\];(),:]/
    };
  }
  return nand2tetrisHdl_1;
}
var nand2tetrisHdlExports = requireNand2tetrisHdl();
const nand2tetrisHdl = /* @__PURE__ */ getDefaultExportFromCjs(nand2tetrisHdlExports);
const nand2tetrisHdl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: nand2tetrisHdl
}, [nand2tetrisHdlExports]);
export {
  nand2tetrisHdl$1 as n
};
