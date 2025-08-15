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
var neon_1;
var hasRequiredNeon;
function requireNeon() {
  if (hasRequiredNeon) return neon_1;
  hasRequiredNeon = 1;
  neon_1 = neon2;
  neon2.displayName = "neon";
  neon2.aliases = [];
  function neon2(Prism) {
    Prism.languages.neon = {
      comment: {
        pattern: /#.*/,
        greedy: true
      },
      datetime: {
        pattern: /(^|[[{(=:,\s])\d\d\d\d-\d\d?-\d\d?(?:(?:[Tt]| +)\d\d?:\d\d:\d\d(?:\.\d*)? *(?:Z|[-+]\d\d?(?::?\d\d)?)?)?(?=$|[\]}),\s])/,
        lookbehind: true,
        alias: "number"
      },
      key: {
        pattern: /(^|[[{(,\s])[^,:=[\]{}()'"\s]+(?=\s*:(?:$|[\]}),\s])|\s*=)/,
        lookbehind: true,
        alias: "atrule"
      },
      number: {
        pattern: /(^|[[{(=:,\s])[+-]?(?:0x[\da-fA-F]+|0o[0-7]+|0b[01]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:[eE][+-]?\d+)?)(?=$|[\]}),:=\s])/,
        lookbehind: true
      },
      boolean: {
        pattern: /(^|[[{(=:,\s])(?:false|no|true|yes)(?=$|[\]}),:=\s])/i,
        lookbehind: true
      },
      null: {
        pattern: /(^|[[{(=:,\s])(?:null)(?=$|[\]}),:=\s])/i,
        lookbehind: true,
        alias: "keyword"
      },
      string: {
        pattern: /(^|[[{(=:,\s])(?:('''|""")\r?\n(?:(?:[^\r\n]|\r?\n(?![\t ]*\2))*\r?\n)?[\t ]*\2|'[^'\r\n]*'|"(?:\\.|[^\\"\r\n])*")/,
        lookbehind: true,
        greedy: true
      },
      literal: {
        pattern: /(^|[[{(=:,\s])(?:[^#"',:=[\]{}()\s`-]|[:-][^"',=[\]{}()\s])(?:[^,:=\]})(\s]|:(?![\s,\]})]|$)|[ \t]+[^#,:=\]})(\s])*/,
        lookbehind: true,
        alias: "string"
      },
      punctuation: /[,:=[\]{}()-]/
    };
  }
  return neon_1;
}
var neonExports = requireNeon();
const neon = /* @__PURE__ */ getDefaultExportFromCjs(neonExports);
const neon$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: neon
}, [neonExports]);
export {
  neon$1 as n
};
