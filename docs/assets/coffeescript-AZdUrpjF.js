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
var coffeescript_1;
var hasRequiredCoffeescript;
function requireCoffeescript() {
  if (hasRequiredCoffeescript) return coffeescript_1;
  hasRequiredCoffeescript = 1;
  coffeescript_1 = coffeescript2;
  coffeescript2.displayName = "coffeescript";
  coffeescript2.aliases = ["coffee"];
  function coffeescript2(Prism) {
    (function(Prism2) {
      var comment = /#(?!\{).+/;
      var interpolation = {
        pattern: /#\{[^}]+\}/,
        alias: "variable"
      };
      Prism2.languages.coffeescript = Prism2.languages.extend("javascript", {
        comment,
        string: [
          // Strings are multiline
          {
            pattern: /'(?:\\[\s\S]|[^\\'])*'/,
            greedy: true
          },
          {
            // Strings are multiline
            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
            greedy: true,
            inside: {
              interpolation
            }
          }
        ],
        keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
        "class-member": {
          pattern: /@(?!\d)\w+/,
          alias: "variable"
        }
      });
      Prism2.languages.insertBefore("coffeescript", "comment", {
        "multiline-comment": {
          pattern: /###[\s\S]+?###/,
          alias: "comment"
        },
        // Block regexp can contain comments and interpolation
        "block-regex": {
          pattern: /\/{3}[\s\S]*?\/{3}/,
          alias: "regex",
          inside: {
            comment,
            interpolation
          }
        }
      });
      Prism2.languages.insertBefore("coffeescript", "string", {
        "inline-javascript": {
          pattern: /`(?:\\[\s\S]|[^\\`])*`/,
          inside: {
            delimiter: {
              pattern: /^`|`$/,
              alias: "punctuation"
            },
            script: {
              pattern: /[\s\S]+/,
              alias: "language-javascript",
              inside: Prism2.languages.javascript
            }
          }
        },
        // Block strings
        "multiline-string": [
          {
            pattern: /'''[\s\S]*?'''/,
            greedy: true,
            alias: "string"
          },
          {
            pattern: /"""[\s\S]*?"""/,
            greedy: true,
            alias: "string",
            inside: {
              interpolation
            }
          }
        ]
      });
      Prism2.languages.insertBefore("coffeescript", "keyword", {
        // Object property
        property: /(?!\d)\w+(?=\s*:(?!:))/
      });
      delete Prism2.languages.coffeescript["template-string"];
      Prism2.languages.coffee = Prism2.languages.coffeescript;
    })(Prism);
  }
  return coffeescript_1;
}
var coffeescriptExports = requireCoffeescript();
const coffeescript = /* @__PURE__ */ getDefaultExportFromCjs(coffeescriptExports);
const coffeescript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: coffeescript
}, [coffeescriptExports]);
export {
  coffeescript$1 as c
};
