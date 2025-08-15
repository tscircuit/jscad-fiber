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
var qore_1;
var hasRequiredQore;
function requireQore() {
  if (hasRequiredQore) return qore_1;
  hasRequiredQore = 1;
  qore_1 = qore2;
  qore2.displayName = "qore";
  qore2.aliases = [];
  function qore2(Prism) {
    Prism.languages.qore = Prism.languages.extend("clike", {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/|#).*)/,
        lookbehind: true
      },
      // Overridden to allow unescaped multi-line strings
      string: {
        pattern: /("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,
        greedy: true
      },
      keyword: /\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:bool|date|float|int|list|number|string)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,
      boolean: /\b(?:false|true)\b/i,
      function: /\$?\b(?!\d)\w+(?=\()/,
      number: /\b(?:0b[01]+|0x(?:[\da-f]*\.)?[\da-fp\-]+|(?:\d+(?:\.\d+)?|\.\d+)(?:e\d+)?[df]|(?:\d+(?:\.\d+)?|\.\d+))\b/i,
      operator: {
        pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,
        lookbehind: true
      },
      variable: /\$(?!\d)\w+\b/
    });
  }
  return qore_1;
}
var qoreExports = requireQore();
const qore = /* @__PURE__ */ getDefaultExportFromCjs(qoreExports);
const qore$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: qore
}, [qoreExports]);
export {
  qore$1 as q
};
