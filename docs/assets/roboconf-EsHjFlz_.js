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
var roboconf_1;
var hasRequiredRoboconf;
function requireRoboconf() {
  if (hasRequiredRoboconf) return roboconf_1;
  hasRequiredRoboconf = 1;
  roboconf_1 = roboconf2;
  roboconf2.displayName = "roboconf";
  roboconf2.aliases = [];
  function roboconf2(Prism) {
    Prism.languages.roboconf = {
      comment: /#.*/,
      keyword: {
        pattern: /(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/,
        lookbehind: true
      },
      component: {
        pattern: /[\w-]+(?=[ \t]*\{)/,
        alias: "variable"
      },
      property: /[\w.-]+(?=[ \t]*:)/,
      value: {
        pattern: /(=[ \t]*(?![ \t]))[^,;]+/,
        lookbehind: true,
        alias: "attr-value"
      },
      optional: {
        pattern: /\(optional\)/,
        alias: "builtin"
      },
      wildcard: {
        pattern: /(\.)\*/,
        lookbehind: true,
        alias: "operator"
      },
      punctuation: /[{},.;:=]/
    };
  }
  return roboconf_1;
}
var roboconfExports = requireRoboconf();
const roboconf = /* @__PURE__ */ getDefaultExportFromCjs(roboconfExports);
const roboconf$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: roboconf
}, [roboconfExports]);
export {
  roboconf$1 as r
};
