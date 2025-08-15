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
var systemd_1;
var hasRequiredSystemd;
function requireSystemd() {
  if (hasRequiredSystemd) return systemd_1;
  hasRequiredSystemd = 1;
  systemd_1 = systemd2;
  systemd2.displayName = "systemd";
  systemd2.aliases = [];
  function systemd2(Prism) {
    (function(Prism2) {
      var comment = {
        pattern: /^[;#].*/m,
        greedy: true
      };
      var quotesSource = /"(?:[^\r\n"\\]|\\(?:[^\r]|\r\n?))*"(?!\S)/.source;
      Prism2.languages.systemd = {
        comment,
        section: {
          pattern: /^\[[^\n\r\[\]]*\](?=[ \t]*$)/m,
          greedy: true,
          inside: {
            punctuation: /^\[|\]$/,
            "section-name": {
              pattern: /[\s\S]+/,
              alias: "selector"
            }
          }
        },
        key: {
          pattern: /^[^\s=]+(?=[ \t]*=)/m,
          greedy: true,
          alias: "attr-name"
        },
        value: {
          // This pattern is quite complex because of two properties:
          //  1) Quotes (strings) must be preceded by a space. Since we can't use lookbehinds, we have to "resolve"
          //     the lookbehind. You will see this in the main loop where spaces are handled separately.
          //  2) Line continuations.
          //     After line continuations, empty lines and comments are ignored so we have to consume them.
          pattern: RegExp(
            /(=[ \t]*(?!\s))/.source + // the value either starts with quotes or not
            "(?:" + quotesSource + '|(?=[^"\r\n]))(?:' + (/[^\s\\]/.source + // handle spaces separately because of quotes
            '|[ 	]+(?:(?![ 	"])|' + quotesSource + ")|" + /\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source) + ")*"
          ),
          lookbehind: true,
          greedy: true,
          alias: "attr-value",
          inside: {
            comment,
            quoted: {
              pattern: RegExp(/(^|\s)/.source + quotesSource),
              lookbehind: true,
              greedy: true
            },
            punctuation: /\\$/m,
            boolean: {
              pattern: /^(?:false|no|off|on|true|yes)$/,
              greedy: true
            }
          }
        },
        punctuation: /=/
      };
    })(Prism);
  }
  return systemd_1;
}
var systemdExports = requireSystemd();
const systemd = /* @__PURE__ */ getDefaultExportFromCjs(systemdExports);
const systemd$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: systemd
}, [systemdExports]);
export {
  systemd$1 as s
};
