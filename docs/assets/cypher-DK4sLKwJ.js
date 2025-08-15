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
var cypher_1;
var hasRequiredCypher;
function requireCypher() {
  if (hasRequiredCypher) return cypher_1;
  hasRequiredCypher = 1;
  cypher_1 = cypher2;
  cypher2.displayName = "cypher";
  cypher2.aliases = [];
  function cypher2(Prism) {
    Prism.languages.cypher = {
      // https://neo4j.com/docs/cypher-manual/current/syntax/comments/
      comment: /\/\/.*/,
      string: {
        pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/,
        greedy: true
      },
      "class-name": {
        pattern: /(:\s*)(?:\w+|`(?:[^`\\\r\n])*`)(?=\s*[{):])/,
        lookbehind: true,
        greedy: true
      },
      relationship: {
        pattern: /(-\[\s*(?:\w+\s*|`(?:[^`\\\r\n])*`\s*)?:\s*|\|\s*:\s*)(?:\w+|`(?:[^`\\\r\n])*`)/,
        lookbehind: true,
        greedy: true,
        alias: "property"
      },
      identifier: {
        pattern: /`(?:[^`\\\r\n])*`/,
        greedy: true
      },
      variable: /\$\w+/,
      // https://neo4j.com/docs/cypher-manual/current/syntax/reserved/
      keyword: /\b(?:ADD|ALL|AND|AS|ASC|ASCENDING|ASSERT|BY|CALL|CASE|COMMIT|CONSTRAINT|CONTAINS|CREATE|CSV|DELETE|DESC|DESCENDING|DETACH|DISTINCT|DO|DROP|ELSE|END|ENDS|EXISTS|FOR|FOREACH|IN|INDEX|IS|JOIN|KEY|LIMIT|LOAD|MANDATORY|MATCH|MERGE|NODE|NOT|OF|ON|OPTIONAL|OR|ORDER(?=\s+BY)|PERIODIC|REMOVE|REQUIRE|RETURN|SCALAR|SCAN|SET|SKIP|START|STARTS|THEN|UNION|UNIQUE|UNWIND|USING|WHEN|WHERE|WITH|XOR|YIELD)\b/i,
      function: /\b\w+\b(?=\s*\()/,
      boolean: /\b(?:false|null|true)\b/i,
      number: /\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/,
      // https://neo4j.com/docs/cypher-manual/current/syntax/operators/
      operator: /:|<--?|--?>?|<>|=~?|[<>]=?|[+*/%^|]|\.\.\.?/,
      punctuation: /[()[\]{},;.]/
    };
  }
  return cypher_1;
}
var cypherExports = requireCypher();
const cypher = /* @__PURE__ */ getDefaultExportFromCjs(cypherExports);
const cypher$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: cypher
}, [cypherExports]);
export {
  cypher$1 as c
};
