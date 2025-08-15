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
var reason_1;
var hasRequiredReason;
function requireReason() {
  if (hasRequiredReason) return reason_1;
  hasRequiredReason = 1;
  reason_1 = reason2;
  reason2.displayName = "reason";
  reason2.aliases = [];
  function reason2(Prism) {
    Prism.languages.reason = Prism.languages.extend("clike", {
      string: {
        pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
        greedy: true
      },
      // 'class-name' must be matched *after* 'constructor' defined below
      "class-name": /\b[A-Z]\w*/,
      keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
      operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
    });
    Prism.languages.insertBefore("reason", "class-name", {
      char: {
        pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
        greedy: true
      },
      // Negative look-ahead prevents from matching things like String.capitalize
      constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
      label: {
        pattern: /\b[a-z]\w*(?=::)/,
        alias: "symbol"
      }
    });
    delete Prism.languages.reason.function;
  }
  return reason_1;
}
var reasonExports = requireReason();
const reason = /* @__PURE__ */ getDefaultExportFromCjs(reasonExports);
const reason$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: reason
}, [reasonExports]);
export {
  reason$1 as r
};
