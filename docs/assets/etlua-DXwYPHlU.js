import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireLua } from "./lua-RL-GTNsS.js";
import { r as requireMarkupTemplating } from "./markup-templating-hY-QSL53.js";
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
var etlua_1;
var hasRequiredEtlua;
function requireEtlua() {
  if (hasRequiredEtlua) return etlua_1;
  hasRequiredEtlua = 1;
  var refractorLua = requireLua();
  var refractorMarkupTemplating = requireMarkupTemplating();
  etlua_1 = etlua2;
  etlua2.displayName = "etlua";
  etlua2.aliases = [];
  function etlua2(Prism) {
    Prism.register(refractorLua);
    Prism.register(refractorMarkupTemplating);
    (function(Prism2) {
      Prism2.languages.etlua = {
        delimiter: {
          pattern: /^<%[-=]?|-?%>$/,
          alias: "punctuation"
        },
        "language-lua": {
          pattern: /[\s\S]+/,
          inside: Prism2.languages.lua
        }
      };
      Prism2.hooks.add("before-tokenize", function(env) {
        var pattern = /<%[\s\S]+?%>/g;
        Prism2.languages["markup-templating"].buildPlaceholders(
          env,
          "etlua",
          pattern
        );
      });
      Prism2.hooks.add("after-tokenize", function(env) {
        Prism2.languages["markup-templating"].tokenizePlaceholders(env, "etlua");
      });
    })(Prism);
  }
  return etlua_1;
}
var etluaExports = requireEtlua();
const etlua = /* @__PURE__ */ getDefaultExportFromCjs(etluaExports);
const etlua$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: etlua
}, [etluaExports]);
export {
  etlua$1 as e
};
