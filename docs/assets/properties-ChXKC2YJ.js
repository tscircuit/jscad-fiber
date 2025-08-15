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
var properties_1;
var hasRequiredProperties;
function requireProperties() {
  if (hasRequiredProperties) return properties_1;
  hasRequiredProperties = 1;
  properties_1 = properties2;
  properties2.displayName = "properties";
  properties2.aliases = [];
  function properties2(Prism) {
    Prism.languages.properties = {
      comment: /^[ \t]*[#!].*$/m,
      "attr-value": {
        pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?: *[=:] *(?! )| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
        lookbehind: true
      },
      "attr-name": /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?= *[=:]| )/m,
      punctuation: /[=:]/
    };
  }
  return properties_1;
}
var propertiesExports = requireProperties();
const properties = /* @__PURE__ */ getDefaultExportFromCjs(propertiesExports);
const properties$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: properties
}, [propertiesExports]);
export {
  properties$1 as p
};
