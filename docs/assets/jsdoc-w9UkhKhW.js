import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireJavadoclike } from "./javadoclike-BdPr_VnG.js";
import { r as requireTypescript } from "./typescript-e-gwqYt9.js";
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
var jsdoc_1;
var hasRequiredJsdoc;
function requireJsdoc() {
  if (hasRequiredJsdoc) return jsdoc_1;
  hasRequiredJsdoc = 1;
  var refractorJavadoclike = requireJavadoclike();
  var refractorTypescript = requireTypescript();
  jsdoc_1 = jsdoc2;
  jsdoc2.displayName = "jsdoc";
  jsdoc2.aliases = [];
  function jsdoc2(Prism) {
    Prism.register(refractorJavadoclike);
    Prism.register(refractorTypescript);
    (function(Prism2) {
      var javascript = Prism2.languages.javascript;
      var type = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source;
      var parameterPrefix = "(@(?:arg|argument|param|property)\\s+(?:" + type + "\\s+)?)";
      Prism2.languages.jsdoc = Prism2.languages.extend("javadoclike", {
        parameter: {
          // @param {string} foo - foo bar
          pattern: RegExp(
            parameterPrefix + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source
          ),
          lookbehind: true,
          inside: {
            punctuation: /\./
          }
        }
      });
      Prism2.languages.insertBefore("jsdoc", "keyword", {
        "optional-parameter": {
          // @param {string} [baz.foo="bar"] foo bar
          pattern: RegExp(
            parameterPrefix + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source
          ),
          lookbehind: true,
          inside: {
            parameter: {
              pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
              lookbehind: true,
              inside: {
                punctuation: /\./
              }
            },
            code: {
              pattern: /(=)[\s\S]*(?=\]$)/,
              lookbehind: true,
              inside: javascript,
              alias: "language-javascript"
            },
            punctuation: /[=[\]]/
          }
        },
        "class-name": [
          {
            pattern: RegExp(
              /(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(
                /<TYPE>/g,
                function() {
                  return type;
                }
              )
            ),
            lookbehind: true,
            inside: {
              punctuation: /\./
            }
          },
          {
            pattern: RegExp("(@[a-z]+\\s+)" + type),
            lookbehind: true,
            inside: {
              string: javascript.string,
              number: javascript.number,
              boolean: javascript.boolean,
              keyword: Prism2.languages.typescript.keyword,
              operator: /=>|\.\.\.|[&|?:*]/,
              punctuation: /[.,;=<>{}()[\]]/
            }
          }
        ],
        example: {
          pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
          lookbehind: true,
          inside: {
            code: {
              pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
              lookbehind: true,
              inside: javascript,
              alias: "language-javascript"
            }
          }
        }
      });
      Prism2.languages.javadoclike.addSupport("javascript", Prism2.languages.jsdoc);
    })(Prism);
  }
  return jsdoc_1;
}
var jsdocExports = requireJsdoc();
const jsdoc = /* @__PURE__ */ getDefaultExportFromCjs(jsdocExports);
const jsdoc$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jsdoc
}, [jsdocExports]);
export {
  jsdoc$1 as j
};
