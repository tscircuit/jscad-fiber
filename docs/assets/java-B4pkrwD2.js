import { g as getDefaultExportFromCjs } from "./index-DFC_UGRI.js";
import { r as requireJava } from "./java-M3oaxAC_.js";
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
var javaExports = requireJava();
const java = /* @__PURE__ */ getDefaultExportFromCjs(javaExports);
const java$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: java
}, [javaExports]);
export {
  java$1 as j
};
