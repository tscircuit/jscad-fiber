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
var gedcom_1;
var hasRequiredGedcom;
function requireGedcom() {
  if (hasRequiredGedcom) return gedcom_1;
  hasRequiredGedcom = 1;
  gedcom_1 = gedcom2;
  gedcom2.displayName = "gedcom";
  gedcom2.aliases = [];
  function gedcom2(Prism) {
    Prism.languages.gedcom = {
      "line-value": {
        // Preceded by level, optional pointer, and tag
        pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,
        lookbehind: true,
        inside: {
          pointer: {
            pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
            alias: "variable"
          }
        }
      },
      tag: {
        // Preceded by level and optional pointer
        pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
        lookbehind: true,
        alias: "string"
      },
      level: {
        pattern: /(^[\t ]*)\d+/m,
        lookbehind: true,
        alias: "number"
      },
      pointer: {
        pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
        alias: "variable"
      }
    };
  }
  return gedcom_1;
}
var gedcomExports = requireGedcom();
const gedcom = /* @__PURE__ */ getDefaultExportFromCjs(gedcomExports);
const gedcom$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: gedcom
}, [gedcomExports]);
export {
  gedcom$1 as g
};
