import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireHaskell } from "./haskell-JxV6F6a2.js";
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
var idris_1;
var hasRequiredIdris;
function requireIdris() {
  if (hasRequiredIdris) return idris_1;
  hasRequiredIdris = 1;
  var refractorHaskell = requireHaskell();
  idris_1 = idris2;
  idris2.displayName = "idris";
  idris2.aliases = ["idr"];
  function idris2(Prism) {
    Prism.register(refractorHaskell);
    Prism.languages.idris = Prism.languages.extend("haskell", {
      comment: {
        pattern: /(?:(?:--|\|\|\|).*$|\{-[\s\S]*?-\})/m
      },
      keyword: /\b(?:Type|case|class|codata|constructor|corecord|data|do|dsl|else|export|if|implementation|implicit|import|impossible|in|infix|infixl|infixr|instance|interface|let|module|mutual|namespace|of|parameters|partial|postulate|private|proof|public|quoteGoal|record|rewrite|syntax|then|total|using|where|with)\b/,
      builtin: void 0
    });
    Prism.languages.insertBefore("idris", "keyword", {
      "import-statement": {
        pattern: /(^\s*import\s+)(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*/m,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      }
    });
    Prism.languages.idr = Prism.languages.idris;
  }
  return idris_1;
}
var idrisExports = requireIdris();
const idris = /* @__PURE__ */ getDefaultExportFromCjs(idrisExports);
const idris$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: idris
}, [idrisExports]);
export {
  idris$1 as i
};
