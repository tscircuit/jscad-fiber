import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireJsx } from "./jsx-C1qRCugV.js";
import { r as requireTypescript } from "./typescript-e-gwqYt9.js";
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
var tsx_1;
var hasRequiredTsx;
function requireTsx() {
  if (hasRequiredTsx) return tsx_1;
  hasRequiredTsx = 1;
  var refractorJsx = requireJsx();
  var refractorTypescript = requireTypescript();
  tsx_1 = tsx2;
  tsx2.displayName = "tsx";
  tsx2.aliases = [];
  function tsx2(Prism) {
    Prism.register(refractorJsx);
    Prism.register(refractorTypescript);
    (function(Prism2) {
      var typescript = Prism2.util.clone(Prism2.languages.typescript);
      Prism2.languages.tsx = Prism2.languages.extend("jsx", typescript);
      delete Prism2.languages.tsx["parameter"];
      delete Prism2.languages.tsx["literal-property"];
      var tag = Prism2.languages.tsx.tag;
      tag.pattern = RegExp(
        /(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")",
        tag.pattern.flags
      );
      tag.lookbehind = true;
    })(Prism);
  }
  return tsx_1;
}
var tsxExports = requireTsx();
const tsx = /* @__PURE__ */ getDefaultExportFromCjs(tsxExports);
const tsx$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: tsx
}, [tsxExports]);
export {
  tsx$1 as t
};
