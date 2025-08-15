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
var less_1;
var hasRequiredLess;
function requireLess() {
  if (hasRequiredLess) return less_1;
  hasRequiredLess = 1;
  less_1 = less2;
  less2.displayName = "less";
  less2.aliases = [];
  function less2(Prism) {
    Prism.languages.less = Prism.languages.extend("css", {
      comment: [
        /\/\*[\s\S]*?\*\//,
        {
          pattern: /(^|[^\\])\/\/.*/,
          lookbehind: true
        }
      ],
      atrule: {
        pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
        inside: {
          punctuation: /[:()]/
        }
      },
      // selectors and mixins are considered the same
      selector: {
        pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
        inside: {
          // mixin parameters
          variable: /@+[\w-]+/
        }
      },
      property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
      operator: /[+\-*\/]/
    });
    Prism.languages.insertBefore("less", "property", {
      variable: [
        // Variable declaration (the colon must be consumed!)
        {
          pattern: /@[\w-]+\s*:/,
          inside: {
            punctuation: /:/
          }
        },
        // Variable usage
        /@@?[\w-]+/
      ],
      "mixin-usage": {
        pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
        lookbehind: true,
        alias: "function"
      }
    });
  }
  return less_1;
}
var lessExports = requireLess();
const less = /* @__PURE__ */ getDefaultExportFromCjs(lessExports);
const less$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: less
}, [lessExports]);
export {
  less$1 as l
};
