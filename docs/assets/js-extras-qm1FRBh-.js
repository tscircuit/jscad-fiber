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
var jsExtras_1;
var hasRequiredJsExtras;
function requireJsExtras() {
  if (hasRequiredJsExtras) return jsExtras_1;
  hasRequiredJsExtras = 1;
  jsExtras_1 = jsExtras2;
  jsExtras2.displayName = "jsExtras";
  jsExtras2.aliases = [];
  function jsExtras2(Prism) {
    (function(Prism2) {
      Prism2.languages.insertBefore("javascript", "function-variable", {
        "method-variable": {
          pattern: RegExp(
            "(\\.\\s*)" + Prism2.languages.javascript["function-variable"].pattern.source
          ),
          lookbehind: true,
          alias: ["function-variable", "method", "function", "property-access"]
        }
      });
      Prism2.languages.insertBefore("javascript", "function", {
        method: {
          pattern: RegExp(
            "(\\.\\s*)" + Prism2.languages.javascript["function"].source
          ),
          lookbehind: true,
          alias: ["function", "property-access"]
        }
      });
      Prism2.languages.insertBefore("javascript", "constant", {
        "known-class-name": [
          {
            // standard built-ins
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
            pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
            alias: "class-name"
          },
          {
            // errors
            pattern: /\b(?:[A-Z]\w*)Error\b/,
            alias: "class-name"
          }
        ]
      });
      function withId(source, flags) {
        return RegExp(
          source.replace(/<ID>/g, function() {
            return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
          }),
          flags
        );
      }
      Prism2.languages.insertBefore("javascript", "keyword", {
        imports: {
          // https://tc39.es/ecma262/#sec-imports
          pattern: withId(
            /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source
          ),
          lookbehind: true,
          inside: Prism2.languages.javascript
        },
        exports: {
          // https://tc39.es/ecma262/#sec-exports
          pattern: withId(
            /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source
          ),
          lookbehind: true,
          inside: Prism2.languages.javascript
        }
      });
      Prism2.languages.javascript["keyword"].unshift(
        {
          pattern: /\b(?:as|default|export|from|import)\b/,
          alias: "module"
        },
        {
          pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
          alias: "control-flow"
        },
        {
          pattern: /\bnull\b/,
          alias: ["null", "nil"]
        },
        {
          pattern: /\bundefined\b/,
          alias: "nil"
        }
      );
      Prism2.languages.insertBefore("javascript", "operator", {
        spread: {
          pattern: /\.{3}/,
          alias: "operator"
        },
        arrow: {
          pattern: /=>/,
          alias: "operator"
        }
      });
      Prism2.languages.insertBefore("javascript", "punctuation", {
        "property-access": {
          pattern: withId(/(\.\s*)#?<ID>/.source),
          lookbehind: true
        },
        "maybe-class-name": {
          pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
          lookbehind: true
        },
        dom: {
          // this contains only a few commonly used DOM variables
          pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
          alias: "variable"
        },
        console: {
          pattern: /\bconsole(?=\s*\.)/,
          alias: "class-name"
        }
      });
      var maybeClassNameTokens = [
        "function",
        "function-variable",
        "method",
        "method-variable",
        "property-access"
      ];
      for (var i = 0; i < maybeClassNameTokens.length; i++) {
        var token = maybeClassNameTokens[i];
        var value = Prism2.languages.javascript[token];
        if (Prism2.util.type(value) === "RegExp") {
          value = Prism2.languages.javascript[token] = {
            pattern: value
          };
        }
        var inside = value.inside || {};
        value.inside = inside;
        inside["maybe-class-name"] = /^[A-Z][\s\S]*/;
      }
    })(Prism);
  }
  return jsExtras_1;
}
var jsExtrasExports = requireJsExtras();
const jsExtras = /* @__PURE__ */ getDefaultExportFromCjs(jsExtrasExports);
const jsExtras$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jsExtras
}, [jsExtrasExports]);
export {
  jsExtras$1 as j
};
