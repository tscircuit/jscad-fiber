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
var jexl_1;
var hasRequiredJexl;
function requireJexl() {
  if (hasRequiredJexl) return jexl_1;
  hasRequiredJexl = 1;
  jexl_1 = jexl2;
  jexl2.displayName = "jexl";
  jexl2.aliases = [];
  function jexl2(Prism) {
    Prism.languages.jexl = {
      string: /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
      transform: {
        pattern: /(\|\s*)[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*/,
        alias: "function",
        lookbehind: true
      },
      function: /[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*\s*(?=\()/,
      number: /\b\d+(?:\.\d+)?\b|\B\.\d+\b/,
      operator: /[<>!]=?|-|\+|&&|==|\|\|?|\/\/?|[?:*^%]/,
      boolean: /\b(?:false|true)\b/,
      keyword: /\bin\b/,
      punctuation: /[{}[\](),.]/
    };
  }
  return jexl_1;
}
var jexlExports = requireJexl();
const jexl = /* @__PURE__ */ getDefaultExportFromCjs(jexlExports);
const jexl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jexl
}, [jexlExports]);
export {
  jexl$1 as j
};
