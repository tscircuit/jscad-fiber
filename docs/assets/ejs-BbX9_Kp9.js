import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
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
var ejs_1;
var hasRequiredEjs;
function requireEjs() {
  if (hasRequiredEjs) return ejs_1;
  hasRequiredEjs = 1;
  var refractorMarkupTemplating = requireMarkupTemplating();
  ejs_1 = ejs2;
  ejs2.displayName = "ejs";
  ejs2.aliases = ["eta"];
  function ejs2(Prism) {
    Prism.register(refractorMarkupTemplating);
    (function(Prism2) {
      Prism2.languages.ejs = {
        delimiter: {
          pattern: /^<%[-_=]?|[-_]?%>$/,
          alias: "punctuation"
        },
        comment: /^#[\s\S]*/,
        "language-javascript": {
          pattern: /[\s\S]+/,
          inside: Prism2.languages.javascript
        }
      };
      Prism2.hooks.add("before-tokenize", function(env) {
        var ejsPattern = /<%(?!%)[\s\S]+?%>/g;
        Prism2.languages["markup-templating"].buildPlaceholders(
          env,
          "ejs",
          ejsPattern
        );
      });
      Prism2.hooks.add("after-tokenize", function(env) {
        Prism2.languages["markup-templating"].tokenizePlaceholders(env, "ejs");
      });
      Prism2.languages.eta = Prism2.languages.ejs;
    })(Prism);
  }
  return ejs_1;
}
var ejsExports = requireEjs();
const ejs = /* @__PURE__ */ getDefaultExportFromCjs(ejsExports);
const ejs$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: ejs
}, [ejsExports]);
export {
  ejs$1 as e
};
