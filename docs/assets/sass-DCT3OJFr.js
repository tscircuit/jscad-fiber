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
var sass_1;
var hasRequiredSass;
function requireSass() {
  if (hasRequiredSass) return sass_1;
  hasRequiredSass = 1;
  sass_1 = sass2;
  sass2.displayName = "sass";
  sass2.aliases = [];
  function sass2(Prism) {
    (function(Prism2) {
      Prism2.languages.sass = Prism2.languages.extend("css", {
        // Sass comments don't need to be closed, only indented
        comment: {
          pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
          lookbehind: true,
          greedy: true
        }
      });
      Prism2.languages.insertBefore("sass", "atrule", {
        // We want to consume the whole line
        "atrule-line": {
          // Includes support for = and + shortcuts
          pattern: /^(?:[ \t]*)[@+=].+/m,
          greedy: true,
          inside: {
            atrule: /(?:@[\w-]+|[+=])/
          }
        }
      });
      delete Prism2.languages.sass.atrule;
      var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
      var operator = [
        /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
        {
          pattern: /(\s)-(?=\s)/,
          lookbehind: true
        }
      ];
      Prism2.languages.insertBefore("sass", "property", {
        // We want to consume the whole line
        "variable-line": {
          pattern: /^[ \t]*\$.+/m,
          greedy: true,
          inside: {
            punctuation: /:/,
            variable,
            operator
          }
        },
        // We want to consume the whole line
        "property-line": {
          pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
          greedy: true,
          inside: {
            property: [
              /[^:\s]+(?=\s*:)/,
              {
                pattern: /(:)[^:\s]+/,
                lookbehind: true
              }
            ],
            punctuation: /:/,
            variable,
            operator,
            important: Prism2.languages.sass.important
          }
        }
      });
      delete Prism2.languages.sass.property;
      delete Prism2.languages.sass.important;
      Prism2.languages.insertBefore("sass", "punctuation", {
        selector: {
          pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
          lookbehind: true,
          greedy: true
        }
      });
    })(Prism);
  }
  return sass_1;
}
var sassExports = requireSass();
const sass = /* @__PURE__ */ getDefaultExportFromCjs(sassExports);
const sass$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: sass
}, [sassExports]);
export {
  sass$1 as s
};
