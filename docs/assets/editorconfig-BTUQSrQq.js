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
var editorconfig_1;
var hasRequiredEditorconfig;
function requireEditorconfig() {
  if (hasRequiredEditorconfig) return editorconfig_1;
  hasRequiredEditorconfig = 1;
  editorconfig_1 = editorconfig2;
  editorconfig2.displayName = "editorconfig";
  editorconfig2.aliases = [];
  function editorconfig2(Prism) {
    Prism.languages.editorconfig = {
      // https://editorconfig-specification.readthedocs.io
      comment: /[;#].*/,
      section: {
        pattern: /(^[ \t]*)\[.+\]/m,
        lookbehind: true,
        alias: "selector",
        inside: {
          regex: /\\\\[\[\]{},!?.*]/,
          // Escape special characters with '\\'
          operator: /[!?]|\.\.|\*{1,2}/,
          punctuation: /[\[\]{},]/
        }
      },
      key: {
        pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,
        lookbehind: true,
        alias: "attr-name"
      },
      value: {
        pattern: /=.*/,
        alias: "attr-value",
        inside: {
          punctuation: /^=/
        }
      }
    };
  }
  return editorconfig_1;
}
var editorconfigExports = requireEditorconfig();
const editorconfig = /* @__PURE__ */ getDefaultExportFromCjs(editorconfigExports);
const editorconfig$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: editorconfig
}, [editorconfigExports]);
export {
  editorconfig$1 as e
};
