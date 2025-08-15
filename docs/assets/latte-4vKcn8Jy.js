import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireMarkupTemplating } from "./markup-templating-hY-QSL53.js";
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
var latte_1;
var hasRequiredLatte;
function requireLatte() {
  if (hasRequiredLatte) return latte_1;
  hasRequiredLatte = 1;
  var refractorMarkupTemplating = requireMarkupTemplating();
  var refractorPhp = requirePhp();
  latte_1 = latte2;
  latte2.displayName = "latte";
  latte2.aliases = [];
  function latte2(Prism) {
    Prism.register(refractorMarkupTemplating);
    Prism.register(refractorPhp);
    (function(Prism2) {
      Prism2.languages.latte = {
        comment: /^\{\*[\s\S]*/,
        "latte-tag": {
          // https://latte.nette.org/en/tags
          pattern: /(^\{(?:\/(?=[a-z]))?)(?:[=_]|[a-z]\w*\b(?!\())/i,
          lookbehind: true,
          alias: "important"
        },
        delimiter: {
          pattern: /^\{\/?|\}$/,
          alias: "punctuation"
        },
        php: {
          pattern: /\S(?:[\s\S]*\S)?/,
          alias: "language-php",
          inside: Prism2.languages.php
        }
      };
      var markupLatte = Prism2.languages.extend("markup", {});
      Prism2.languages.insertBefore(
        "inside",
        "attr-value",
        {
          "n-attr": {
            pattern: /n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,
            inside: {
              "attr-name": {
                pattern: /^[^\s=]+/,
                alias: "important"
              },
              "attr-value": {
                pattern: /=[\s\S]+/,
                inside: {
                  punctuation: [
                    /^=/,
                    {
                      pattern: /^(\s*)["']|["']$/,
                      lookbehind: true
                    }
                  ],
                  php: {
                    pattern: /\S(?:[\s\S]*\S)?/,
                    inside: Prism2.languages.php
                  }
                }
              }
            }
          }
        },
        markupLatte.tag
      );
      Prism2.hooks.add("before-tokenize", function(env) {
        if (env.language !== "latte") {
          return;
        }
        var lattePattern = /\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*\}/g;
        Prism2.languages["markup-templating"].buildPlaceholders(
          env,
          "latte",
          lattePattern
        );
        env.grammar = markupLatte;
      });
      Prism2.hooks.add("after-tokenize", function(env) {
        Prism2.languages["markup-templating"].tokenizePlaceholders(env, "latte");
      });
    })(Prism);
  }
  return latte_1;
}
var latteExports = requireLatte();
const latte = /* @__PURE__ */ getDefaultExportFromCjs(latteExports);
const latte$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: latte
}, [latteExports]);
export {
  latte$1 as l
};
