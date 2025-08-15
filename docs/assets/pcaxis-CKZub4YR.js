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
var pcaxis_1;
var hasRequiredPcaxis;
function requirePcaxis() {
  if (hasRequiredPcaxis) return pcaxis_1;
  hasRequiredPcaxis = 1;
  pcaxis_1 = pcaxis2;
  pcaxis2.displayName = "pcaxis";
  pcaxis2.aliases = ["px"];
  function pcaxis2(Prism) {
    Prism.languages.pcaxis = {
      string: /"[^"]*"/,
      keyword: {
        pattern: /((?:^|;)\s*)[-A-Z\d]+(?:\s*\[[-\w]+\])?(?:\s*\("[^"]*"(?:,\s*"[^"]*")*\))?(?=\s*=)/,
        lookbehind: true,
        greedy: true,
        inside: {
          keyword: /^[-A-Z\d]+/,
          language: {
            pattern: /^(\s*)\[[-\w]+\]/,
            lookbehind: true,
            inside: {
              punctuation: /^\[|\]$/,
              property: /[-\w]+/
            }
          },
          "sub-key": {
            pattern: /^(\s*)\S[\s\S]*/,
            lookbehind: true,
            inside: {
              parameter: {
                pattern: /"[^"]*"/,
                alias: "property"
              },
              punctuation: /^\(|\)$|,/
            }
          }
        }
      },
      operator: /=/,
      tlist: {
        pattern: /TLIST\s*\(\s*\w+(?:(?:\s*,\s*"[^"]*")+|\s*,\s*"[^"]*"-"[^"]*")?\s*\)/,
        greedy: true,
        inside: {
          function: /^TLIST/,
          property: {
            pattern: /^(\s*\(\s*)\w+/,
            lookbehind: true
          },
          string: /"[^"]*"/,
          punctuation: /[(),]/,
          operator: /-/
        }
      },
      punctuation: /[;,]/,
      number: {
        pattern: /(^|\s)\d+(?:\.\d+)?(?!\S)/,
        lookbehind: true
      },
      boolean: /NO|YES/
    };
    Prism.languages.px = Prism.languages.pcaxis;
  }
  return pcaxis_1;
}
var pcaxisExports = requirePcaxis();
const pcaxis = /* @__PURE__ */ getDefaultExportFromCjs(pcaxisExports);
const pcaxis$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: pcaxis
}, [pcaxisExports]);
export {
  pcaxis$1 as p
};
