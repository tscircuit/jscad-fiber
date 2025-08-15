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
var dot_1;
var hasRequiredDot;
function requireDot() {
  if (hasRequiredDot) return dot_1;
  hasRequiredDot = 1;
  dot_1 = dot2;
  dot2.displayName = "dot";
  dot2.aliases = ["gv"];
  function dot2(Prism) {
    (function(Prism2) {
      var ID = "(?:" + [
        // an identifier
        /[a-zA-Z_\x80-\uFFFF][\w\x80-\uFFFF]*/.source,
        // a number
        /-?(?:\.\d+|\d+(?:\.\d*)?)/.source,
        // a double-quoted string
        /"[^"\\]*(?:\\[\s\S][^"\\]*)*"/.source,
        // HTML-like string
        /<(?:[^<>]|(?!<!--)<(?:[^<>"']|"[^"]*"|'[^']*')+>|<!--(?:[^-]|-(?!->))*-->)*>/.source
      ].join("|") + ")";
      var IDInside = {
        markup: {
          pattern: /(^<)[\s\S]+(?=>$)/,
          lookbehind: true,
          alias: ["language-markup", "language-html", "language-xml"],
          inside: Prism2.languages.markup
        }
      };
      function withID(source, flags) {
        return RegExp(
          source.replace(/<ID>/g, function() {
            return ID;
          }),
          flags
        );
      }
      Prism2.languages.dot = {
        comment: {
          pattern: /\/\/.*|\/\*[\s\S]*?\*\/|^#.*/m,
          greedy: true
        },
        "graph-name": {
          pattern: withID(
            /(\b(?:digraph|graph|subgraph)[ \t\r\n]+)<ID>/.source,
            "i"
          ),
          lookbehind: true,
          greedy: true,
          alias: "class-name",
          inside: IDInside
        },
        "attr-value": {
          pattern: withID(/(=[ \t\r\n]*)<ID>/.source),
          lookbehind: true,
          greedy: true,
          inside: IDInside
        },
        "attr-name": {
          pattern: withID(/([\[;, \t\r\n])<ID>(?=[ \t\r\n]*=)/.source),
          lookbehind: true,
          greedy: true,
          inside: IDInside
        },
        keyword: /\b(?:digraph|edge|graph|node|strict|subgraph)\b/i,
        "compass-point": {
          pattern: /(:[ \t\r\n]*)(?:[ewc_]|[ns][ew]?)(?![\w\x80-\uFFFF])/,
          lookbehind: true,
          alias: "builtin"
        },
        node: {
          pattern: withID(/(^|[^-.\w\x80-\uFFFF\\])<ID>/.source),
          lookbehind: true,
          greedy: true,
          inside: IDInside
        },
        operator: /[=:]|-[->]/,
        punctuation: /[\[\]{};,]/
      };
      Prism2.languages.gv = Prism2.languages.dot;
    })(Prism);
  }
  return dot_1;
}
var dotExports = requireDot();
const dot = /* @__PURE__ */ getDefaultExportFromCjs(dotExports);
const dot$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: dot
}, [dotExports]);
export {
  dot$1 as d
};
