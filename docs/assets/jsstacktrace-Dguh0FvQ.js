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
var jsstacktrace_1;
var hasRequiredJsstacktrace;
function requireJsstacktrace() {
  if (hasRequiredJsstacktrace) return jsstacktrace_1;
  hasRequiredJsstacktrace = 1;
  jsstacktrace_1 = jsstacktrace2;
  jsstacktrace2.displayName = "jsstacktrace";
  jsstacktrace2.aliases = [];
  function jsstacktrace2(Prism) {
    Prism.languages.jsstacktrace = {
      "error-message": {
        pattern: /^\S.*/m,
        alias: "string"
      },
      "stack-frame": {
        pattern: /(^[ \t]+)at[ \t].*/m,
        lookbehind: true,
        inside: {
          "not-my-code": {
            pattern: /^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,
            alias: "comment"
          },
          filename: {
            pattern: /(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
            lookbehind: true,
            alias: "url"
          },
          function: {
            pattern: /(\bat\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
            lookbehind: true,
            inside: {
              punctuation: /\./
            }
          },
          punctuation: /[()]/,
          keyword: /\b(?:at|new)\b/,
          alias: {
            pattern: /\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
            alias: "variable"
          },
          "line-number": {
            pattern: /:\d+(?::\d+)?\b/,
            alias: "number",
            inside: {
              punctuation: /:/
            }
          }
        }
      }
    };
  }
  return jsstacktrace_1;
}
var jsstacktraceExports = requireJsstacktrace();
const jsstacktrace = /* @__PURE__ */ getDefaultExportFromCjs(jsstacktraceExports);
const jsstacktrace$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jsstacktrace
}, [jsstacktraceExports]);
export {
  jsstacktrace$1 as j
};
