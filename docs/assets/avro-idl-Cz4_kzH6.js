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
var avroIdl_1;
var hasRequiredAvroIdl;
function requireAvroIdl() {
  if (hasRequiredAvroIdl) return avroIdl_1;
  hasRequiredAvroIdl = 1;
  avroIdl_1 = avroIdl2;
  avroIdl2.displayName = "avroIdl";
  avroIdl2.aliases = [];
  function avroIdl2(Prism) {
    Prism.languages["avro-idl"] = {
      comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
        greedy: true
      },
      string: {
        pattern: /(^|[^\\])"(?:[^\r\n"\\]|\\.)*"/,
        lookbehind: true,
        greedy: true
      },
      annotation: {
        pattern: /@(?:[$\w.-]|`[^\r\n`]+`)+/,
        greedy: true,
        alias: "function"
      },
      "function-identifier": {
        pattern: /`[^\r\n`]+`(?=\s*\()/,
        greedy: true,
        alias: "function"
      },
      identifier: {
        pattern: /`[^\r\n`]+`/,
        greedy: true
      },
      "class-name": {
        pattern: /(\b(?:enum|error|protocol|record|throws)\b\s+)[$\w]+/,
        lookbehind: true,
        greedy: true
      },
      keyword: /\b(?:array|boolean|bytes|date|decimal|double|enum|error|false|fixed|float|idl|import|int|local_timestamp_ms|long|map|null|oneway|protocol|record|schema|string|throws|time_ms|timestamp_ms|true|union|uuid|void)\b/,
      function: /\b[a-z_]\w*(?=\s*\()/i,
      number: [
        {
          pattern: /(^|[^\w.])-?(?:(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|0x(?:[a-f0-9]+(?:\.[a-f0-9]*)?|\.[a-f0-9]+)(?:p[+-]?\d+)?)[dfl]?(?![\w.])/i,
          lookbehind: true
        },
        /-?\b(?:Infinity|NaN)\b/
      ],
      operator: /=/,
      punctuation: /[()\[\]{}<>.:,;-]/
    };
    Prism.languages.avdl = Prism.languages["avro-idl"];
  }
  return avroIdl_1;
}
var avroIdlExports = requireAvroIdl();
const avroIdl = /* @__PURE__ */ getDefaultExportFromCjs(avroIdlExports);
const avroIdl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: avroIdl
}, [avroIdlExports]);
export {
  avroIdl$1 as a
};
