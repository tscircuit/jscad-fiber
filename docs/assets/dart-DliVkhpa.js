import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
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
var dart_1;
var hasRequiredDart;
function requireDart() {
  if (hasRequiredDart) return dart_1;
  hasRequiredDart = 1;
  dart_1 = dart2;
  dart2.displayName = "dart";
  dart2.aliases = [];
  function dart2(Prism) {
    (function(Prism2) {
      var keywords = [
        /\b(?:async|sync|yield)\*/,
        /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/
      ];
      var packagePrefix = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source;
      var className = {
        pattern: RegExp(packagePrefix + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
        lookbehind: true,
        inside: {
          namespace: {
            pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
            inside: {
              punctuation: /\./
            }
          }
        }
      };
      Prism2.languages.dart = Prism2.languages.extend("clike", {
        "class-name": [
          className,
          {
            // variables and parameters
            // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
            pattern: RegExp(
              packagePrefix + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source
            ),
            lookbehind: true,
            inside: className.inside
          }
        ],
        keyword: keywords,
        operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
      });
      Prism2.languages.insertBefore("dart", "string", {
        "string-literal": {
          pattern: /r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,
          greedy: true,
          inside: {
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,
              lookbehind: true,
              inside: {
                punctuation: /^\$\{?|\}$/,
                expression: {
                  pattern: /[\s\S]+/,
                  inside: Prism2.languages.dart
                }
              }
            },
            string: /[\s\S]+/
          }
        },
        string: void 0
      });
      Prism2.languages.insertBefore("dart", "class-name", {
        metadata: {
          pattern: /@\w+/,
          alias: "function"
        }
      });
      Prism2.languages.insertBefore("dart", "class-name", {
        generics: {
          pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
          inside: {
            "class-name": className,
            keyword: keywords,
            punctuation: /[<>(),.:]/,
            operator: /[?&|]/
          }
        }
      });
    })(Prism);
  }
  return dart_1;
}
var dartExports = requireDart();
const dart = /* @__PURE__ */ getDefaultExportFromCjs(dartExports);
const dart$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: dart
}, [dartExports]);
export {
  dart$1 as d
};
