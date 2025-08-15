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
var soy_1;
var hasRequiredSoy;
function requireSoy() {
  if (hasRequiredSoy) return soy_1;
  hasRequiredSoy = 1;
  var refractorMarkupTemplating = requireMarkupTemplating();
  soy_1 = soy2;
  soy2.displayName = "soy";
  soy2.aliases = [];
  function soy2(Prism) {
    Prism.register(refractorMarkupTemplating);
    (function(Prism2) {
      var stringPattern = /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
      var numberPattern = /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;
      Prism2.languages.soy = {
        comment: [
          /\/\*[\s\S]*?\*\//,
          {
            pattern: /(\s)\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        "command-arg": {
          pattern: /(\{+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,
          lookbehind: true,
          alias: "string",
          inside: {
            punctuation: /\./
          }
        },
        parameter: {
          pattern: /(\{+\/?\s*@?param\??\s+)\.?[\w.]+/,
          lookbehind: true,
          alias: "variable"
        },
        keyword: [
          {
            pattern: /(\{+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,
            lookbehind: true
          },
          /\b(?:any|as|attributes|bool|css|float|html|in|int|js|list|map|null|number|string|uri)\b/
        ],
        delimiter: {
          pattern: /^\{+\/?|\/?\}+$/,
          alias: "punctuation"
        },
        property: /\w+(?==)/,
        variable: {
          pattern: /\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+\]))*/,
          inside: {
            string: {
              pattern: stringPattern,
              greedy: true
            },
            number: numberPattern,
            punctuation: /[\[\].?]/
          }
        },
        string: {
          pattern: stringPattern,
          greedy: true
        },
        function: [
          /\w+(?=\()/,
          {
            pattern: /(\|[^\S\r\n]*)\w+/,
            lookbehind: true
          }
        ],
        boolean: /\b(?:false|true)\b/,
        number: numberPattern,
        operator: /\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,
        punctuation: /[{}()\[\]|.,:]/
      };
      Prism2.hooks.add("before-tokenize", function(env) {
        var soyPattern = /\{\{.+?\}\}|\{.+?\}|\s\/\/.*|\/\*[\s\S]*?\*\//g;
        var soyLitteralStart = "{literal}";
        var soyLitteralEnd = "{/literal}";
        var soyLitteralMode = false;
        Prism2.languages["markup-templating"].buildPlaceholders(
          env,
          "soy",
          soyPattern,
          function(match) {
            if (match === soyLitteralEnd) {
              soyLitteralMode = false;
            }
            if (!soyLitteralMode) {
              if (match === soyLitteralStart) {
                soyLitteralMode = true;
              }
              return true;
            }
            return false;
          }
        );
      });
      Prism2.hooks.add("after-tokenize", function(env) {
        Prism2.languages["markup-templating"].tokenizePlaceholders(env, "soy");
      });
    })(Prism);
  }
  return soy_1;
}
var soyExports = requireSoy();
const soy = /* @__PURE__ */ getDefaultExportFromCjs(soyExports);
const soy$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: soy
}, [soyExports]);
export {
  soy$1 as s
};
