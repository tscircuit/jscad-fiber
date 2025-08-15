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
var twig_1;
var hasRequiredTwig;
function requireTwig() {
  if (hasRequiredTwig) return twig_1;
  hasRequiredTwig = 1;
  var refractorMarkupTemplating = requireMarkupTemplating();
  twig_1 = twig2;
  twig2.displayName = "twig";
  twig2.aliases = [];
  function twig2(Prism) {
    Prism.register(refractorMarkupTemplating);
    Prism.languages.twig = {
      comment: /^\{#[\s\S]*?#\}$/,
      "tag-name": {
        pattern: /(^\{%-?\s*)\w+/,
        lookbehind: true,
        alias: "keyword"
      },
      delimiter: {
        pattern: /^\{[{%]-?|-?[%}]\}$/,
        alias: "punctuation"
      },
      string: {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        inside: {
          punctuation: /^['"]|['"]$/
        }
      },
      keyword: /\b(?:even|if|odd)\b/,
      boolean: /\b(?:false|null|true)\b/,
      number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
      operator: [
        {
          pattern: /(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
          lookbehind: true
        },
        /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/
      ],
      punctuation: /[()\[\]{}:.,]/
    };
    Prism.hooks.add("before-tokenize", function(env) {
      if (env.language !== "twig") {
        return;
      }
      var pattern = /\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g;
      Prism.languages["markup-templating"].buildPlaceholders(env, "twig", pattern);
    });
    Prism.hooks.add("after-tokenize", function(env) {
      Prism.languages["markup-templating"].tokenizePlaceholders(env, "twig");
    });
  }
  return twig_1;
}
var twigExports = requireTwig();
const twig = /* @__PURE__ */ getDefaultExportFromCjs(twigExports);
const twig$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: twig
}, [twigExports]);
export {
  twig$1 as t
};
