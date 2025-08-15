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
var abnf_1;
var hasRequiredAbnf;
function requireAbnf() {
  if (hasRequiredAbnf) return abnf_1;
  hasRequiredAbnf = 1;
  abnf_1 = abnf2;
  abnf2.displayName = "abnf";
  abnf2.aliases = [];
  function abnf2(Prism) {
    (function(Prism2) {
      var coreRules = "(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)";
      Prism2.languages.abnf = {
        comment: /;.*/,
        string: {
          pattern: /(?:%[is])?"[^"\n\r]*"/,
          greedy: true,
          inside: {
            punctuation: /^%[is]/
          }
        },
        range: {
          pattern: /%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,
          alias: "number"
        },
        terminal: {
          pattern: /%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,
          alias: "number"
        },
        repetition: {
          pattern: /(^|[^\w-])(?:\d*\*\d*|\d+)/,
          lookbehind: true,
          alias: "operator"
        },
        definition: {
          pattern: /(^[ \t]*)(?:[a-z][\w-]*|<[^<>\r\n]*>)(?=\s*=)/m,
          lookbehind: true,
          alias: "keyword",
          inside: {
            punctuation: /<|>/
          }
        },
        "core-rule": {
          pattern: RegExp(
            "(?:(^|[^<\\w-])" + coreRules + "|<" + coreRules + ">)(?![\\w-])",
            "i"
          ),
          lookbehind: true,
          alias: ["rule", "constant"],
          inside: {
            punctuation: /<|>/
          }
        },
        rule: {
          pattern: /(^|[^<\w-])[a-z][\w-]*|<[^<>\r\n]*>/i,
          lookbehind: true,
          inside: {
            punctuation: /<|>/
          }
        },
        operator: /=\/?|\//,
        punctuation: /[()\[\]]/
      };
    })(Prism);
  }
  return abnf_1;
}
var abnfExports = requireAbnf();
const abnf = /* @__PURE__ */ getDefaultExportFromCjs(abnfExports);
const abnf$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: abnf
}, [abnfExports]);
export {
  abnf$1 as a
};
