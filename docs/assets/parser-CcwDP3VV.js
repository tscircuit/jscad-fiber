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
var parser_1;
var hasRequiredParser;
function requireParser() {
  if (hasRequiredParser) return parser_1;
  hasRequiredParser = 1;
  parser_1 = parser2;
  parser2.displayName = "parser";
  parser2.aliases = [];
  function parser2(Prism) {
    (function(Prism2) {
      var parser3 = Prism2.languages.parser = Prism2.languages.extend("markup", {
        keyword: {
          pattern: /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
          lookbehind: true
        },
        variable: {
          pattern: /(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
          lookbehind: true,
          inside: {
            punctuation: /\.|:+/
          }
        },
        function: {
          pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
          lookbehind: true,
          inside: {
            keyword: {
              pattern: /(^@)(?:GET_|SET_)/,
              lookbehind: true
            },
            punctuation: /\.|:+/
          }
        },
        escape: {
          pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,
          alias: "builtin"
        },
        punctuation: /[\[\](){};]/
      });
      parser3 = Prism2.languages.insertBefore("parser", "keyword", {
        "parser-comment": {
          pattern: /(\s)#.*/,
          lookbehind: true,
          alias: "comment"
        },
        expression: {
          // Allow for 3 levels of depth
          pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
          greedy: true,
          lookbehind: true,
          inside: {
            string: {
              pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,
              lookbehind: true
            },
            keyword: parser3.keyword,
            variable: parser3.variable,
            function: parser3.function,
            boolean: /\b(?:false|true)\b/,
            number: /\b(?:0x[a-f\d]+|\d+(?:\.\d*)?(?:e[+-]?\d+)?)\b/i,
            escape: parser3.escape,
            operator: /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
            punctuation: parser3.punctuation
          }
        }
      });
      Prism2.languages.insertBefore(
        "inside",
        "punctuation",
        {
          expression: parser3.expression,
          keyword: parser3.keyword,
          variable: parser3.variable,
          function: parser3.function,
          escape: parser3.escape,
          "parser-punctuation": {
            pattern: parser3.punctuation,
            alias: "punctuation"
          }
        },
        parser3["tag"].inside["attr-value"]
      );
    })(Prism);
  }
  return parser_1;
}
var parserExports = requireParser();
const parser = /* @__PURE__ */ getDefaultExportFromCjs(parserExports);
const parser$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: parser
}, [parserExports]);
export {
  parser$1 as p
};
