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
var excelFormula_1;
var hasRequiredExcelFormula;
function requireExcelFormula() {
  if (hasRequiredExcelFormula) return excelFormula_1;
  hasRequiredExcelFormula = 1;
  excelFormula_1 = excelFormula2;
  excelFormula2.displayName = "excelFormula";
  excelFormula2.aliases = [];
  function excelFormula2(Prism) {
    Prism.languages["excel-formula"] = {
      comment: {
        pattern: /(\bN\(\s*)"(?:[^"]|"")*"(?=\s*\))/i,
        lookbehind: true,
        greedy: true
      },
      string: {
        pattern: /"(?:[^"]|"")*"(?!")/,
        greedy: true
      },
      reference: {
        // https://www.ablebits.com/office-addins-blog/2015/12/08/excel-reference-another-sheet-workbook/
        // Sales!B2
        // 'Winter sales'!B2
        // [Sales.xlsx]Jan!B2:B5
        // D:\Reports\[Sales.xlsx]Jan!B2:B5
        // '[Sales.xlsx]Jan sales'!B2:B5
        // 'D:\Reports\[Sales.xlsx]Jan sales'!B2:B5
        pattern: /(?:'[^']*'|(?:[^\s()[\]{}<>*?"';,$&]*\[[^^\s()[\]{}<>*?"']+\])?\w+)!/,
        greedy: true,
        alias: "string",
        inside: {
          operator: /!$/,
          punctuation: /'/,
          sheet: {
            pattern: /[^[\]]+$/,
            alias: "function"
          },
          file: {
            pattern: /\[[^[\]]+\]$/,
            inside: {
              punctuation: /[[\]]/
            }
          },
          path: /[\s\S]+/
        }
      },
      "function-name": {
        pattern: /\b[A-Z]\w*(?=\()/i,
        alias: "keyword"
      },
      range: {
        pattern: /\$?\b(?:[A-Z]+\$?\d+:\$?[A-Z]+\$?\d+|[A-Z]+:\$?[A-Z]+|\d+:\$?\d+)\b/i,
        alias: "property",
        inside: {
          operator: /:/,
          cell: /\$?[A-Z]+\$?\d+/i,
          column: /\$?[A-Z]+/i,
          row: /\$?\d+/
        }
      },
      cell: {
        // Excel is case insensitive, so the string "foo1" could be either a variable or a cell.
        // To combat this, we match cells case insensitive, if the contain at least one "$", and case sensitive otherwise.
        pattern: /\b[A-Z]+\d+\b|\$[A-Za-z]+\$?\d+\b|\b[A-Za-z]+\$\d+\b/,
        alias: "property"
      },
      number: /(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?\b/i,
      boolean: /\b(?:FALSE|TRUE)\b/i,
      operator: /[-+*/^%=&,]|<[=>]?|>=?/,
      punctuation: /[[\]();{}|]/
    };
    Prism.languages["xlsx"] = Prism.languages["xls"] = Prism.languages["excel-formula"];
  }
  return excelFormula_1;
}
var excelFormulaExports = requireExcelFormula();
const excelFormula = /* @__PURE__ */ getDefaultExportFromCjs(excelFormulaExports);
const excelFormula$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: excelFormula
}, [excelFormulaExports]);
export {
  excelFormula$1 as e
};
