import { g as getDefaultExportFromCjs } from "./index-DFC_UGRI.js";
import { r as requireJson } from "./json-BgFPXYLn.js";
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
var jsonExports = requireJson();
const json = /* @__PURE__ */ getDefaultExportFromCjs(jsonExports);
const json$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: json
}, [jsonExports]);
export {
  json$1 as j
};
