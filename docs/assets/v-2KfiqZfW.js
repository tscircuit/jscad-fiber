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
var v_1;
var hasRequiredV;
function requireV() {
  if (hasRequiredV) return v_1;
  hasRequiredV = 1;
  v_1 = v2;
  v2.displayName = "v";
  v2.aliases = [];
  function v2(Prism) {
    (function(Prism2) {
      var interpolationExpr = {
        pattern: /[\s\S]+/,
        inside: null
      };
      Prism2.languages.v = Prism2.languages.extend("clike", {
        string: {
          pattern: /r?(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          alias: "quoted-string",
          greedy: true,
          inside: {
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:\{[^{}]*\}|\w+(?:\.\w+(?:\([^\(\)]*\))?|\[[^\[\]]+\])*)/,
              lookbehind: true,
              inside: {
                "interpolation-variable": {
                  pattern: /^\$\w[\s\S]*$/,
                  alias: "variable"
                },
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation"
                },
                "interpolation-expression": interpolationExpr
              }
            }
          }
        },
        "class-name": {
          pattern: /(\b(?:enum|interface|struct|type)\s+)(?:C\.)?\w+/,
          lookbehind: true
        },
        keyword: /(?:\b(?:__global|as|asm|assert|atomic|break|chan|const|continue|defer|else|embed|enum|fn|for|go(?:to)?|if|import|in|interface|is|lock|match|module|mut|none|or|pub|return|rlock|select|shared|sizeof|static|struct|type(?:of)?|union|unsafe)|\$(?:else|for|if)|#(?:flag|include))\b/,
        number: /\b(?:0x[a-f\d]+(?:_[a-f\d]+)*|0b[01]+(?:_[01]+)*|0o[0-7]+(?:_[0-7]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?)\b/i,
        operator: /~|\?|[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\.?/,
        builtin: /\b(?:any(?:_float|_int)?|bool|byte(?:ptr)?|charptr|f(?:32|64)|i(?:8|16|64|128|nt)|rune|size_t|string|u(?:16|32|64|128)|voidptr)\b/
      });
      interpolationExpr.inside = Prism2.languages.v;
      Prism2.languages.insertBefore("v", "string", {
        char: {
          pattern: /`(?:\\`|\\?[^`]{1,2})`/,
          // using {1,2} instead of `u` flag for compatibility
          alias: "rune"
        }
      });
      Prism2.languages.insertBefore("v", "operator", {
        attribute: {
          pattern: /(^[\t ]*)\[(?:deprecated|direct_array_access|flag|inline|live|ref_only|typedef|unsafe_fn|windows_stdcall)\]/m,
          lookbehind: true,
          alias: "annotation",
          inside: {
            punctuation: /[\[\]]/,
            keyword: /\w+/
          }
        },
        generic: {
          pattern: /<\w+>(?=\s*[\)\{])/,
          inside: {
            punctuation: /[<>]/,
            "class-name": /\w+/
          }
        }
      });
      Prism2.languages.insertBefore("v", "function", {
        "generic-function": {
          // e.g. foo<T>( ...
          pattern: /\b\w+\s*<\w+>(?=\()/,
          inside: {
            function: /^\w+/,
            generic: {
              pattern: /<\w+>/,
              inside: Prism2.languages.v.generic.inside
            }
          }
        }
      });
    })(Prism);
  }
  return v_1;
}
var vExports = requireV();
const v = /* @__PURE__ */ getDefaultExportFromCjs(vExports);
const v$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: v
}, [vExports]);
export {
  v$1 as v
};
