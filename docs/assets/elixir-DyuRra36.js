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
var elixir_1;
var hasRequiredElixir;
function requireElixir() {
  if (hasRequiredElixir) return elixir_1;
  hasRequiredElixir = 1;
  elixir_1 = elixir2;
  elixir2.displayName = "elixir";
  elixir2.aliases = [];
  function elixir2(Prism) {
    Prism.languages.elixir = {
      doc: {
        pattern: /@(?:doc|moduledoc)\s+(?:("""|''')[\s\S]*?\1|("|')(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2)/,
        inside: {
          attribute: /^@\w+/,
          string: /['"][\s\S]+/
        }
      },
      comment: {
        pattern: /#.*/,
        greedy: true
      },
      // ~r"""foo""" (multi-line), ~r'''foo''' (multi-line), ~r/foo/, ~r|foo|, ~r"foo", ~r'foo', ~r(foo), ~r[foo], ~r{foo}, ~r<foo>
      regex: {
        pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
        greedy: true
      },
      string: [
        {
          // ~s"""foo""" (multi-line), ~s'''foo''' (multi-line), ~s/foo/, ~s|foo|, ~s"foo", ~s'foo', ~s(foo), ~s[foo], ~s{foo} (with interpolation care), ~s<foo>
          pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|#(?!\{)|[^#\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
          greedy: true,
          inside: {
            // See interpolation below
          }
        },
        {
          pattern: /("""|''')[\s\S]*?\1/,
          greedy: true,
          inside: {
            // See interpolation below
          }
        },
        {
          // Multi-line strings are allowed
          pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true,
          inside: {
            // See interpolation below
          }
        }
      ],
      atom: {
        // Look-behind prevents bad highlighting of the :: operator
        pattern: /(^|[^:]):\w+/,
        lookbehind: true,
        alias: "symbol"
      },
      module: {
        pattern: /\b[A-Z]\w*\b/,
        alias: "class-name"
      },
      // Look-ahead prevents bad highlighting of the :: operator
      "attr-name": /\b\w+\??:(?!:)/,
      argument: {
        // Look-behind prevents bad highlighting of the && operator
        pattern: /(^|[^&])&\d+/,
        lookbehind: true,
        alias: "variable"
      },
      attribute: {
        pattern: /@\w+/,
        alias: "variable"
      },
      function: /\b[_a-zA-Z]\w*[?!]?(?:(?=\s*(?:\.\s*)?\()|(?=\/\d))/,
      number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
      keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|delegate|exception|impl|macro|module|n|np|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|quote|raise|require|rescue|try|unless|unquote|use|when)\b/,
      boolean: /\b(?:false|nil|true)\b/,
      operator: [
        /\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,
        {
          // We don't want to match <<
          pattern: /([^<])<(?!<)/,
          lookbehind: true
        },
        {
          // We don't want to match >>
          pattern: /([^>])>(?!>)/,
          lookbehind: true
        }
      ],
      punctuation: /<<|>>|[.,%\[\]{}()]/
    };
    Prism.languages.elixir.string.forEach(function(o) {
      o.inside = {
        interpolation: {
          pattern: /#\{[^}]+\}/,
          inside: {
            delimiter: {
              pattern: /^#\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism.languages.elixir
          }
        }
      };
    });
  }
  return elixir_1;
}
var elixirExports = requireElixir();
const elixir = /* @__PURE__ */ getDefaultExportFromCjs(elixirExports);
const elixir$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: elixir
}, [elixirExports]);
export {
  elixir$1 as e
};
