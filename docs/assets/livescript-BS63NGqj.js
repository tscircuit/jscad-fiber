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
var livescript_1;
var hasRequiredLivescript;
function requireLivescript() {
  if (hasRequiredLivescript) return livescript_1;
  hasRequiredLivescript = 1;
  livescript_1 = livescript2;
  livescript2.displayName = "livescript";
  livescript2.aliases = [];
  function livescript2(Prism) {
    Prism.languages.livescript = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
          lookbehind: true
        },
        {
          pattern: /(^|[^\\])#.*/,
          lookbehind: true
        }
      ],
      "interpolated-string": {
        /* Look-behind and look-ahead prevents wrong behavior of the greedy pattern
         * forcing it to match """-quoted string when it would otherwise match "-quoted first. */
        pattern: /(^|[^"])("""|")(?:\\[\s\S]|(?!\2)[^\\])*\2(?!")/,
        lookbehind: true,
        greedy: true,
        inside: {
          variable: {
            pattern: /(^|[^\\])#[a-z_](?:-?[a-z]|[\d_])*/m,
            lookbehind: true
          },
          interpolation: {
            pattern: /(^|[^\\])#\{[^}]+\}/m,
            lookbehind: true,
            inside: {
              "interpolation-punctuation": {
                pattern: /^#\{|\}$/,
                alias: "variable"
              }
              // See rest below
            }
          },
          string: /[\s\S]+/
        }
      },
      string: [
        {
          pattern: /('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,
          greedy: true
        },
        {
          pattern: /<\[[\s\S]*?\]>/,
          greedy: true
        },
        /\\[^\s,;\])}]+/
      ],
      regex: [
        {
          pattern: /\/\/(?:\[[^\r\n\]]*\]|\\.|(?!\/\/)[^\\\[])+\/\/[gimyu]{0,5}/,
          greedy: true,
          inside: {
            comment: {
              pattern: /(^|[^\\])#.*/,
              lookbehind: true
            }
          }
        },
        {
          pattern: /\/(?:\[[^\r\n\]]*\]|\\.|[^/\\\r\n\[])+\/[gimyu]{0,5}/,
          greedy: true
        }
      ],
      keyword: {
        pattern: /(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,
        lookbehind: true
      },
      "keyword-operator": {
        pattern: /(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?: not|nt)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,
        lookbehind: true,
        alias: "operator"
      },
      boolean: {
        pattern: /(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,
        lookbehind: true
      },
      argument: {
        // Don't match .&. nor &&
        pattern: /(^|(?!\.&\.)[^&])&(?!&)\d*/m,
        lookbehind: true,
        alias: "variable"
      },
      number: /\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,
      identifier: /[a-z_](?:-?[a-z]|[\d_])*/i,
      operator: [
        // Spaced .
        {
          pattern: /( )\.(?= )/,
          lookbehind: true
        },
        // Full list, in order:
        // .= .~ .. ...
        // .&. .^. .<<. .>>. .>>>.
        // := :: ::=
        // &&
        // || |>
        // < << <<< <<<<
        // <- <-- <-! <--!
        // <~ <~~ <~! <~~!
        // <| <= <?
        // > >> >= >?
        // - -- -> -->
        // + ++
        // @ @@
        // % %%
        // * **
        // ! != !~=
        // !~> !~~>
        // !-> !-->
        // ~ ~> ~~> ~=
        // = ==
        // ^ ^^
        // / ?
        /\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/
      ],
      punctuation: /[(){}\[\]|.,:;`]/
    };
    Prism.languages.livescript["interpolated-string"].inside["interpolation"].inside.rest = Prism.languages.livescript;
  }
  return livescript_1;
}
var livescriptExports = requireLivescript();
const livescript = /* @__PURE__ */ getDefaultExportFromCjs(livescriptExports);
const livescript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: livescript
}, [livescriptExports]);
export {
  livescript$1 as l
};
