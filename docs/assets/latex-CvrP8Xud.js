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
var latex_1;
var hasRequiredLatex;
function requireLatex() {
  if (hasRequiredLatex) return latex_1;
  hasRequiredLatex = 1;
  latex_1 = latex2;
  latex2.displayName = "latex";
  latex2.aliases = ["tex", "context"];
  function latex2(Prism) {
    (function(Prism2) {
      var funcPattern = /\\(?:[^a-z()[\]]|[a-z*]+)/i;
      var insideEqu = {
        "equation-command": {
          pattern: funcPattern,
          alias: "regex"
        }
      };
      Prism2.languages.latex = {
        comment: /%.*/,
        // the verbatim environment prints whitespace to the document
        cdata: {
          pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
          lookbehind: true
        },
        /*
         * equations can be between $$ $$ or $ $ or \( \) or \[ \]
         * (all are multiline)
         */
        equation: [
          {
            pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
            inside: insideEqu,
            alias: "string"
          },
          {
            pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: true,
            inside: insideEqu,
            alias: "string"
          }
        ],
        /*
         * arguments which are keywords or references are highlighted
         * as keywords
         */
        keyword: {
          pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
          lookbehind: true
        },
        url: {
          pattern: /(\\url\{)[^}]+(?=\})/,
          lookbehind: true
        },
        /*
         * section or chapter headlines are highlighted as bold so that
         * they stand out more
         */
        headline: {
          pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
          lookbehind: true,
          alias: "class-name"
        },
        function: {
          pattern: funcPattern,
          alias: "selector"
        },
        punctuation: /[[\]{}&]/
      };
      Prism2.languages.tex = Prism2.languages.latex;
      Prism2.languages.context = Prism2.languages.latex;
    })(Prism);
  }
  return latex_1;
}
var latexExports = requireLatex();
const latex = /* @__PURE__ */ getDefaultExportFromCjs(latexExports);
const latex$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: latex
}, [latexExports]);
export {
  latex$1 as l
};
