import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requirePhp } from "./php-BBLqus8v.js";
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
var phpExtras_1;
var hasRequiredPhpExtras;
function requirePhpExtras() {
  if (hasRequiredPhpExtras) return phpExtras_1;
  hasRequiredPhpExtras = 1;
  var refractorPhp = requirePhp();
  phpExtras_1 = phpExtras2;
  phpExtras2.displayName = "phpExtras";
  phpExtras2.aliases = [];
  function phpExtras2(Prism) {
    Prism.register(refractorPhp);
    Prism.languages.insertBefore("php", "variable", {
      this: {
        pattern: /\$this\b/,
        alias: "keyword"
      },
      global: /\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,
      scope: {
        pattern: /\b[\w\\]+::/,
        inside: {
          keyword: /\b(?:parent|self|static)\b/,
          punctuation: /::|\\/
        }
      }
    });
  }
  return phpExtras_1;
}
var phpExtrasExports = requirePhpExtras();
const phpExtras = /* @__PURE__ */ getDefaultExportFromCjs(phpExtrasExports);
const phpExtras$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: phpExtras
}, [phpExtrasExports]);
export {
  phpExtras$1 as p
};
