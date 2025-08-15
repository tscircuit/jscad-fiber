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
var makefile_1;
var hasRequiredMakefile;
function requireMakefile() {
  if (hasRequiredMakefile) return makefile_1;
  hasRequiredMakefile = 1;
  makefile_1 = makefile2;
  makefile2.displayName = "makefile";
  makefile2.aliases = [];
  function makefile2(Prism) {
    Prism.languages.makefile = {
      comment: {
        pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
        lookbehind: true
      },
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      "builtin-target": {
        pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
        alias: "builtin"
      },
      target: {
        pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
        alias: "symbol",
        inside: {
          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
        }
      },
      variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
      // Directives
      keyword: /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
      function: {
        pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
        lookbehind: true
      },
      operator: /(?:::|[?:+!])?=|[|@]/,
      punctuation: /[:;(){}]/
    };
  }
  return makefile_1;
}
var makefileExports = requireMakefile();
const makefile = /* @__PURE__ */ getDefaultExportFromCjs(makefileExports);
const makefile$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: makefile
}, [makefileExports]);
export {
  makefile$1 as m
};
