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
var prolog_1;
var hasRequiredProlog;
function requireProlog() {
  if (hasRequiredProlog) return prolog_1;
  hasRequiredProlog = 1;
  prolog_1 = prolog2;
  prolog2.displayName = "prolog";
  prolog2.aliases = [];
  function prolog2(Prism) {
    Prism.languages.prolog = {
      // Syntax depends on the implementation
      comment: {
        pattern: /\/\*[\s\S]*?\*\/|%.*/,
        greedy: true
      },
      // Depending on the implementation, strings may allow escaped newlines and quote-escape
      string: {
        pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1(?!\1)/,
        greedy: true
      },
      builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
      // FIXME: Should we list all null-ary predicates (not followed by a parenthesis) like halt, trace, etc.?
      function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
      number: /\b\d+(?:\.\d*)?/,
      // Custom operators are allowed
      operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
      punctuation: /[(){}\[\],]/
    };
  }
  return prolog_1;
}
var prologExports = requireProlog();
const prolog = /* @__PURE__ */ getDefaultExportFromCjs(prologExports);
const prolog$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prolog
}, [prologExports]);
export {
  prolog$1 as p
};
