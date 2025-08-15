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
var nasm_1;
var hasRequiredNasm;
function requireNasm() {
  if (hasRequiredNasm) return nasm_1;
  hasRequiredNasm = 1;
  nasm_1 = nasm2;
  nasm2.displayName = "nasm";
  nasm2.aliases = [];
  function nasm2(Prism) {
    Prism.languages.nasm = {
      comment: /;.*$/m,
      string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      label: {
        pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
        lookbehind: true,
        alias: "function"
      },
      keyword: [
        /\[?BITS (?:16|32|64)\]?/,
        {
          pattern: /(^\s*)section\s*[a-z.]+:?/im,
          lookbehind: true
        },
        /(?:extern|global)[^;\r\n]*/i,
        /(?:CPU|DEFAULT|FLOAT).*$/m
      ],
      register: {
        pattern: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|di|si|sp)|[cdefgs]s)\b/i,
        alias: "variable"
      },
      number: /(?:\b|(?=\$))(?:0[hx](?:\.[\da-f]+|[\da-f]+(?:\.[\da-f]+)?)(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,
      operator: /[\[\]*+\-\/%<>=&|$!]/
    };
  }
  return nasm_1;
}
var nasmExports = requireNasm();
const nasm = /* @__PURE__ */ getDefaultExportFromCjs(nasmExports);
const nasm$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: nasm
}, [nasmExports]);
export {
  nasm$1 as n
};
