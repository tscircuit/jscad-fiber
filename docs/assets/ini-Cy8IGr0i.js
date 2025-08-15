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
var ini_1;
var hasRequiredIni;
function requireIni() {
  if (hasRequiredIni) return ini_1;
  hasRequiredIni = 1;
  ini_1 = ini2;
  ini2.displayName = "ini";
  ini2.aliases = [];
  function ini2(Prism) {
    Prism.languages.ini = {
      /**
       * The component mimics the behavior of the Win32 API parser.
       *
       * @see {@link https://github.com/PrismJS/prism/issues/2775#issuecomment-787477723}
       */
      comment: {
        pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m,
        lookbehind: true
      },
      section: {
        pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
        lookbehind: true,
        inside: {
          "section-name": {
            pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
            lookbehind: true,
            alias: "selector"
          },
          punctuation: /\[|\]/
        }
      },
      key: {
        pattern: /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
        lookbehind: true,
        alias: "attr-name"
      },
      value: {
        pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
        lookbehind: true,
        alias: "attr-value",
        inside: {
          "inner-value": {
            pattern: /^("|').+(?=\1$)/,
            lookbehind: true
          }
        }
      },
      punctuation: /=/
    };
  }
  return ini_1;
}
var iniExports = requireIni();
const ini = /* @__PURE__ */ getDefaultExportFromCjs(iniExports);
const ini$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: ini
}, [iniExports]);
export {
  ini$1 as i
};
