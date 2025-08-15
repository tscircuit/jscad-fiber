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
var ignore_1;
var hasRequiredIgnore;
function requireIgnore() {
  if (hasRequiredIgnore) return ignore_1;
  hasRequiredIgnore = 1;
  ignore_1 = ignore2;
  ignore2.displayName = "ignore";
  ignore2.aliases = ["gitignore", "hgignore", "npmignore"];
  function ignore2(Prism) {
    (function(Prism2) {
      Prism2.languages.ignore = {
        // https://git-scm.com/docs/gitignore
        comment: /^#.*/m,
        entry: {
          pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
          alias: "string",
          inside: {
            operator: /^!|\*\*?|\?/,
            regex: {
              pattern: /(^|[^\\])\[[^\[\]]*\]/,
              lookbehind: true
            },
            punctuation: /\//
          }
        }
      };
      Prism2.languages.gitignore = Prism2.languages.ignore;
      Prism2.languages.hgignore = Prism2.languages.ignore;
      Prism2.languages.npmignore = Prism2.languages.ignore;
    })(Prism);
  }
  return ignore_1;
}
var ignoreExports = requireIgnore();
const ignore = /* @__PURE__ */ getDefaultExportFromCjs(ignoreExports);
const ignore$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: ignore
}, [ignoreExports]);
export {
  ignore$1 as i
};
