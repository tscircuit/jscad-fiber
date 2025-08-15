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
var kusto_1;
var hasRequiredKusto;
function requireKusto() {
  if (hasRequiredKusto) return kusto_1;
  hasRequiredKusto = 1;
  kusto_1 = kusto2;
  kusto2.displayName = "kusto";
  kusto2.aliases = [];
  function kusto2(Prism) {
    Prism.languages.kusto = {
      comment: {
        pattern: /\/\/.*/,
        greedy: true
      },
      string: {
        pattern: /```[\s\S]*?```|[hH]?(?:"(?:[^\r\n\\"]|\\.)*"|'(?:[^\r\n\\']|\\.)*'|@(?:"[^\r\n"]*"|'[^\r\n']*'))/,
        greedy: true
      },
      verb: {
        pattern: /(\|\s*)[a-z][\w-]*/i,
        lookbehind: true,
        alias: "keyword"
      },
      command: {
        pattern: /\.[a-z][a-z\d-]*\b/,
        alias: "keyword"
      },
      "class-name": /\b(?:bool|datetime|decimal|dynamic|guid|int|long|real|string|timespan)\b/,
      keyword: /\b(?:access|alias|and|anti|as|asc|auto|between|by|(?:contains|(?:ends|starts)with|has(?:perfix|suffix)?)(?:_cs)?|database|declare|desc|external|from|fullouter|has_all|in|ingestion|inline|inner|innerunique|into|(?:left|right)(?:anti(?:semi)?|inner|outer|semi)?|let|like|local|not|of|on|or|pattern|print|query_parameters|range|restrict|schema|set|step|table|tables|to|view|where|with|matches\s+regex|nulls\s+(?:first|last))(?![\w-])/,
      boolean: /\b(?:false|null|true)\b/,
      function: /\b[a-z_]\w*(?=\s*\()/,
      datetime: [
        {
          // RFC 822 + RFC 850
          pattern: /\b(?:(?:Fri|Friday|Mon|Monday|Sat|Saturday|Sun|Sunday|Thu|Thursday|Tue|Tuesday|Wed|Wednesday)\s*,\s*)?\d{1,2}(?:\s+|-)(?:Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)(?:\s+|-)\d{2}\s+\d{2}:\d{2}(?::\d{2})?(?:\s*(?:\b(?:[A-Z]|(?:[ECMT][DS]|GM|U)T)|[+-]\d{4}))?\b/,
          alias: "number"
        },
        {
          // ISO 8601
          pattern: /[+-]?\b(?:\d{4}-\d{2}-\d{2}(?:[ T]\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)?|\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)Z?/,
          alias: "number"
        }
      ],
      number: /\b(?:0x[0-9A-Fa-f]+|\d+(?:\.\d+)?(?:[Ee][+-]?\d+)?)(?:(?:min|sec|[mnµ]s|[dhms]|microsecond|tick)\b)?|[+-]?\binf\b/,
      operator: /=>|[!=]~|[!=<>]=?|[-+*/%|]|\.\./,
      punctuation: /[()\[\]{},;.:]/
    };
  }
  return kusto_1;
}
var kustoExports = requireKusto();
const kusto = /* @__PURE__ */ getDefaultExportFromCjs(kustoExports);
const kusto$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: kusto
}, [kustoExports]);
export {
  kusto$1 as k
};
