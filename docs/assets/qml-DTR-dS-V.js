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
var qml_1;
var hasRequiredQml;
function requireQml() {
  if (hasRequiredQml) return qml_1;
  hasRequiredQml = 1;
  qml_1 = qml2;
  qml2.displayName = "qml";
  qml2.aliases = [];
  function qml2(Prism) {
    (function(Prism2) {
      var jsString = /"(?:\\.|[^\\"\r\n])*"|'(?:\\.|[^\\'\r\n])*'/.source;
      var jsComment = /\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))*\*\//.source;
      var jsExpr = /(?:[^\\()[\]{}"'/]|<string>|\/(?![*/])|<comment>|\(<expr>*\)|\[<expr>*\]|\{<expr>*\}|\\[\s\S])/.source.replace(/<string>/g, function() {
        return jsString;
      }).replace(/<comment>/g, function() {
        return jsComment;
      });
      for (var i = 0; i < 2; i++) {
        jsExpr = jsExpr.replace(/<expr>/g, function() {
          return jsExpr;
        });
      }
      jsExpr = jsExpr.replace(/<expr>/g, "[^\\s\\S]");
      Prism2.languages.qml = {
        comment: {
          pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
          greedy: true
        },
        "javascript-function": {
          pattern: RegExp(
            /((?:^|;)[ \t]*)function\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*\(<js>*\)\s*\{<js>*\}/.source.replace(
              /<js>/g,
              function() {
                return jsExpr;
              }
            ),
            "m"
          ),
          lookbehind: true,
          greedy: true,
          alias: "language-javascript",
          inside: Prism2.languages.javascript
        },
        "class-name": {
          pattern: /((?:^|[:;])[ \t]*)(?!\d)\w+(?=[ \t]*\{|[ \t]+on\b)/m,
          lookbehind: true
        },
        property: [
          {
            pattern: /((?:^|[;{])[ \t]*)(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,
            lookbehind: true
          },
          {
            pattern: /((?:^|[;{])[ \t]*)property[ \t]+(?!\d)\w+(?:\.\w+)*[ \t]+(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,
            lookbehind: true,
            inside: {
              keyword: /^property/,
              property: /\w+(?:\.\w+)*/
            }
          }
        ],
        "javascript-expression": {
          pattern: RegExp(
            /(:[ \t]*)(?![\s;}[])(?:(?!$|[;}])<js>)+/.source.replace(
              /<js>/g,
              function() {
                return jsExpr;
              }
            ),
            "m"
          ),
          lookbehind: true,
          greedy: true,
          alias: "language-javascript",
          inside: Prism2.languages.javascript
        },
        string: {
          pattern: /"(?:\\.|[^\\"\r\n])*"/,
          greedy: true
        },
        keyword: /\b(?:as|import|on)\b/,
        punctuation: /[{}[\]:;,]/
      };
    })(Prism);
  }
  return qml_1;
}
var qmlExports = requireQml();
const qml = /* @__PURE__ */ getDefaultExportFromCjs(qmlExports);
const qml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: qml
}, [qmlExports]);
export {
  qml$1 as q
};
