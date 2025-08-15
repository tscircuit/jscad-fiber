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
var processing_1;
var hasRequiredProcessing;
function requireProcessing() {
  if (hasRequiredProcessing) return processing_1;
  hasRequiredProcessing = 1;
  processing_1 = processing2;
  processing2.displayName = "processing";
  processing2.aliases = [];
  function processing2(Prism) {
    Prism.languages.processing = Prism.languages.extend("clike", {
      keyword: /\b(?:break|case|catch|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
      // Spaces are allowed between function name and parenthesis
      function: /\b\w+(?=\s*\()/,
      operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
    });
    Prism.languages.insertBefore("processing", "number", {
      // Special case: XML is a type
      constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
      type: {
        pattern: /\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,
        alias: "class-name"
      }
    });
  }
  return processing_1;
}
var processingExports = requireProcessing();
const processing = /* @__PURE__ */ getDefaultExportFromCjs(processingExports);
const processing$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: processing
}, [processingExports]);
export {
  processing$1 as p
};
