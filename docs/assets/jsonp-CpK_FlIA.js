import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
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
var jsonp_1;
var hasRequiredJsonp;
function requireJsonp() {
  if (hasRequiredJsonp) return jsonp_1;
  hasRequiredJsonp = 1;
  var refractorJson = requireJson();
  jsonp_1 = jsonp2;
  jsonp2.displayName = "jsonp";
  jsonp2.aliases = [];
  function jsonp2(Prism) {
    Prism.register(refractorJson);
    Prism.languages.jsonp = Prism.languages.extend("json", {
      punctuation: /[{}[\]();,.]/
    });
    Prism.languages.insertBefore("jsonp", "punctuation", {
      function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
    });
  }
  return jsonp_1;
}
var jsonpExports = requireJsonp();
const jsonp = /* @__PURE__ */ getDefaultExportFromCjs(jsonpExports);
const jsonp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jsonp
}, [jsonpExports]);
export {
  jsonp$1 as j
};
