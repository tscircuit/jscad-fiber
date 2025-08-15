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
var keyman_1;
var hasRequiredKeyman;
function requireKeyman() {
  if (hasRequiredKeyman) return keyman_1;
  hasRequiredKeyman = 1;
  keyman_1 = keyman2;
  keyman2.displayName = "keyman";
  keyman2.aliases = [];
  function keyman2(Prism) {
    Prism.languages.keyman = {
      comment: {
        pattern: /\bc .*/i,
        greedy: true
      },
      string: {
        pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
        greedy: true
      },
      "virtual-key": {
        pattern: /\[\s*(?:(?:ALT|CAPS|CTRL|LALT|LCTRL|NCAPS|RALT|RCTRL|SHIFT)\s+)*(?:[TKU]_[\w?]+|[A-E]\d\d?|"[^"\r\n]*"|'[^'\r\n]*')\s*\]/i,
        greedy: true,
        alias: "function"
        // alias for styles
      },
      // https://help.keyman.com/developer/language/guide/headers
      "header-keyword": {
        pattern: /&\w+/,
        alias: "bold"
        // alias for styles
      },
      "header-statement": {
        pattern: /\b(?:bitmap|bitmaps|caps always off|caps on only|copyright|hotkey|language|layout|message|name|shift frees caps|version)\b/i,
        alias: "bold"
        // alias for styles
      },
      "rule-keyword": {
        pattern: /\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|reset|return|save|set|store|use)\b/i,
        alias: "keyword"
      },
      "structural-keyword": {
        pattern: /\b(?:ansi|begin|group|match|nomatch|unicode|using keys)\b/i,
        alias: "keyword"
      },
      "compile-target": {
        pattern: /\$(?:keyman|keymanonly|keymanweb|kmfl|weaver):/i,
        alias: "property"
      },
      // U+####, x###, d### characters and numbers
      number: /\b(?:U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,
      operator: /[+>\\$]|\.\./,
      punctuation: /[()=,]/
    };
  }
  return keyman_1;
}
var keymanExports = requireKeyman();
const keyman = /* @__PURE__ */ getDefaultExportFromCjs(keymanExports);
const keyman$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: keyman
}, [keymanExports]);
export {
  keyman$1 as k
};
