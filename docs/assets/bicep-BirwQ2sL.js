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
var bicep_1;
var hasRequiredBicep;
function requireBicep() {
  if (hasRequiredBicep) return bicep_1;
  hasRequiredBicep = 1;
  bicep_1 = bicep2;
  bicep2.displayName = "bicep";
  bicep2.aliases = [];
  function bicep2(Prism) {
    Prism.languages.bicep = {
      comment: [
        {
          // multiline comments eg /* ASDF */
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: true,
          greedy: true
        },
        {
          // singleline comments eg // ASDF
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      property: [
        {
          pattern: /([\r\n][ \t]*)[a-z_]\w*(?=[ \t]*:)/i,
          lookbehind: true
        },
        {
          pattern: /([\r\n][ \t]*)'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'(?=[ \t]*:)/,
          lookbehind: true,
          greedy: true
        }
      ],
      string: [
        {
          pattern: /'''[^'][\s\S]*?'''/,
          greedy: true
        },
        {
          pattern: /(^|[^\\'])'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'/,
          lookbehind: true,
          greedy: true
        }
      ],
      "interpolated-string": {
        pattern: /(^|[^\\'])'(?:\\.|\$(?:(?!\{)|\{[^{}\r\n]*\})|[^'\\\r\n$])*'/,
        lookbehind: true,
        greedy: true,
        inside: {
          interpolation: {
            pattern: /\$\{[^{}\r\n]*\}/,
            inside: {
              expression: {
                pattern: /(^\$\{)[\s\S]+(?=\}$)/,
                lookbehind: true
              },
              punctuation: /^\$\{|\}$/
            }
          },
          string: /[\s\S]+/
        }
      },
      datatype: {
        pattern: /(\b(?:output|param)\b[ \t]+\w+[ \t]+)\w+\b/,
        lookbehind: true,
        alias: "class-name"
      },
      boolean: /\b(?:false|true)\b/,
      // https://github.com/Azure/bicep/blob/114a3251b4e6e30082a58729f19a8cc4e374ffa6/src/textmate/bicep.tmlanguage#L184
      keyword: /\b(?:existing|for|if|in|module|null|output|param|resource|targetScope|var)\b/,
      decorator: /@\w+\b/,
      function: /\b[a-z_]\w*(?=[ \t]*\()/i,
      number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
      punctuation: /[{}[\];(),.:]/
    };
    Prism.languages.bicep["interpolated-string"].inside["interpolation"].inside["expression"].inside = Prism.languages.bicep;
  }
  return bicep_1;
}
var bicepExports = requireBicep();
const bicep = /* @__PURE__ */ getDefaultExportFromCjs(bicepExports);
const bicep$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: bicep
}, [bicepExports]);
export {
  bicep$1 as b
};
