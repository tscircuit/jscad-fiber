import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireSql } from "./sql-C3TUcweP.js";
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
var sqlExports = requireSql();
const sql = /* @__PURE__ */ getDefaultExportFromCjs(sqlExports);
const sql$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: sql
}, [sqlExports]);
export {
  sql$1 as s
};
