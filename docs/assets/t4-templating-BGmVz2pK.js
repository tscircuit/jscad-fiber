var t4Templating_1;
var hasRequiredT4Templating;
function requireT4Templating() {
  if (hasRequiredT4Templating) return t4Templating_1;
  hasRequiredT4Templating = 1;
  t4Templating_1 = t4Templating;
  t4Templating.displayName = "t4Templating";
  t4Templating.aliases = [];
  function t4Templating(Prism) {
    (function(Prism2) {
      function createBlock(prefix, inside, contentAlias) {
        return {
          pattern: RegExp("<#" + prefix + "[\\s\\S]*?#>"),
          alias: "block",
          inside: {
            delimiter: {
              pattern: RegExp("^<#" + prefix + "|#>$"),
              alias: "important"
            },
            content: {
              pattern: /[\s\S]+/,
              inside,
              alias: contentAlias
            }
          }
        };
      }
      function createT4(insideLang) {
        var grammar = Prism2.languages[insideLang];
        var className = "language-" + insideLang;
        return {
          block: {
            pattern: /<#[\s\S]+?#>/,
            inside: {
              directive: createBlock("@", {
                "attr-value": {
                  pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,
                  inside: {
                    punctuation: /^=|^["']|["']$/
                  }
                },
                keyword: /\b\w+(?=\s)/,
                "attr-name": /\b\w+/
              }),
              expression: createBlock("=", grammar, className),
              "class-feature": createBlock("\\+", grammar, className),
              standard: createBlock("", grammar, className)
            }
          }
        };
      }
      Prism2.languages["t4-templating"] = Object.defineProperty({}, "createT4", {
        value: createT4
      });
    })(Prism);
  }
  return t4Templating_1;
}
export {
  requireT4Templating as r
};
