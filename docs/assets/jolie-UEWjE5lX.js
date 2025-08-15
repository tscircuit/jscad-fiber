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
var jolie_1;
var hasRequiredJolie;
function requireJolie() {
  if (hasRequiredJolie) return jolie_1;
  hasRequiredJolie = 1;
  jolie_1 = jolie2;
  jolie2.displayName = "jolie";
  jolie2.aliases = [];
  function jolie2(Prism) {
    Prism.languages.jolie = Prism.languages.extend("clike", {
      string: {
        pattern: /(^|[^\\])"(?:\\[\s\S]|[^"\\])*"/,
        lookbehind: true,
        greedy: true
      },
      "class-name": {
        pattern: /((?:\b(?:as|courier|embed|in|inputPort|outputPort|service)\b|@)[ \t]*)\w+/,
        lookbehind: true
      },
      keyword: /\b(?:as|cH|comp|concurrent|constants|courier|cset|csets|default|define|else|embed|embedded|execution|exit|extender|for|foreach|forward|from|global|if|import|in|include|init|inputPort|install|instanceof|interface|is_defined|linkIn|linkOut|main|new|nullProcess|outputPort|over|private|provide|public|scope|sequential|service|single|spawn|synchronized|this|throw|throws|type|undef|until|while|with)\b/,
      function: /\b[a-z_]\w*(?=[ \t]*[@(])/i,
      number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?l?/i,
      operator: /-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[?\/%^@|]/,
      punctuation: /[()[\]{},;.:]/,
      builtin: /\b(?:Byte|any|bool|char|double|enum|float|int|length|long|ranges|regex|string|undefined|void)\b/
    });
    Prism.languages.insertBefore("jolie", "keyword", {
      aggregates: {
        pattern: /(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,
        lookbehind: true,
        inside: {
          keyword: /\bwith\b/,
          "class-name": /\w+/,
          punctuation: /,/
        }
      },
      redirects: {
        pattern: /(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,
        lookbehind: true,
        inside: {
          punctuation: /,/,
          "class-name": /\w+/,
          operator: /=>/
        }
      },
      property: {
        pattern: /\b(?:Aggregates|[Ii]nterfaces|Java|Javascript|Jolie|[Ll]ocation|OneWay|[Pp]rotocol|Redirects|RequestResponse)\b(?=[ \t]*:)/
      }
    });
  }
  return jolie_1;
}
var jolieExports = requireJolie();
const jolie = /* @__PURE__ */ getDefaultExportFromCjs(jolieExports);
const jolie$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jolie
}, [jolieExports]);
export {
  jolie$1 as j
};
