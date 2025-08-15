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
var scss_1;
var hasRequiredScss;
function requireScss() {
  if (hasRequiredScss) return scss_1;
  hasRequiredScss = 1;
  scss_1 = scss2;
  scss2.displayName = "scss";
  scss2.aliases = [];
  function scss2(Prism) {
    Prism.languages.scss = Prism.languages.extend("css", {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: true
      },
      atrule: {
        pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
        inside: {
          rule: /@[\w-]+/
          // See rest below
        }
      },
      // url, compassified
      url: /(?:[-a-z]+-)?url(?=\()/i,
      // CSS selector regex is not appropriate for Sass
      // since there can be lot more things (var, @ directive, nesting..)
      // a selector must start at the end of a property or after a brace (end of other rules or nesting)
      // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
      // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
      // can "pass" as a selector- e.g: proper#{$erty})
      // this one was hard to do, so please be careful if you edit this one :)
      selector: {
        // Initial look-ahead is used to prevent matching of blank selectors
        pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
        inside: {
          parent: {
            pattern: /&/,
            alias: "important"
          },
          placeholder: /%[-\w]+/,
          variable: /\$[-\w]+|#\{\$[-\w]+\}/
        }
      },
      property: {
        pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
        inside: {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/
        }
      }
    });
    Prism.languages.insertBefore("scss", "atrule", {
      keyword: [
        /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
        {
          pattern: /( )(?:from|through)(?= )/,
          lookbehind: true
        }
      ]
    });
    Prism.languages.insertBefore("scss", "important", {
      // var and interpolated vars
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    });
    Prism.languages.insertBefore("scss", "function", {
      "module-modifier": {
        pattern: /\b(?:as|hide|show|with)\b/i,
        alias: "keyword"
      },
      placeholder: {
        pattern: /%[-\w]+/,
        alias: "selector"
      },
      statement: {
        pattern: /\B!(?:default|optional)\b/i,
        alias: "keyword"
      },
      boolean: /\b(?:false|true)\b/,
      null: {
        pattern: /\bnull\b/,
        alias: "keyword"
      },
      operator: {
        pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
        lookbehind: true
      }
    });
    Prism.languages.scss["atrule"].inside.rest = Prism.languages.scss;
  }
  return scss_1;
}
var scssExports = requireScss();
const scss = /* @__PURE__ */ getDefaultExportFromCjs(scssExports);
const scss$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: scss
}, [scssExports]);
export {
  scss$1 as s
};
