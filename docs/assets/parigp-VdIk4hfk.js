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
var parigp_1;
var hasRequiredParigp;
function requireParigp() {
  if (hasRequiredParigp) return parigp_1;
  hasRequiredParigp = 1;
  parigp_1 = parigp2;
  parigp2.displayName = "parigp";
  parigp2.aliases = [];
  function parigp2(Prism) {
    Prism.languages.parigp = {
      comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
      string: {
        pattern: /"(?:[^"\\\r\n]|\\.)*"/,
        greedy: true
      },
      // PARI/GP does not care about white spaces at all
      // so let's process the keywords to build an appropriate regexp
      // (e.g. "b *r *e *a *k", etc.)
      keyword: (function() {
        var keywords = [
          "breakpoint",
          "break",
          "dbg_down",
          "dbg_err",
          "dbg_up",
          "dbg_x",
          "forcomposite",
          "fordiv",
          "forell",
          "forpart",
          "forprime",
          "forstep",
          "forsubgroup",
          "forvec",
          "for",
          "iferr",
          "if",
          "local",
          "my",
          "next",
          "return",
          "until",
          "while"
        ];
        keywords = keywords.map(function(keyword) {
          return keyword.split("").join(" *");
        }).join("|");
        return RegExp("\\b(?:" + keywords + ")\\b");
      })(),
      function: /\b\w(?:[\w ]*\w)?(?= *\()/,
      number: {
        // The lookbehind and the negative lookahead prevent from breaking the .. operator
        pattern: /((?:\. *\. *)?)(?:\b\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *(?:[+-] *)?\d(?: *\d)*)?/i,
        lookbehind: true
      },
      operator: /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?: *>|(?: *<)?(?: *=)?)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
      punctuation: /[\[\]{}().,:;|]/
    };
  }
  return parigp_1;
}
var parigpExports = requireParigp();
const parigp = /* @__PURE__ */ getDefaultExportFromCjs(parigpExports);
const parigp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: parigp
}, [parigpExports]);
export {
  parigp$1 as p
};
