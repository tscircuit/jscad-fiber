import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireT4Templating } from "./t4-templating-BGmVz2pK.js";
import { r as requireVbnet } from "./vbnet-D0GSTx4W.js";
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
var t4Vb_1;
var hasRequiredT4Vb;
function requireT4Vb() {
  if (hasRequiredT4Vb) return t4Vb_1;
  hasRequiredT4Vb = 1;
  var refractorT4Templating = requireT4Templating();
  var refractorVbnet = requireVbnet();
  t4Vb_1 = t4Vb2;
  t4Vb2.displayName = "t4Vb";
  t4Vb2.aliases = [];
  function t4Vb2(Prism) {
    Prism.register(refractorT4Templating);
    Prism.register(refractorVbnet);
    Prism.languages["t4-vb"] = Prism.languages["t4-templating"].createT4("vbnet");
  }
  return t4Vb_1;
}
var t4VbExports = requireT4Vb();
const t4Vb = /* @__PURE__ */ getDefaultExportFromCjs(t4VbExports);
const t4Vb$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: t4Vb
}, [t4VbExports]);
export {
  t4Vb$1 as t
};
