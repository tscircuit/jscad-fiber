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
var hsts_1;
var hasRequiredHsts;
function requireHsts() {
  if (hasRequiredHsts) return hsts_1;
  hasRequiredHsts = 1;
  hsts_1 = hsts2;
  hsts2.displayName = "hsts";
  hsts2.aliases = [];
  function hsts2(Prism) {
    Prism.languages.hsts = {
      directive: {
        pattern: /\b(?:includeSubDomains|max-age|preload)(?=[\s;=]|$)/i,
        alias: "property"
      },
      operator: /=/,
      punctuation: /;/
    };
  }
  return hsts_1;
}
var hstsExports = requireHsts();
const hsts = /* @__PURE__ */ getDefaultExportFromCjs(hstsExports);
const hsts$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: hsts
}, [hstsExports]);
export {
  hsts$1 as h
};
