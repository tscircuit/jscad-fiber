import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireRuby } from "./ruby-BhyE9auN.js";
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
var haml_1;
var hasRequiredHaml;
function requireHaml() {
  if (hasRequiredHaml) return haml_1;
  hasRequiredHaml = 1;
  var refractorRuby = requireRuby();
  haml_1 = haml2;
  haml2.displayName = "haml";
  haml2.aliases = [];
  function haml2(Prism) {
    Prism.register(refractorRuby);
    (function(Prism2) {
      Prism2.languages.haml = {
        // Multiline stuff should appear before the rest
        "multiline-comment": {
          pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ].+)*/,
          lookbehind: true,
          alias: "comment"
        },
        "multiline-code": [
          {
            pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ].*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ].+)/,
            lookbehind: true,
            inside: Prism2.languages.ruby
          },
          {
            pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ].*\|[\t ]*)*/,
            lookbehind: true,
            inside: Prism2.languages.ruby
          }
        ],
        // See at the end of the file for known filters
        filter: {
          pattern: /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/,
          lookbehind: true,
          inside: {
            "filter-name": {
              pattern: /^:[\w-]+/,
              alias: "symbol"
            }
          }
        },
        markup: {
          pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
          lookbehind: true,
          inside: Prism2.languages.markup
        },
        doctype: {
          pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
          lookbehind: true
        },
        tag: {
          // Allows for one nested group of braces
          pattern: /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^{}])+\}|\[[^\]]+\])*[\/<>]*/,
          lookbehind: true,
          inside: {
            attributes: [
              {
                // Lookbehind tries to prevent interpolations from breaking it all
                // Allows for one nested group of braces
                pattern: /(^|[^#])\{(?:\{[^}]+\}|[^{}])+\}/,
                lookbehind: true,
                inside: Prism2.languages.ruby
              },
              {
                pattern: /\([^)]+\)/,
                inside: {
                  "attr-value": {
                    pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,
                    lookbehind: true
                  },
                  "attr-name": /[\w:-]+(?=\s*!?=|\s*[,)])/,
                  punctuation: /[=(),]/
                }
              },
              {
                pattern: /\[[^\]]+\]/,
                inside: Prism2.languages.ruby
              }
            ],
            punctuation: /[<>]/
          }
        },
        code: {
          pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
          lookbehind: true,
          inside: Prism2.languages.ruby
        },
        // Interpolations in plain text
        interpolation: {
          pattern: /#\{[^}]+\}/,
          inside: {
            delimiter: {
              pattern: /^#\{|\}$/,
              alias: "punctuation"
            },
            ruby: {
              pattern: /[\s\S]+/,
              inside: Prism2.languages.ruby
            }
          }
        },
        punctuation: {
          pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
          lookbehind: true
        }
      };
      var filter_pattern = "((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ].+|\\s*?(?=\\r?\\n|\\r)))+";
      var filters = [
        "css",
        {
          filter: "coffee",
          language: "coffeescript"
        },
        "erb",
        "javascript",
        "less",
        "markdown",
        "ruby",
        "scss",
        "textile"
      ];
      var all_filters = {};
      for (var i = 0, l = filters.length; i < l; i++) {
        var filter = filters[i];
        filter = typeof filter === "string" ? {
          filter,
          language: filter
        } : filter;
        if (Prism2.languages[filter.language]) {
          all_filters["filter-" + filter.filter] = {
            pattern: RegExp(
              filter_pattern.replace("{{filter_name}}", function() {
                return filter.filter;
              })
            ),
            lookbehind: true,
            inside: {
              "filter-name": {
                pattern: /^:[\w-]+/,
                alias: "symbol"
              },
              text: {
                pattern: /[\s\S]+/,
                alias: [filter.language, "language-" + filter.language],
                inside: Prism2.languages[filter.language]
              }
            }
          };
        }
      }
      Prism2.languages.insertBefore("haml", "filter", all_filters);
    })(Prism);
  }
  return haml_1;
}
var hamlExports = requireHaml();
const haml = /* @__PURE__ */ getDefaultExportFromCjs(hamlExports);
const haml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: haml
}, [hamlExports]);
export {
  haml$1 as h
};
