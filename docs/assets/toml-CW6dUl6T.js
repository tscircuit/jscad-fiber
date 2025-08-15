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
var toml_1;
var hasRequiredToml;
function requireToml() {
  if (hasRequiredToml) return toml_1;
  hasRequiredToml = 1;
  toml_1 = toml2;
  toml2.displayName = "toml";
  toml2.aliases = [];
  function toml2(Prism) {
    (function(Prism2) {
      var key = /(?:[\w-]+|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*")/.source;
      function insertKey(pattern) {
        return pattern.replace(/__/g, function() {
          return key;
        });
      }
      Prism2.languages.toml = {
        comment: {
          pattern: /#.*/,
          greedy: true
        },
        table: {
          pattern: RegExp(
            insertKey(
              /(^[\t ]*\[\s*(?:\[\s*)?)__(?:\s*\.\s*__)*(?=\s*\])/.source
            ),
            "m"
          ),
          lookbehind: true,
          greedy: true,
          alias: "class-name"
        },
        key: {
          pattern: RegExp(
            insertKey(/(^[\t ]*|[{,]\s*)__(?:\s*\.\s*__)*(?=\s*=)/.source),
            "m"
          ),
          lookbehind: true,
          greedy: true,
          alias: "property"
        },
        string: {
          pattern: /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
          greedy: true
        },
        date: [
          {
            // Offset Date-Time, Local Date-Time, Local Date
            pattern: /\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,
            alias: "number"
          },
          {
            // Local Time
            pattern: /\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,
            alias: "number"
          }
        ],
        number: /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,
        boolean: /\b(?:false|true)\b/,
        punctuation: /[.,=[\]{}]/
      };
    })(Prism);
  }
  return toml_1;
}
var tomlExports = requireToml();
const toml = /* @__PURE__ */ getDefaultExportFromCjs(tomlExports);
const toml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: toml
}, [tomlExports]);
export {
  toml$1 as t
};
