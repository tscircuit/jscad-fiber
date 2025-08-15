import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireScheme } from "./scheme-BIkXa0-K.js";
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
var racket_1;
var hasRequiredRacket;
function requireRacket() {
  if (hasRequiredRacket) return racket_1;
  hasRequiredRacket = 1;
  var refractorScheme = requireScheme();
  racket_1 = racket2;
  racket2.displayName = "racket";
  racket2.aliases = ["rkt"];
  function racket2(Prism) {
    Prism.register(refractorScheme);
    Prism.languages.racket = Prism.languages.extend("scheme", {
      "lambda-parameter": {
        // the racket lambda syntax is a lot more complex, so we won't even attempt to capture it.
        // this will just prevent false positives of the `function` pattern
        pattern: /([(\[]lambda\s+[(\[])[^()\[\]'\s]+/,
        lookbehind: true
      }
    });
    Prism.languages.insertBefore("racket", "string", {
      lang: {
        pattern: /^#lang.+/m,
        greedy: true,
        alias: "keyword"
      }
    });
    Prism.languages.rkt = Prism.languages.racket;
  }
  return racket_1;
}
var racketExports = requireRacket();
const racket = /* @__PURE__ */ getDefaultExportFromCjs(racketExports);
const racket$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: racket
}, [racketExports]);
export {
  racket$1 as r
};
