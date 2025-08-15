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
var rip_1;
var hasRequiredRip;
function requireRip() {
  if (hasRequiredRip) return rip_1;
  hasRequiredRip = 1;
  rip_1 = rip2;
  rip2.displayName = "rip";
  rip2.aliases = [];
  function rip2(Prism) {
    Prism.languages.rip = {
      comment: {
        pattern: /#.*/,
        greedy: true
      },
      char: {
        pattern: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,
        greedy: true
      },
      string: {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      regex: {
        pattern: /(^|[^/])\/(?!\/)(?:\[[^\n\r\]]*\]|\\.|[^/\\\r\n\[])+\/(?=\s*(?:$|[\r\n,.;})]))/,
        lookbehind: true,
        greedy: true
      },
      keyword: /(?:=>|->)|\b(?:case|catch|class|else|exit|finally|if|raise|return|switch|try)\b/,
      builtin: /@|\bSystem\b/,
      boolean: /\b(?:false|true)\b/,
      date: /\b\d{4}-\d{2}-\d{2}\b/,
      time: /\b\d{2}:\d{2}:\d{2}\b/,
      datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
      symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
      number: /[+-]?\b(?:\d+\.\d+|\d+)\b/,
      punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,
      reference: /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/
    };
  }
  return rip_1;
}
var ripExports = requireRip();
const rip = /* @__PURE__ */ getDefaultExportFromCjs(ripExports);
const rip$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: rip
}, [ripExports]);
export {
  rip$1 as r
};
