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
var powerquery_1;
var hasRequiredPowerquery;
function requirePowerquery() {
  if (hasRequiredPowerquery) return powerquery_1;
  hasRequiredPowerquery = 1;
  powerquery_1 = powerquery2;
  powerquery2.displayName = "powerquery";
  powerquery2.aliases = [];
  function powerquery2(Prism) {
    Prism.languages.powerquery = {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: true,
        greedy: true
      },
      "quoted-identifier": {
        pattern: /#"(?:[^"\r\n]|"")*"(?!")/,
        greedy: true
      },
      string: {
        pattern: /(?:#!)?"(?:[^"\r\n]|"")*"(?!")/,
        greedy: true
      },
      constant: [
        /\bDay\.(?:Friday|Monday|Saturday|Sunday|Thursday|Tuesday|Wednesday)\b/,
        /\bTraceLevel\.(?:Critical|Error|Information|Verbose|Warning)\b/,
        /\bOccurrence\.(?:All|First|Last)\b/,
        /\bOrder\.(?:Ascending|Descending)\b/,
        /\bRoundingMode\.(?:AwayFromZero|Down|ToEven|TowardZero|Up)\b/,
        /\bMissingField\.(?:Error|Ignore|UseNull)\b/,
        /\bQuoteStyle\.(?:Csv|None)\b/,
        /\bJoinKind\.(?:FullOuter|Inner|LeftAnti|LeftOuter|RightAnti|RightOuter)\b/,
        /\bGroupKind\.(?:Global|Local)\b/,
        /\bExtraValues\.(?:Error|Ignore|List)\b/,
        /\bJoinAlgorithm\.(?:Dynamic|LeftHash|LeftIndex|PairwiseHash|RightHash|RightIndex|SortMerge)\b/,
        /\bJoinSide\.(?:Left|Right)\b/,
        /\bPrecision\.(?:Decimal|Double)\b/,
        /\bRelativePosition\.From(?:End|Start)\b/,
        /\bTextEncoding\.(?:Ascii|BigEndianUnicode|Unicode|Utf16|Utf8|Windows)\b/,
        /\b(?:Any|Binary|Date|DateTime|DateTimeZone|Duration|Function|Int16|Int32|Int64|Int8|List|Logical|None|Number|Record|Table|Text|Time)\.Type\b/,
        /\bnull\b/
      ],
      boolean: /\b(?:false|true)\b/,
      keyword: /\b(?:and|as|each|else|error|if|in|is|let|meta|not|nullable|optional|or|otherwise|section|shared|then|try|type)\b|#(?:binary|date|datetime|datetimezone|duration|infinity|nan|sections|shared|table|time)\b/,
      function: {
        pattern: /(^|[^#\w.])[a-z_][\w.]*(?=\s*\()/i,
        lookbehind: true
      },
      "data-type": {
        pattern: /\b(?:any|anynonnull|binary|date|datetime|datetimezone|duration|function|list|logical|none|number|record|table|text|time)\b/,
        alias: "class-name"
      },
      number: {
        pattern: /\b0x[\da-f]+\b|(?:[+-]?(?:\b\d+\.)?\b\d+|[+-]\.\d+|(^|[^.])\B\.\d+)(?:e[+-]?\d+)?\b/i,
        lookbehind: true
      },
      operator: /[-+*\/&?@^]|<(?:=>?|>)?|>=?|=>?|\.\.\.?/,
      punctuation: /[,;\[\](){}]/
    };
    Prism.languages.pq = Prism.languages["powerquery"];
    Prism.languages.mscript = Prism.languages["powerquery"];
  }
  return powerquery_1;
}
var powerqueryExports = requirePowerquery();
const powerquery = /* @__PURE__ */ getDefaultExportFromCjs(powerqueryExports);
const powerquery$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: powerquery
}, [powerqueryExports]);
export {
  powerquery$1 as p
};
