import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireSql } from "./sql-C3TUcweP.js";
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
var apex_1;
var hasRequiredApex;
function requireApex() {
  if (hasRequiredApex) return apex_1;
  hasRequiredApex = 1;
  var refractorSql = requireSql();
  apex_1 = apex2;
  apex2.displayName = "apex";
  apex2.aliases = [];
  function apex2(Prism) {
    Prism.register(refractorSql);
    (function(Prism2) {
      var keywords = /\b(?:(?:after|before)(?=\s+[a-z])|abstract|activate|and|any|array|as|asc|autonomous|begin|bigdecimal|blob|boolean|break|bulk|by|byte|case|cast|catch|char|class|collect|commit|const|continue|currency|date|datetime|decimal|default|delete|desc|do|double|else|end|enum|exception|exit|export|extends|final|finally|float|for|from|get(?=\s*[{};])|global|goto|group|having|hint|if|implements|import|in|inner|insert|instanceof|int|integer|interface|into|join|like|limit|list|long|loop|map|merge|new|not|null|nulls|number|object|of|on|or|outer|override|package|parallel|pragma|private|protected|public|retrieve|return|rollback|select|set|short|sObject|sort|static|string|super|switch|synchronized|system|testmethod|then|this|throw|time|transaction|transient|trigger|try|undelete|update|upsert|using|virtual|void|webservice|when|where|while|(?:inherited|with|without)\s+sharing)\b/i;
      var className = /\b(?:(?=[a-z_]\w*\s*[<\[])|(?!<keyword>))[A-Z_]\w*(?:\s*\.\s*[A-Z_]\w*)*\b(?:\s*(?:\[\s*\]|<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>))*/.source.replace(
        /<keyword>/g,
        function() {
          return keywords.source;
        }
      );
      function insertClassName(pattern) {
        return RegExp(
          pattern.replace(/<CLASS-NAME>/g, function() {
            return className;
          }),
          "i"
        );
      }
      var classNameInside = {
        keyword: keywords,
        punctuation: /[()\[\]{};,:.<>]/
      };
      Prism2.languages.apex = {
        comment: Prism2.languages.clike.comment,
        string: Prism2.languages.clike.string,
        sql: {
          pattern: /((?:[=,({:]|\breturn)\s*)\[[^\[\]]*\]/i,
          lookbehind: true,
          greedy: true,
          alias: "language-sql",
          inside: Prism2.languages.sql
        },
        annotation: {
          pattern: /@\w+\b/,
          alias: "punctuation"
        },
        "class-name": [
          {
            pattern: insertClassName(
              /(\b(?:class|enum|extends|implements|instanceof|interface|new|trigger\s+\w+\s+on)\s+)<CLASS-NAME>/.source
            ),
            lookbehind: true,
            inside: classNameInside
          },
          {
            // cast
            pattern: insertClassName(
              /(\(\s*)<CLASS-NAME>(?=\s*\)\s*[\w(])/.source
            ),
            lookbehind: true,
            inside: classNameInside
          },
          {
            // variable/parameter declaration and return types
            pattern: insertClassName(/<CLASS-NAME>(?=\s*\w+\s*[;=,(){:])/.source),
            inside: classNameInside
          }
        ],
        trigger: {
          pattern: /(\btrigger\s+)\w+\b/i,
          lookbehind: true,
          alias: "class-name"
        },
        keyword: keywords,
        function: /\b[a-z_]\w*(?=\s*\()/i,
        boolean: /\b(?:false|true)\b/i,
        number: /(?:\B\.\d+|\b\d+(?:\.\d+|L)?)\b/i,
        operator: /[!=](?:==?)?|\?\.?|&&|\|\||--|\+\+|[-+*/^&|]=?|:|<<?=?|>{1,3}=?/,
        punctuation: /[()\[\]{};,.]/
      };
    })(Prism);
  }
  return apex_1;
}
var apexExports = requireApex();
const apex = /* @__PURE__ */ getDefaultExportFromCjs(apexExports);
const apex$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: apex
}, [apexExports]);
export {
  apex$1 as a
};
