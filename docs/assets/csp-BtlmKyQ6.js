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
var csp_1;
var hasRequiredCsp;
function requireCsp() {
  if (hasRequiredCsp) return csp_1;
  hasRequiredCsp = 1;
  csp_1 = csp2;
  csp2.displayName = "csp";
  csp2.aliases = [];
  function csp2(Prism) {
    (function(Prism2) {
      function value(source) {
        return RegExp(
          /([ \t])/.source + "(?:" + source + ")" + /(?=[\s;]|$)/.source,
          "i"
        );
      }
      Prism2.languages.csp = {
        directive: {
          pattern: /(^|[\s;])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[\s;]|$)/i,
          lookbehind: true,
          alias: "property"
        },
        scheme: {
          pattern: value(/[a-z][a-z0-9.+-]*:/.source),
          lookbehind: true
        },
        none: {
          pattern: value(/'none'/.source),
          lookbehind: true,
          alias: "keyword"
        },
        nonce: {
          pattern: value(/'nonce-[-+/\w=]+'/.source),
          lookbehind: true,
          alias: "number"
        },
        hash: {
          pattern: value(/'sha(?:256|384|512)-[-+/\w=]+'/.source),
          lookbehind: true,
          alias: "number"
        },
        host: {
          pattern: value(
            /[a-z][a-z0-9.+-]*:\/\/[^\s;,']*/.source + "|" + /\*[^\s;,']*/.source + "|" + /[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::[\d*]+)?(?:\/[^\s;,']*)?/.source
          ),
          lookbehind: true,
          alias: "url",
          inside: {
            important: /\*/
          }
        },
        keyword: [
          {
            pattern: value(/'unsafe-[a-z-]+'/.source),
            lookbehind: true,
            alias: "unsafe"
          },
          {
            pattern: value(/'[a-z-]+'/.source),
            lookbehind: true,
            alias: "safe"
          }
        ],
        punctuation: /;/
      };
    })(Prism);
  }
  return csp_1;
}
var cspExports = requireCsp();
const csp = /* @__PURE__ */ getDefaultExportFromCjs(cspExports);
const csp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: csp
}, [cspExports]);
export {
  csp$1 as c
};
