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
var django_1;
var hasRequiredDjango;
function requireDjango() {
  if (hasRequiredDjango) return django_1;
  hasRequiredDjango = 1;
  var refractorMarkupTemplating = requireMarkupTemplating();
  django_1 = django2;
  django2.displayName = "django";
  django2.aliases = ["jinja2"];
  function django2(Prism) {
    Prism.register(refractorMarkupTemplating);
    (function(Prism2) {
      Prism2.languages.django = {
        comment: /^\{#[\s\S]*?#\}$/,
        tag: {
          pattern: /(^\{%[+-]?\s*)\w+/,
          lookbehind: true,
          alias: "keyword"
        },
        delimiter: {
          pattern: /^\{[{%][+-]?|[+-]?[}%]\}$/,
          alias: "punctuation"
        },
        string: {
          pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        filter: {
          pattern: /(\|)\w+/,
          lookbehind: true,
          alias: "function"
        },
        test: {
          pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/,
          lookbehind: true,
          alias: "function"
        },
        function: /\b[a-z_]\w+(?=\s*\()/i,
        keyword: /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,
        operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
        number: /\b\d+(?:\.\d+)?\b/,
        boolean: /[Ff]alse|[Nn]one|[Tt]rue/,
        variable: /\b\w+\b/,
        punctuation: /[{}[\](),.:;]/
      };
      var pattern = /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g;
      var markupTemplating = Prism2.languages["markup-templating"];
      Prism2.hooks.add("before-tokenize", function(env) {
        markupTemplating.buildPlaceholders(env, "django", pattern);
      });
      Prism2.hooks.add("after-tokenize", function(env) {
        markupTemplating.tokenizePlaceholders(env, "django");
      });
      Prism2.languages.jinja2 = Prism2.languages.django;
      Prism2.hooks.add("before-tokenize", function(env) {
        markupTemplating.buildPlaceholders(env, "jinja2", pattern);
      });
      Prism2.hooks.add("after-tokenize", function(env) {
        markupTemplating.tokenizePlaceholders(env, "jinja2");
      });
    })(Prism);
  }
  return django_1;
}
var djangoExports = requireDjango();
const django = /* @__PURE__ */ getDefaultExportFromCjs(djangoExports);
const django$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: django
}, [djangoExports]);
export {
  django$1 as d
};
