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
var goModule_1;
var hasRequiredGoModule;
function requireGoModule() {
  if (hasRequiredGoModule) return goModule_1;
  hasRequiredGoModule = 1;
  goModule_1 = goModule2;
  goModule2.displayName = "goModule";
  goModule2.aliases = [];
  function goModule2(Prism) {
    Prism.languages["go-mod"] = Prism.languages["go-module"] = {
      comment: {
        pattern: /\/\/.*/,
        greedy: true
      },
      version: {
        pattern: /(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,
        lookbehind: true,
        alias: "number"
      },
      "go-version": {
        pattern: /((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,
        lookbehind: true,
        alias: "number"
      },
      keyword: {
        pattern: /^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,
        lookbehind: true
      },
      operator: /=>/,
      punctuation: /[()[\],]/
    };
  }
  return goModule_1;
}
var goModuleExports = requireGoModule();
const goModule = /* @__PURE__ */ getDefaultExportFromCjs(goModuleExports);
const goModule$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: goModule
}, [goModuleExports]);
export {
  goModule$1 as g
};
