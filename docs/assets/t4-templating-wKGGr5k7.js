import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireT4Templating } from "./t4-templating-BGmVz2pK.js";
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
var t4TemplatingExports = requireT4Templating();
const t4Templating = /* @__PURE__ */ getDefaultExportFromCjs(t4TemplatingExports);
const t4Templating$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: t4Templating
}, [t4TemplatingExports]);
export {
  t4Templating$1 as t
};
