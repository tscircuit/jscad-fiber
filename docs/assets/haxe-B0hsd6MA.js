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
var haxe_1;
var hasRequiredHaxe;
function requireHaxe() {
  if (hasRequiredHaxe) return haxe_1;
  hasRequiredHaxe = 1;
  haxe_1 = haxe2;
  haxe2.displayName = "haxe";
  haxe2.aliases = [];
  function haxe2(Prism) {
    Prism.languages.haxe = Prism.languages.extend("clike", {
      string: {
        // Strings can be multi-line
        pattern: /"(?:[^"\\]|\\[\s\S])*"/,
        greedy: true
      },
      "class-name": [
        {
          pattern: /(\b(?:abstract|class|enum|extends|implements|interface|new|typedef)\s+)[A-Z_]\w*/,
          lookbehind: true
        },
        // based on naming convention
        /\b[A-Z]\w*/
      ],
      // The final look-ahead prevents highlighting of keywords if expressions such as "haxe.macro.Expr"
      keyword: /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|final|for|from|function|if|implements|import|in|inline|interface|macro|new|null|operator|overload|override|package|private|public|return|static|super|switch|throw|to|try|typedef|untyped|using|var|while)(?!\.)\b/,
      function: {
        pattern: /\b[a-z_]\w*(?=\s*(?:<[^<>]*>\s*)?\()/i,
        greedy: true
      },
      operator: /\.{3}|\+\+|--|&&|\|\||->|=>|(?:<<?|>{1,3}|[-+*/%!=&|^])=?|[?:~]/
    });
    Prism.languages.insertBefore("haxe", "string", {
      "string-interpolation": {
        pattern: /'(?:[^'\\]|\\[\s\S])*'/,
        greedy: true,
        inside: {
          interpolation: {
            pattern: /(^|[^\\])\$(?:\w+|\{[^{}]+\})/,
            lookbehind: true,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{?|\}$/,
                alias: "punctuation"
              },
              expression: {
                pattern: /[\s\S]+/,
                inside: Prism.languages.haxe
              }
            }
          },
          string: /[\s\S]+/
        }
      }
    });
    Prism.languages.insertBefore("haxe", "class-name", {
      regex: {
        pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[a-z]*/,
        greedy: true,
        inside: {
          "regex-flags": /\b[a-z]+$/,
          "regex-source": {
            pattern: /^(~\/)[\s\S]+(?=\/$)/,
            lookbehind: true,
            alias: "language-regex",
            inside: Prism.languages.regex
          },
          "regex-delimiter": /^~\/|\/$/
        }
      }
    });
    Prism.languages.insertBefore("haxe", "keyword", {
      preprocessor: {
        pattern: /#(?:else|elseif|end|if)\b.*/,
        alias: "property"
      },
      metadata: {
        pattern: /@:?[\w.]+/,
        alias: "symbol"
      },
      reification: {
        pattern: /\$(?:\w+|(?=\{))/,
        alias: "important"
      }
    });
  }
  return haxe_1;
}
var haxeExports = requireHaxe();
const haxe = /* @__PURE__ */ getDefaultExportFromCjs(haxeExports);
const haxe$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: haxe
}, [haxeExports]);
export {
  haxe$1 as h
};
