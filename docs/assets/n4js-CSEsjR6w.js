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
var n4js_1;
var hasRequiredN4js;
function requireN4js() {
  if (hasRequiredN4js) return n4js_1;
  hasRequiredN4js = 1;
  n4js_1 = n4js2;
  n4js2.displayName = "n4js";
  n4js2.aliases = ["n4jsd"];
  function n4js2(Prism) {
    Prism.languages.n4js = Prism.languages.extend("javascript", {
      // Keywords from N4JS language spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html
      keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
    });
    Prism.languages.insertBefore("n4js", "constant", {
      // Annotations in N4JS spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html#_annotations
      annotation: {
        pattern: /@+\w+/,
        alias: "operator"
      }
    });
    Prism.languages.n4jsd = Prism.languages.n4js;
  }
  return n4js_1;
}
var n4jsExports = requireN4js();
const n4js = /* @__PURE__ */ getDefaultExportFromCjs(n4jsExports);
const n4js$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: n4js
}, [n4jsExports]);
export {
  n4js$1 as n
};
