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
var csv_1;
var hasRequiredCsv;
function requireCsv() {
  if (hasRequiredCsv) return csv_1;
  hasRequiredCsv = 1;
  csv_1 = csv2;
  csv2.displayName = "csv";
  csv2.aliases = [];
  function csv2(Prism) {
    Prism.languages.csv = {
      value: /[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,
      punctuation: /,/
    };
  }
  return csv_1;
}
var csvExports = requireCsv();
const csv = /* @__PURE__ */ getDefaultExportFromCjs(csvExports);
const csv$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: csv
}, [csvExports]);
export {
  csv$1 as c
};
