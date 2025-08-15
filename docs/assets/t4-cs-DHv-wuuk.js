import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireT4Templating } from "./t4-templating-BGmVz2pK.js";
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
var t4Cs_1;
var hasRequiredT4Cs;
function requireT4Cs() {
  if (hasRequiredT4Cs) return t4Cs_1;
  hasRequiredT4Cs = 1;
  var refractorT4Templating = requireT4Templating();
  var refractorCsharp = requireCsharp();
  t4Cs_1 = t4Cs2;
  t4Cs2.displayName = "t4Cs";
  t4Cs2.aliases = [];
  function t4Cs2(Prism) {
    Prism.register(refractorT4Templating);
    Prism.register(refractorCsharp);
    Prism.languages.t4 = Prism.languages["t4-cs"] = Prism.languages["t4-templating"].createT4("csharp");
  }
  return t4Cs_1;
}
var t4CsExports = requireT4Cs();
const t4Cs = /* @__PURE__ */ getDefaultExportFromCjs(t4CsExports);
const t4Cs$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: t4Cs
}, [t4CsExports]);
export {
  t4Cs$1 as t
};
