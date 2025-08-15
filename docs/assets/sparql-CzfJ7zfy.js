import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireTurtle } from "./turtle-D3qNu8kc.js";
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
var sparql_1;
var hasRequiredSparql;
function requireSparql() {
  if (hasRequiredSparql) return sparql_1;
  hasRequiredSparql = 1;
  var refractorTurtle = requireTurtle();
  sparql_1 = sparql2;
  sparql2.displayName = "sparql";
  sparql2.aliases = ["rq"];
  function sparql2(Prism) {
    Prism.register(refractorTurtle);
    Prism.languages.sparql = Prism.languages.extend("turtle", {
      boolean: /\b(?:false|true)\b/i,
      variable: {
        pattern: /[?$]\w+/,
        greedy: true
      }
    });
    Prism.languages.insertBefore("sparql", "punctuation", {
      keyword: [
        /\b(?:A|ADD|ALL|AS|ASC|ASK|BNODE|BY|CLEAR|CONSTRUCT|COPY|CREATE|DATA|DEFAULT|DELETE|DESC|DESCRIBE|DISTINCT|DROP|EXISTS|FILTER|FROM|GROUP|HAVING|INSERT|INTO|LIMIT|LOAD|MINUS|MOVE|NAMED|NOT|NOW|OFFSET|OPTIONAL|ORDER|RAND|REDUCED|SELECT|SEPARATOR|SERVICE|SILENT|STRUUID|UNION|USING|UUID|VALUES|WHERE)\b/i,
        /\b(?:ABS|AVG|BIND|BOUND|CEIL|COALESCE|CONCAT|CONTAINS|COUNT|DATATYPE|DAY|ENCODE_FOR_URI|FLOOR|GROUP_CONCAT|HOURS|IF|IRI|isBLANK|isIRI|isLITERAL|isNUMERIC|isURI|LANG|LANGMATCHES|LCASE|MAX|MD5|MIN|MINUTES|MONTH|REGEX|REPLACE|ROUND|sameTerm|SAMPLE|SECONDS|SHA1|SHA256|SHA384|SHA512|STR|STRAFTER|STRBEFORE|STRDT|STRENDS|STRLANG|STRLEN|STRSTARTS|SUBSTR|SUM|TIMEZONE|TZ|UCASE|URI|YEAR)\b(?=\s*\()/i,
        /\b(?:BASE|GRAPH|PREFIX)\b/i
      ]
    });
    Prism.languages.rq = Prism.languages.sparql;
  }
  return sparql_1;
}
var sparqlExports = requireSparql();
const sparql = /* @__PURE__ */ getDefaultExportFromCjs(sparqlExports);
const sparql$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: sparql
}, [sparqlExports]);
export {
  sparql$1 as s
};
