import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireCsharp } from "./csharp-iD8vdCRX.js";
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
var csharpExports = requireCsharp();
const csharp = /* @__PURE__ */ getDefaultExportFromCjs(csharpExports);
const csharp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: csharp
}, [csharpExports]);
export {
  csharp$1 as c
};
