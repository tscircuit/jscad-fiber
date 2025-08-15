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
var diff_1;
var hasRequiredDiff;
function requireDiff() {
  if (hasRequiredDiff) return diff_1;
  hasRequiredDiff = 1;
  diff_1 = diff2;
  diff2.displayName = "diff";
  diff2.aliases = [];
  function diff2(Prism) {
    (function(Prism2) {
      Prism2.languages.diff = {
        coord: [
          // Match all kinds of coord lines (prefixed by "+++", "---" or "***").
          /^(?:\*{3}|-{3}|\+{3}).*$/m,
          // Match "@@ ... @@" coord lines in unified diff.
          /^@@.*@@$/m,
          // Match coord lines in normal diff (starts with a number).
          /^\d.*$/m
        ]
        // deleted, inserted, unchanged, diff
      };
      var PREFIXES = {
        "deleted-sign": "-",
        "deleted-arrow": "<",
        "inserted-sign": "+",
        "inserted-arrow": ">",
        unchanged: " ",
        diff: "!"
      };
      Object.keys(PREFIXES).forEach(function(name) {
        var prefix = PREFIXES[name];
        var alias = [];
        if (!/^\w+$/.test(name)) {
          alias.push(/\w+/.exec(name)[0]);
        }
        if (name === "diff") {
          alias.push("bold");
        }
        Prism2.languages.diff[name] = {
          pattern: RegExp(
            "^(?:[" + prefix + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
            "m"
          ),
          alias,
          inside: {
            line: {
              pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
              lookbehind: true
            },
            prefix: {
              pattern: /[\s\S]/,
              alias: /\w+/.exec(name)[0]
            }
          }
        };
      });
      Object.defineProperty(Prism2.languages.diff, "PREFIXES", {
        value: PREFIXES
      });
    })(Prism);
  }
  return diff_1;
}
var diffExports = requireDiff();
const diff = /* @__PURE__ */ getDefaultExportFromCjs(diffExports);
const diff$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: diff
}, [diffExports]);
export {
  diff$1 as d
};
