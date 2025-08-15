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
var actionscript_1;
var hasRequiredActionscript;
function requireActionscript() {
  if (hasRequiredActionscript) return actionscript_1;
  hasRequiredActionscript = 1;
  actionscript_1 = actionscript2;
  actionscript2.displayName = "actionscript";
  actionscript2.aliases = [];
  function actionscript2(Prism) {
    Prism.languages.actionscript = Prism.languages.extend("javascript", {
      keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
      operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
    });
    Prism.languages.actionscript["class-name"].alias = "function";
    delete Prism.languages.actionscript["parameter"];
    delete Prism.languages.actionscript["literal-property"];
    if (Prism.languages.markup) {
      Prism.languages.insertBefore("actionscript", "string", {
        xml: {
          pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
          lookbehind: true,
          inside: Prism.languages.markup
        }
      });
    }
  }
  return actionscript_1;
}
var actionscriptExports = requireActionscript();
const actionscript = /* @__PURE__ */ getDefaultExportFromCjs(actionscriptExports);
const actionscript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: actionscript
}, [actionscriptExports]);
export {
  actionscript$1 as a
};
