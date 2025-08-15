import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireJava } from "./java-M3oaxAC_.js";
import { r as requireJavadoclike } from "./javadoclike-BdPr_VnG.js";
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
var javadoc_1;
var hasRequiredJavadoc;
function requireJavadoc() {
  if (hasRequiredJavadoc) return javadoc_1;
  hasRequiredJavadoc = 1;
  var refractorJava = requireJava();
  var refractorJavadoclike = requireJavadoclike();
  javadoc_1 = javadoc2;
  javadoc2.displayName = "javadoc";
  javadoc2.aliases = [];
  function javadoc2(Prism) {
    Prism.register(refractorJava);
    Prism.register(refractorJavadoclike);
    (function(Prism2) {
      var codeLinePattern = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m;
      var memberReference = /#\s*\w+(?:\s*\([^()]*\))?/.source;
      var reference = /(?:\b[a-zA-Z]\w+\s*\.\s*)*\b[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(
        /<mem>/g,
        function() {
          return memberReference;
        }
      );
      Prism2.languages.javadoc = Prism2.languages.extend("javadoclike", {});
      Prism2.languages.insertBefore("javadoc", "keyword", {
        reference: {
          pattern: RegExp(
            /(@(?:exception|link|linkplain|see|throws|value)\s+(?:\*\s*)?)/.source + "(?:" + reference + ")"
          ),
          lookbehind: true,
          inside: {
            function: {
              pattern: /(#\s*)\w+(?=\s*\()/,
              lookbehind: true
            },
            field: {
              pattern: /(#\s*)\w+/,
              lookbehind: true
            },
            namespace: {
              pattern: /\b(?:[a-z]\w*\s*\.\s*)+/,
              inside: {
                punctuation: /\./
              }
            },
            "class-name": /\b[A-Z]\w*/,
            keyword: Prism2.languages.java.keyword,
            punctuation: /[#()[\],.]/
          }
        },
        "class-name": {
          // @param <T> the first generic type parameter
          pattern: /(@param\s+)<[A-Z]\w*>/,
          lookbehind: true,
          inside: {
            punctuation: /[.<>]/
          }
        },
        "code-section": [
          {
            pattern: /(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,
            lookbehind: true,
            inside: {
              code: {
                // there can't be any HTML inside of {@code} tags
                pattern: codeLinePattern,
                lookbehind: true,
                inside: Prism2.languages.java,
                alias: "language-java"
              }
            }
          },
          {
            pattern: /(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,
            lookbehind: true,
            inside: {
              line: {
                pattern: codeLinePattern,
                lookbehind: true,
                inside: {
                  // highlight HTML tags and entities
                  tag: Prism2.languages.markup.tag,
                  entity: Prism2.languages.markup.entity,
                  code: {
                    // everything else is Java code
                    pattern: /.+/,
                    inside: Prism2.languages.java,
                    alias: "language-java"
                  }
                }
              }
            }
          }
        ],
        tag: Prism2.languages.markup.tag,
        entity: Prism2.languages.markup.entity
      });
      Prism2.languages.javadoclike.addSupport("java", Prism2.languages.javadoc);
    })(Prism);
  }
  return javadoc_1;
}
var javadocExports = requireJavadoc();
const javadoc = /* @__PURE__ */ getDefaultExportFromCjs(javadocExports);
const javadoc$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: javadoc
}, [javadocExports]);
export {
  javadoc$1 as j
};
