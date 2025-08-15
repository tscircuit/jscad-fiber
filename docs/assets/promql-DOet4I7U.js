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
var promql_1;
var hasRequiredPromql;
function requirePromql() {
  if (hasRequiredPromql) return promql_1;
  hasRequiredPromql = 1;
  promql_1 = promql2;
  promql2.displayName = "promql";
  promql2.aliases = [];
  function promql2(Prism) {
    (function(Prism2) {
      var aggregations = [
        "sum",
        "min",
        "max",
        "avg",
        "group",
        "stddev",
        "stdvar",
        "count",
        "count_values",
        "bottomk",
        "topk",
        "quantile"
      ];
      var vectorMatching = [
        "on",
        "ignoring",
        "group_right",
        "group_left",
        "by",
        "without"
      ];
      var offsetModifier = ["offset"];
      var keywords = aggregations.concat(vectorMatching, offsetModifier);
      Prism2.languages.promql = {
        comment: {
          pattern: /(^[ \t]*)#.*/m,
          lookbehind: true
        },
        "vector-match": {
          // Match the comma-separated label lists inside vector matching:
          pattern: new RegExp(
            "((?:" + vectorMatching.join("|") + ")\\s*)\\([^)]*\\)"
          ),
          lookbehind: true,
          inside: {
            "label-key": {
              pattern: /\b[^,]+\b/,
              alias: "attr-name"
            },
            punctuation: /[(),]/
          }
        },
        "context-labels": {
          pattern: /\{[^{}]*\}/,
          inside: {
            "label-key": {
              pattern: /\b[a-z_]\w*(?=\s*(?:=|![=~]))/,
              alias: "attr-name"
            },
            "label-value": {
              pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
              greedy: true,
              alias: "attr-value"
            },
            punctuation: /\{|\}|=~?|![=~]|,/
          }
        },
        "context-range": [
          {
            pattern: /\[[\w\s:]+\]/,
            // [1m]
            inside: {
              punctuation: /\[|\]|:/,
              "range-duration": {
                pattern: /\b(?:\d+(?:[smhdwy]|ms))+\b/i,
                alias: "number"
              }
            }
          },
          {
            pattern: /(\boffset\s+)\w+/,
            // offset 1m
            lookbehind: true,
            inside: {
              "range-duration": {
                pattern: /\b(?:\d+(?:[smhdwy]|ms))+\b/i,
                alias: "number"
              }
            }
          }
        ],
        keyword: new RegExp("\\b(?:" + keywords.join("|") + ")\\b", "i"),
        function: /\b[a-z_]\w*(?=\s*\()/i,
        number: /[-+]?(?:(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[-+]?\d+)?\b|\b(?:0x[0-9a-f]+|nan|inf)\b)/i,
        operator: /[\^*/%+-]|==|!=|<=|<|>=|>|\b(?:and|or|unless)\b/i,
        punctuation: /[{};()`,.[\]]/
      };
    })(Prism);
  }
  return promql_1;
}
var promqlExports = requirePromql();
const promql = /* @__PURE__ */ getDefaultExportFromCjs(promqlExports);
const promql$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: promql
}, [promqlExports]);
export {
  promql$1 as p
};
