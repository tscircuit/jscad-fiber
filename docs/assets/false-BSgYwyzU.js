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
var _false$2;
var hasRequired_false;
function require_false() {
  if (hasRequired_false) return _false$2;
  hasRequired_false = 1;
  _false$2 = $false;
  $false.displayName = "$false";
  $false.aliases = [];
  function $false(Prism) {
    (function(Prism2) {
      Prism2.languages["false"] = {
        comment: {
          pattern: /\{[^}]*\}/
        },
        string: {
          pattern: /"[^"]*"/,
          greedy: true
        },
        "character-code": {
          pattern: /'(?:[^\r]|\r\n?)/,
          alias: "number"
        },
        "assembler-code": {
          pattern: /\d+`/,
          alias: "important"
        },
        number: /\d+/,
        operator: /[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,
        punctuation: /\[|\]/,
        variable: /[a-z]/,
        "non-standard": {
          pattern: /[()<BDO®]/,
          alias: "bold"
        }
      };
    })(Prism);
  }
  return _false$2;
}
var _falseExports = require_false();
const _false = /* @__PURE__ */ getDefaultExportFromCjs(_falseExports);
const _false$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: _false
}, [_falseExports]);
export {
  _false$1 as _
};
