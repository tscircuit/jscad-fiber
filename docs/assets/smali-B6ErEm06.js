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
var smali_1;
var hasRequiredSmali;
function requireSmali() {
  if (hasRequiredSmali) return smali_1;
  hasRequiredSmali = 1;
  smali_1 = smali2;
  smali2.displayName = "smali";
  smali2.aliases = [];
  function smali2(Prism) {
    Prism.languages.smali = {
      comment: /#.*/,
      string: {
        pattern: /"(?:[^\r\n\\"]|\\.)*"|'(?:[^\r\n\\']|\\(?:.|u[\da-fA-F]{4}))'/,
        greedy: true
      },
      "class-name": {
        pattern: /(^|[^L])L(?:(?:\w+|`[^`\r\n]*`)\/)*(?:[\w$]+|`[^`\r\n]*`)(?=\s*;)/,
        lookbehind: true,
        inside: {
          "class-name": {
            pattern: /(^L|\/)(?:[\w$]+|`[^`\r\n]*`)$/,
            lookbehind: true
          },
          namespace: {
            pattern: /^(L)(?:(?:\w+|`[^`\r\n]*`)\/)+/,
            lookbehind: true,
            inside: {
              punctuation: /\//
            }
          },
          builtin: /^L/
        }
      },
      builtin: [
        {
          // Reference: https://github.com/JesusFreke/smali/wiki/TypesMethodsAndFields#types
          pattern: /([();\[])[BCDFIJSVZ]+/,
          lookbehind: true
        },
        {
          // e.g. .field mWifiOnUid:I
          pattern: /([\w$>]:)[BCDFIJSVZ]/,
          lookbehind: true
        }
      ],
      keyword: [
        {
          pattern: /(\.end\s+)[\w-]+/,
          lookbehind: true
        },
        {
          pattern: /(^|[^\w.-])\.(?!\d)[\w-]+/,
          lookbehind: true
        },
        {
          pattern: /(^|[^\w.-])(?:abstract|annotation|bridge|constructor|enum|final|interface|private|protected|public|runtime|static|synthetic|system|transient)(?![\w.-])/,
          lookbehind: true
        }
      ],
      function: {
        pattern: /(^|[^\w.-])(?:\w+|<[\w$-]+>)(?=\()/,
        lookbehind: true
      },
      field: {
        pattern: /[\w$]+(?=:)/,
        alias: "variable"
      },
      register: {
        pattern: /(^|[^\w.-])[vp]\d(?![\w.-])/,
        lookbehind: true,
        alias: "variable"
      },
      boolean: {
        pattern: /(^|[^\w.-])(?:false|true)(?![\w.-])/,
        lookbehind: true
      },
      number: {
        pattern: /(^|[^/\w.-])-?(?:NAN|INFINITY|0x(?:[\dA-F]+(?:\.[\dA-F]*)?|\.[\dA-F]+)(?:p[+-]?[\dA-F]+)?|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)[dflst]?(?![\w.-])/i,
        lookbehind: true
      },
      label: {
        pattern: /(:)\w+/,
        lookbehind: true,
        alias: "property"
      },
      operator: /->|\.\.|[\[=]/,
      punctuation: /[{}(),;:]/
    };
  }
  return smali_1;
}
var smaliExports = requireSmali();
const smali = /* @__PURE__ */ getDefaultExportFromCjs(smaliExports);
const smali$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: smali
}, [smaliExports]);
export {
  smali$1 as s
};
