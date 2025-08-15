import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireRuby } from "./ruby-BhyE9auN.js";
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
var erb_1;
var hasRequiredErb;
function requireErb() {
  if (hasRequiredErb) return erb_1;
  hasRequiredErb = 1;
  var refractorRuby = requireRuby();
  var refractorMarkupTemplating = requireMarkupTemplating();
  erb_1 = erb2;
  erb2.displayName = "erb";
  erb2.aliases = [];
  function erb2(Prism) {
    Prism.register(refractorRuby);
    Prism.register(refractorMarkupTemplating);
    (function(Prism2) {
      Prism2.languages.erb = {
        delimiter: {
          pattern: /^(\s*)<%=?|%>(?=\s*$)/,
          lookbehind: true,
          alias: "punctuation"
        },
        ruby: {
          pattern: /\s*\S[\s\S]*/,
          alias: "language-ruby",
          inside: Prism2.languages.ruby
        }
      };
      Prism2.hooks.add("before-tokenize", function(env) {
        var erbPattern = /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g;
        Prism2.languages["markup-templating"].buildPlaceholders(
          env,
          "erb",
          erbPattern
        );
      });
      Prism2.hooks.add("after-tokenize", function(env) {
        Prism2.languages["markup-templating"].tokenizePlaceholders(env, "erb");
      });
    })(Prism);
  }
  return erb_1;
}
var erbExports = requireErb();
const erb = /* @__PURE__ */ getDefaultExportFromCjs(erbExports);
const erb$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: erb
}, [erbExports]);
export {
  erb$1 as e
};
