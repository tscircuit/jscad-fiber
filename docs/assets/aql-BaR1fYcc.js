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
var aql_1;
var hasRequiredAql;
function requireAql() {
  if (hasRequiredAql) return aql_1;
  hasRequiredAql = 1;
  aql_1 = aql2;
  aql2.displayName = "aql";
  aql2.aliases = [];
  function aql2(Prism) {
    Prism.languages.aql = {
      comment: /\/\/.*|\/\*[\s\S]*?\*\//,
      property: {
        pattern: /([{,]\s*)(?:(?!\d)\w+|(["'´`])(?:(?!\2)[^\\\r\n]|\\.)*\2)(?=\s*:)/,
        lookbehind: true,
        greedy: true
      },
      string: {
        pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\.)*\1/,
        greedy: true
      },
      identifier: {
        pattern: /([´`])(?:(?!\1)[^\\\r\n]|\\.)*\1/,
        greedy: true
      },
      variable: /@@?\w+/,
      keyword: [
        {
          pattern: /(\bWITH\s+)COUNT(?=\s+INTO\b)/i,
          lookbehind: true
        },
        /\b(?:AGGREGATE|ALL|AND|ANY|ASC|COLLECT|DESC|DISTINCT|FILTER|FOR|GRAPH|IN|INBOUND|INSERT|INTO|K_PATHS|K_SHORTEST_PATHS|LET|LIKE|LIMIT|NONE|NOT|NULL|OR|OUTBOUND|REMOVE|REPLACE|RETURN|SHORTEST_PATH|SORT|UPDATE|UPSERT|WINDOW|WITH)\b/i,
        // pseudo keywords get a lookbehind to avoid false positives
        {
          pattern: /(^|[^\w.[])(?:KEEP|PRUNE|SEARCH|TO)\b/i,
          lookbehind: true
        },
        {
          pattern: /(^|[^\w.[])(?:CURRENT|NEW|OLD)\b/,
          lookbehind: true
        },
        {
          pattern: /\bOPTIONS(?=\s*\{)/i
        }
      ],
      function: /\b(?!\d)\w+(?=\s*\()/,
      boolean: /\b(?:false|true)\b/i,
      range: {
        pattern: /\.\./,
        alias: "operator"
      },
      number: [
        /\b0b[01]+/i,
        /\b0x[0-9a-f]+/i,
        /(?:\B\.\d+|\b(?:0|[1-9]\d*)(?:\.\d+)?)(?:e[+-]?\d+)?/i
      ],
      operator: /\*{2,}|[=!]~|[!=<>]=?|&&|\|\||[-+*/%]/,
      punctuation: /::|[?.:,;()[\]{}]/
    };
  }
  return aql_1;
}
var aqlExports = requireAql();
const aql = /* @__PURE__ */ getDefaultExportFromCjs(aqlExports);
const aql$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: aql
}, [aqlExports]);
export {
  aql$1 as a
};
