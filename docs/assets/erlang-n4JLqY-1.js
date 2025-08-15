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
var erlang_1;
var hasRequiredErlang;
function requireErlang() {
  if (hasRequiredErlang) return erlang_1;
  hasRequiredErlang = 1;
  erlang_1 = erlang2;
  erlang2.displayName = "erlang";
  erlang2.aliases = [];
  function erlang2(Prism) {
    Prism.languages.erlang = {
      comment: /%.+/,
      string: {
        pattern: /"(?:\\.|[^\\"\r\n])*"/,
        greedy: true
      },
      "quoted-function": {
        pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
        alias: "function"
      },
      "quoted-atom": {
        pattern: /'(?:\\.|[^\\'\r\n])+'/,
        alias: "atom"
      },
      boolean: /\b(?:false|true)\b/,
      keyword: /\b(?:after|case|catch|end|fun|if|of|receive|try|when)\b/,
      number: [
        /\$\\?./,
        /\b\d+#[a-z0-9]+/i,
        /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i
      ],
      function: /\b[a-z][\w@]*(?=\()/,
      variable: {
        // Look-behind is used to prevent wrong highlighting of atoms containing "@"
        pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
        lookbehind: true
      },
      operator: [
        /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:and|andalso|band|bnot|bor|bsl|bsr|bxor|div|not|or|orelse|rem|xor)\b/,
        {
          // We don't want to match <<
          pattern: /(^|[^<])<(?!<)/,
          lookbehind: true
        },
        {
          // We don't want to match >>
          pattern: /(^|[^>])>(?!>)/,
          lookbehind: true
        }
      ],
      atom: /\b[a-z][\w@]*/,
      punctuation: /[()[\]{}:;,.#|]|<<|>>/
    };
  }
  return erlang_1;
}
var erlangExports = requireErlang();
const erlang = /* @__PURE__ */ getDefaultExportFromCjs(erlangExports);
const erlang$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: erlang
}, [erlangExports]);
export {
  erlang$1 as e
};
