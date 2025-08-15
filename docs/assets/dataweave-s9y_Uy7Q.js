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
var dataweave_1;
var hasRequiredDataweave;
function requireDataweave() {
  if (hasRequiredDataweave) return dataweave_1;
  hasRequiredDataweave = 1;
  dataweave_1 = dataweave2;
  dataweave2.displayName = "dataweave";
  dataweave2.aliases = [];
  function dataweave2(Prism) {
    (function(Prism2) {
      Prism2.languages.dataweave = {
        url: /\b[A-Za-z]+:\/\/[\w/:.?=&-]+|\burn:[\w:.?=&-]+/,
        property: {
          pattern: /(?:\b\w+#)?(?:"(?:\\.|[^\\"\r\n])*"|\b\w+)(?=\s*[:@])/,
          greedy: true
        },
        string: {
          pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
          greedy: true
        },
        "mime-type": /\b(?:application|audio|image|multipart|text|video)\/[\w+-]+/,
        date: {
          pattern: /\|[\w:+-]+\|/,
          greedy: true
        },
        comment: [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        regex: {
          pattern: /\/(?:[^\\\/\r\n]|\\[^\r\n])+\//,
          greedy: true
        },
        keyword: /\b(?:and|as|at|case|do|else|fun|if|input|is|match|not|ns|null|or|output|type|unless|update|using|var)\b/,
        function: /\b[A-Z_]\w*(?=\s*\()/i,
        number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        punctuation: /[{}[\];(),.:@]/,
        operator: /<<|>>|->|[<>~=]=?|!=|--?-?|\+\+?|!|\?/,
        boolean: /\b(?:false|true)\b/
      };
    })(Prism);
  }
  return dataweave_1;
}
var dataweaveExports = requireDataweave();
const dataweave = /* @__PURE__ */ getDefaultExportFromCjs(dataweaveExports);
const dataweave$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: dataweave
}, [dataweaveExports]);
export {
  dataweave$1 as d
};
