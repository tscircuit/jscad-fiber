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
var solutionFile_1;
var hasRequiredSolutionFile;
function requireSolutionFile() {
  if (hasRequiredSolutionFile) return solutionFile_1;
  hasRequiredSolutionFile = 1;
  solutionFile_1 = solutionFile2;
  solutionFile2.displayName = "solutionFile";
  solutionFile2.aliases = [];
  function solutionFile2(Prism) {
    (function(Prism2) {
      var guid = {
        // https://en.wikipedia.org/wiki/Universally_unique_identifier#Format
        pattern: /\{[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}\}/i,
        alias: "constant",
        inside: {
          punctuation: /[{}]/
        }
      };
      Prism2.languages["solution-file"] = {
        comment: {
          pattern: /#.*/,
          greedy: true
        },
        string: {
          pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
          greedy: true,
          inside: {
            guid
          }
        },
        object: {
          // Foo
          //   Bar("abs") = 9
          //   EndBar
          //   Prop = TRUE
          // EndFoo
          pattern: /^([ \t]*)(?:([A-Z]\w*)\b(?=.*(?:\r\n?|\n)(?:\1[ \t].*(?:\r\n?|\n))*\1End\2(?=[ \t]*$))|End[A-Z]\w*(?=[ \t]*$))/m,
          lookbehind: true,
          greedy: true,
          alias: "keyword"
        },
        property: {
          pattern: /^([ \t]*)(?!\s)[^\r\n"#=()]*[^\s"#=()](?=\s*=)/m,
          lookbehind: true,
          inside: {
            guid
          }
        },
        guid,
        number: /\b\d+(?:\.\d+)*\b/,
        boolean: /\b(?:FALSE|TRUE)\b/,
        operator: /=/,
        punctuation: /[(),]/
      };
      Prism2.languages["sln"] = Prism2.languages["solution-file"];
    })(Prism);
  }
  return solutionFile_1;
}
var solutionFileExports = requireSolutionFile();
const solutionFile = /* @__PURE__ */ getDefaultExportFromCjs(solutionFileExports);
const solutionFile$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: solutionFile
}, [solutionFileExports]);
export {
  solutionFile$1 as s
};
