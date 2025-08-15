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
var maxscript_1;
var hasRequiredMaxscript;
function requireMaxscript() {
  if (hasRequiredMaxscript) return maxscript_1;
  hasRequiredMaxscript = 1;
  maxscript_1 = maxscript2;
  maxscript2.displayName = "maxscript";
  maxscript2.aliases = [];
  function maxscript2(Prism) {
    (function(Prism2) {
      var keywords = /\b(?:about|and|animate|as|at|attributes|by|case|catch|collect|continue|coordsys|do|else|exit|fn|for|from|function|global|if|in|local|macroscript|mapped|max|not|of|off|on|or|parameters|persistent|plugin|rcmenu|return|rollout|set|struct|then|throw|to|tool|try|undo|utility|when|where|while|with)\b/i;
      Prism2.languages.maxscript = {
        comment: {
          pattern: /\/\*[\s\S]*?(?:\*\/|$)|--.*/,
          greedy: true
        },
        string: {
          pattern: /(^|[^"\\@])(?:"(?:[^"\\]|\\[\s\S])*"|@"[^"]*")/,
          lookbehind: true,
          greedy: true
        },
        path: {
          pattern: /\$(?:[\w/\\.*?]|'[^']*')*/,
          greedy: true,
          alias: "string"
        },
        "function-call": {
          pattern: RegExp(
            "((?:" + // start of line
            (/^/.source + "|" + // operators and other language constructs
            /[;=<>+\-*/^({\[]/.source + "|" + // keywords as part of statements
            /\b(?:and|by|case|catch|collect|do|else|if|in|not|or|return|then|to|try|where|while|with)\b/.source) + ")[ 	]*)(?!" + keywords.source + ")" + /[a-z_]\w*\b/.source + "(?=[ 	]*(?:" + // variable
            ("(?!" + keywords.source + ")" + /[a-z_]/.source + "|" + // number
            /\d|-\.?\d/.source + "|" + // other expressions or literals
            /[({'"$@#?]/.source) + "))",
            "im"
          ),
          lookbehind: true,
          greedy: true,
          alias: "function"
        },
        "function-definition": {
          pattern: /(\b(?:fn|function)\s+)\w+\b/i,
          lookbehind: true,
          alias: "function"
        },
        argument: {
          pattern: /\b[a-z_]\w*(?=:)/i,
          alias: "attr-name"
        },
        keyword: keywords,
        boolean: /\b(?:false|true)\b/,
        time: {
          pattern: /(^|[^\w.])(?:(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[eEdD][+-]\d+|[LP])?[msft])+|\d+:\d+(?:\.\d*)?)(?![\w.:])/,
          lookbehind: true,
          alias: "number"
        },
        number: [
          {
            pattern: /(^|[^\w.])(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[eEdD][+-]\d+|[LP])?|0x[a-fA-F0-9]+)(?![\w.:])/,
            lookbehind: true
          },
          /\b(?:e|pi)\b/
        ],
        constant: /\b(?:dontcollect|ok|silentValue|undefined|unsupplied)\b/,
        color: {
          pattern: /\b(?:black|blue|brown|gray|green|orange|red|white|yellow)\b/i,
          alias: "constant"
        },
        operator: /[-+*/<>=!]=?|[&^?]|#(?!\()/,
        punctuation: /[()\[\]{}.:,;]|#(?=\()|\\$/m
      };
    })(Prism);
  }
  return maxscript_1;
}
var maxscriptExports = requireMaxscript();
const maxscript = /* @__PURE__ */ getDefaultExportFromCjs(maxscriptExports);
const maxscript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: maxscript
}, [maxscriptExports]);
export {
  maxscript$1 as m
};
