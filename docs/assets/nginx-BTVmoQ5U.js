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
var nginx_1;
var hasRequiredNginx;
function requireNginx() {
  if (hasRequiredNginx) return nginx_1;
  hasRequiredNginx = 1;
  nginx_1 = nginx2;
  nginx2.displayName = "nginx";
  nginx2.aliases = [];
  function nginx2(Prism) {
    (function(Prism2) {
      var variable = /\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i;
      Prism2.languages.nginx = {
        comment: {
          pattern: /(^|[\s{};])#.*/,
          lookbehind: true,
          greedy: true
        },
        directive: {
          pattern: /(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,
          lookbehind: true,
          greedy: true,
          inside: {
            string: {
              pattern: /((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,
              lookbehind: true,
              greedy: true,
              inside: {
                escape: {
                  pattern: /\\["'\\nrt]/,
                  alias: "entity"
                },
                variable
              }
            },
            comment: {
              pattern: /(\s)#.*/,
              lookbehind: true,
              greedy: true
            },
            keyword: {
              pattern: /^\S+/,
              greedy: true
            },
            // other patterns
            boolean: {
              pattern: /(\s)(?:off|on)(?!\S)/,
              lookbehind: true
            },
            number: {
              pattern: /(\s)\d+[a-z]*(?!\S)/i,
              lookbehind: true
            },
            variable
          }
        },
        punctuation: /[{};]/
      };
    })(Prism);
  }
  return nginx_1;
}
var nginxExports = requireNginx();
const nginx = /* @__PURE__ */ getDefaultExportFromCjs(nginxExports);
const nginx$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: nginx
}, [nginxExports]);
export {
  nginx$1 as n
};
