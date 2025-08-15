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
var pascaligo_1;
var hasRequiredPascaligo;
function requirePascaligo() {
  if (hasRequiredPascaligo) return pascaligo_1;
  hasRequiredPascaligo = 1;
  pascaligo_1 = pascaligo2;
  pascaligo2.displayName = "pascaligo";
  pascaligo2.aliases = [];
  function pascaligo2(Prism) {
    (function(Prism2) {
      var braces = /\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/.source;
      var type = /(?:\b\w+(?:<braces>)?|<braces>)/.source.replace(
        /<braces>/g,
        function() {
          return braces;
        }
      );
      var pascaligo3 = Prism2.languages.pascaligo = {
        comment: /\(\*[\s\S]+?\*\)|\/\/.*/,
        string: {
          pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,
          greedy: true
        },
        "class-name": [
          {
            pattern: RegExp(
              /(\btype\s+\w+\s+is\s+)<type>/.source.replace(
                /<type>/g,
                function() {
                  return type;
                }
              ),
              "i"
            ),
            lookbehind: true,
            inside: null
            // see below
          },
          {
            pattern: RegExp(
              /<type>(?=\s+is\b)/.source.replace(/<type>/g, function() {
                return type;
              }),
              "i"
            ),
            inside: null
            // see below
          },
          {
            pattern: RegExp(
              /(:\s*)<type>/.source.replace(/<type>/g, function() {
                return type;
              })
            ),
            lookbehind: true,
            inside: null
            // see below
          }
        ],
        keyword: {
          pattern: /(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,
          lookbehind: true
        },
        boolean: {
          pattern: /(^|[^&])\b(?:False|True)\b/i,
          lookbehind: true
        },
        builtin: {
          pattern: /(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,
          lookbehind: true
        },
        function: /\b\w+(?=\s*\()/,
        number: [
          // Hexadecimal, octal and binary
          /%[01]+|&[0-7]+|\$[a-f\d]+/i,
          // Decimal
          /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i
        ],
        operator: /->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,
        punctuation: /\(\.|\.\)|[()\[\]:;,.{}]/
      };
      var classNameInside = [
        "comment",
        "keyword",
        "builtin",
        "operator",
        "punctuation"
      ].reduce(function(accum, key) {
        accum[key] = pascaligo3[key];
        return accum;
      }, {});
      pascaligo3["class-name"].forEach(function(p) {
        p.inside = classNameInside;
      });
    })(Prism);
  }
  return pascaligo_1;
}
var pascaligoExports = requirePascaligo();
const pascaligo = /* @__PURE__ */ getDefaultExportFromCjs(pascaligoExports);
const pascaligo$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: pascaligo
}, [pascaligoExports]);
export {
  pascaligo$1 as p
};
