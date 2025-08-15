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
var jq_1;
var hasRequiredJq;
function requireJq() {
  if (hasRequiredJq) return jq_1;
  hasRequiredJq = 1;
  jq_1 = jq2;
  jq2.displayName = "jq";
  jq2.aliases = [];
  function jq2(Prism) {
    (function(Prism2) {
      var interpolation = /\\\((?:[^()]|\([^()]*\))*\)/.source;
      var string = RegExp(
        /(^|[^\\])"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(
          /__/g,
          function() {
            return interpolation;
          }
        )
      );
      var stringInterpolation = {
        interpolation: {
          pattern: RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + interpolation),
          lookbehind: true,
          inside: {
            content: {
              pattern: /^(\\\()[\s\S]+(?=\)$)/,
              lookbehind: true,
              inside: null
              // see below
            },
            punctuation: /^\\\(|\)$/
          }
        }
      };
      var jq3 = Prism2.languages.jq = {
        comment: /#.*/,
        property: {
          pattern: RegExp(string.source + /(?=\s*:(?!:))/.source),
          lookbehind: true,
          greedy: true,
          inside: stringInterpolation
        },
        string: {
          pattern: string,
          lookbehind: true,
          greedy: true,
          inside: stringInterpolation
        },
        function: {
          pattern: /(\bdef\s+)[a-z_]\w+/i,
          lookbehind: true
        },
        variable: /\B\$\w+/,
        "property-literal": {
          pattern: /\b[a-z_]\w*(?=\s*:(?!:))/i,
          alias: "property"
        },
        keyword: /\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,
        boolean: /\b(?:false|true)\b/,
        number: /(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,
        operator: [
          {
            pattern: /\|=?/,
            alias: "pipe"
          },
          /\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/
        ],
        "c-style-function": {
          pattern: /\b[a-z_]\w*(?=\s*\()/i,
          alias: "function"
        },
        punctuation: /::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,
        dot: {
          pattern: /\./,
          alias: "important"
        }
      };
      stringInterpolation.interpolation.inside.content.inside = jq3;
    })(Prism);
  }
  return jq_1;
}
var jqExports = requireJq();
const jq = /* @__PURE__ */ getDefaultExportFromCjs(jqExports);
const jq$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jq
}, [jqExports]);
export {
  jq$1 as j
};
