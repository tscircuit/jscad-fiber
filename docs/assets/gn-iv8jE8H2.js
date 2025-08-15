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
var gn_1;
var hasRequiredGn;
function requireGn() {
  if (hasRequiredGn) return gn_1;
  hasRequiredGn = 1;
  gn_1 = gn2;
  gn2.displayName = "gn";
  gn2.aliases = ["gni"];
  function gn2(Prism) {
    Prism.languages.gn = {
      comment: {
        pattern: /#.*/,
        greedy: true
      },
      "string-literal": {
        pattern: /(^|[^\\"])"(?:[^\r\n"\\]|\\.)*"/,
        lookbehind: true,
        greedy: true,
        inside: {
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:\{[\s\S]*?\}|[a-zA-Z_]\w*|0x[a-fA-F0-9]{2})/,
            lookbehind: true,
            inside: {
              number: /^\$0x[\s\S]{2}$/,
              variable: /^\$\w+$/,
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              expression: {
                pattern: /[\s\S]+/,
                inside: null
                // see below
              }
            }
          },
          string: /[\s\S]+/
        }
      },
      keyword: /\b(?:else|if)\b/,
      boolean: /\b(?:false|true)\b/,
      "builtin-function": {
        // a few functions get special highlighting to improve readability
        pattern: /\b(?:assert|defined|foreach|import|pool|print|template|tool|toolchain)(?=\s*\()/i,
        alias: "keyword"
      },
      function: /\b[a-z_]\w*(?=\s*\()/i,
      constant: /\b(?:current_cpu|current_os|current_toolchain|default_toolchain|host_cpu|host_os|root_build_dir|root_gen_dir|root_out_dir|target_cpu|target_gen_dir|target_os|target_out_dir)\b/,
      number: /-?\b\d+\b/,
      operator: /[-+!=<>]=?|&&|\|\|/,
      punctuation: /[(){}[\],.]/
    };
    Prism.languages.gn["string-literal"].inside["interpolation"].inside["expression"].inside = Prism.languages.gn;
    Prism.languages.gni = Prism.languages.gn;
  }
  return gn_1;
}
var gnExports = requireGn();
const gn = /* @__PURE__ */ getDefaultExportFromCjs(gnExports);
const gn$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: gn
}, [gnExports]);
export {
  gn$1 as g
};
