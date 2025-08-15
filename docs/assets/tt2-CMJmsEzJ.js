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
var tt2_1;
var hasRequiredTt2;
function requireTt2() {
  if (hasRequiredTt2) return tt2_1;
  hasRequiredTt2 = 1;
  var refractorMarkupTemplating = requireMarkupTemplating();
  tt2_1 = tt22;
  tt22.displayName = "tt2";
  tt22.aliases = [];
  function tt22(Prism) {
    Prism.register(refractorMarkupTemplating);
    (function(Prism2) {
      Prism2.languages.tt2 = Prism2.languages.extend("clike", {
        comment: /#.*|\[%#[\s\S]*?%\]/,
        keyword: /\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\b/,
        punctuation: /[[\]{},()]/
      });
      Prism2.languages.insertBefore("tt2", "number", {
        operator: /=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|not|or)\b/,
        variable: {
          pattern: /\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i
        }
      });
      Prism2.languages.insertBefore("tt2", "keyword", {
        delimiter: {
          pattern: /^(?:\[%|%%)-?|-?%\]$/,
          alias: "punctuation"
        }
      });
      Prism2.languages.insertBefore("tt2", "string", {
        "single-quoted-string": {
          pattern: /'[^\\']*(?:\\[\s\S][^\\']*)*'/,
          greedy: true,
          alias: "string"
        },
        "double-quoted-string": {
          pattern: /"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,
          greedy: true,
          alias: "string",
          inside: {
            variable: {
              pattern: /\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i
            }
          }
        }
      });
      delete Prism2.languages.tt2.string;
      Prism2.hooks.add("before-tokenize", function(env) {
        var tt2Pattern = /\[%[\s\S]+?%\]/g;
        Prism2.languages["markup-templating"].buildPlaceholders(
          env,
          "tt2",
          tt2Pattern
        );
      });
      Prism2.hooks.add("after-tokenize", function(env) {
        Prism2.languages["markup-templating"].tokenizePlaceholders(env, "tt2");
      });
    })(Prism);
  }
  return tt2_1;
}
var tt2Exports = requireTt2();
const tt2 = /* @__PURE__ */ getDefaultExportFromCjs(tt2Exports);
const tt2$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: tt2
}, [tt2Exports]);
export {
  tt2$1 as t
};
