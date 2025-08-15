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
var handlebars_1;
var hasRequiredHandlebars;
function requireHandlebars() {
  if (hasRequiredHandlebars) return handlebars_1;
  hasRequiredHandlebars = 1;
  var refractorMarkupTemplating = requireMarkupTemplating();
  handlebars_1 = handlebars2;
  handlebars2.displayName = "handlebars";
  handlebars2.aliases = ["hbs"];
  function handlebars2(Prism) {
    Prism.register(refractorMarkupTemplating);
    (function(Prism2) {
      Prism2.languages.handlebars = {
        comment: /\{\{![\s\S]*?\}\}/,
        delimiter: {
          pattern: /^\{\{\{?|\}\}\}?$/,
          alias: "punctuation"
        },
        string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
        boolean: /\b(?:false|true)\b/,
        block: {
          pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
          lookbehind: true,
          alias: "keyword"
        },
        brackets: {
          pattern: /\[[^\]]+\]/,
          inside: {
            punctuation: /\[|\]/,
            variable: /[\s\S]+/
          }
        },
        punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
        variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
      };
      Prism2.hooks.add("before-tokenize", function(env) {
        var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
        Prism2.languages["markup-templating"].buildPlaceholders(
          env,
          "handlebars",
          handlebarsPattern
        );
      });
      Prism2.hooks.add("after-tokenize", function(env) {
        Prism2.languages["markup-templating"].tokenizePlaceholders(
          env,
          "handlebars"
        );
      });
      Prism2.languages.hbs = Prism2.languages.handlebars;
    })(Prism);
  }
  return handlebars_1;
}
var handlebarsExports = requireHandlebars();
const handlebars = /* @__PURE__ */ getDefaultExportFromCjs(handlebarsExports);
const handlebars$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: handlebars
}, [handlebarsExports]);
export {
  handlebars$1 as h
};
