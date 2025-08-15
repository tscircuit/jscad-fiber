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
var hpkp_1;
var hasRequiredHpkp;
function requireHpkp() {
  if (hasRequiredHpkp) return hpkp_1;
  hasRequiredHpkp = 1;
  hpkp_1 = hpkp2;
  hpkp2.displayName = "hpkp";
  hpkp2.aliases = [];
  function hpkp2(Prism) {
    Prism.languages.hpkp = {
      directive: {
        pattern: /\b(?:includeSubDomains|max-age|pin-sha256|preload|report-to|report-uri|strict)(?=[\s;=]|$)/i,
        alias: "property"
      },
      operator: /=/,
      punctuation: /;/
    };
  }
  return hpkp_1;
}
var hpkpExports = requireHpkp();
const hpkp = /* @__PURE__ */ getDefaultExportFromCjs(hpkpExports);
const hpkp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: hpkp
}, [hpkpExports]);
export {
  hpkp$1 as h
};
