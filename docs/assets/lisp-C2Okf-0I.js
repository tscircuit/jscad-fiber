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
var lisp_1;
var hasRequiredLisp;
function requireLisp() {
  if (hasRequiredLisp) return lisp_1;
  hasRequiredLisp = 1;
  lisp_1 = lisp2;
  lisp2.displayName = "lisp";
  lisp2.aliases = [];
  function lisp2(Prism) {
    (function(Prism2) {
      function simple_form(name) {
        return RegExp(/(\()/.source + "(?:" + name + ")" + /(?=[\s\)])/.source);
      }
      function primitive(pattern) {
        return RegExp(
          /([\s([])/.source + "(?:" + pattern + ")" + /(?=[\s)])/.source
        );
      }
      var symbol = /(?!\d)[-+*/~!@$%^=<>{}\w]+/.source;
      var marker = "&" + symbol;
      var par = "(\\()";
      var endpar = "(?=\\))";
      var space = "(?=\\s)";
      var nestedPar = /(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source;
      var language = {
        // Three or four semicolons are considered a heading.
        // See https://www.gnu.org/software/emacs/manual/html_node/elisp/Comment-Tips.html
        heading: {
          pattern: /;;;.*/,
          alias: ["comment", "title"]
        },
        comment: /;.*/,
        string: {
          pattern: /"(?:[^"\\]|\\.)*"/,
          greedy: true,
          inside: {
            argument: /[-A-Z]+(?=[.,\s])/,
            symbol: RegExp("`" + symbol + "'")
          }
        },
        "quoted-symbol": {
          pattern: RegExp("#?'" + symbol),
          alias: ["variable", "symbol"]
        },
        "lisp-property": {
          pattern: RegExp(":" + symbol),
          alias: "property"
        },
        splice: {
          pattern: RegExp(",@?" + symbol),
          alias: ["symbol", "variable"]
        },
        keyword: [
          {
            pattern: RegExp(
              par + "(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)" + space
            ),
            lookbehind: true
          },
          {
            pattern: RegExp(
              par + "(?:append|by|collect|concat|do|finally|for|in|return)" + space
            ),
            lookbehind: true
          }
        ],
        declare: {
          pattern: simple_form(/declare/.source),
          lookbehind: true,
          alias: "keyword"
        },
        interactive: {
          pattern: simple_form(/interactive/.source),
          lookbehind: true,
          alias: "keyword"
        },
        boolean: {
          pattern: primitive(/nil|t/.source),
          lookbehind: true
        },
        number: {
          pattern: primitive(/[-+]?\d+(?:\.\d*)?/.source),
          lookbehind: true
        },
        defvar: {
          pattern: RegExp(par + "def(?:const|custom|group|var)\\s+" + symbol),
          lookbehind: true,
          inside: {
            keyword: /^def[a-z]+/,
            variable: RegExp(symbol)
          }
        },
        defun: {
          pattern: RegExp(
            par + /(?:cl-)?(?:defmacro|defun\*?)\s+/.source + symbol + /\s+\(/.source + nestedPar + /\)/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            keyword: /^(?:cl-)?def\S+/,
            // See below, this property needs to be defined later so that it can
            // reference the language object.
            arguments: null,
            function: {
              pattern: RegExp("(^\\s)" + symbol),
              lookbehind: true
            },
            punctuation: /[()]/
          }
        },
        lambda: {
          pattern: RegExp(
            par + "lambda\\s+\\(\\s*(?:&?" + symbol + "(?:\\s+&?" + symbol + ")*\\s*)?\\)"
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            keyword: /^lambda/,
            // See below, this property needs to be defined later so that it can
            // reference the language object.
            arguments: null,
            punctuation: /[()]/
          }
        },
        car: {
          pattern: RegExp(par + symbol),
          lookbehind: true
        },
        punctuation: [
          // open paren, brackets, and close paren
          /(?:['`,]?\(|[)\[\]])/,
          // cons
          {
            pattern: /(\s)\.(?=\s)/,
            lookbehind: true
          }
        ]
      };
      var arg = {
        "lisp-marker": RegExp(marker),
        varform: {
          pattern: RegExp(
            /\(/.source + symbol + /\s+(?=\S)/.source + nestedPar + /\)/.source
          ),
          inside: language
        },
        argument: {
          pattern: RegExp(/(^|[\s(])/.source + symbol),
          lookbehind: true,
          alias: "variable"
        },
        rest: language
      };
      var forms = "\\S+(?:\\s+\\S+)*";
      var arglist = {
        pattern: RegExp(par + nestedPar + endpar),
        lookbehind: true,
        inside: {
          "rest-vars": {
            pattern: RegExp("&(?:body|rest)\\s+" + forms),
            inside: arg
          },
          "other-marker-vars": {
            pattern: RegExp("&(?:aux|optional)\\s+" + forms),
            inside: arg
          },
          keys: {
            pattern: RegExp("&key\\s+" + forms + "(?:\\s+&allow-other-keys)?"),
            inside: arg
          },
          argument: {
            pattern: RegExp(symbol),
            alias: "variable"
          },
          punctuation: /[()]/
        }
      };
      language["lambda"].inside.arguments = arglist;
      language["defun"].inside.arguments = Prism2.util.clone(arglist);
      language["defun"].inside.arguments.inside.sublist = arglist;
      Prism2.languages.lisp = language;
      Prism2.languages.elisp = language;
      Prism2.languages.emacs = language;
      Prism2.languages["emacs-lisp"] = language;
    })(Prism);
  }
  return lisp_1;
}
var lispExports = requireLisp();
const lisp = /* @__PURE__ */ getDefaultExportFromCjs(lispExports);
const lisp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: lisp
}, [lispExports]);
export {
  lisp$1 as l
};
