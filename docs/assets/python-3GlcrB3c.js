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
var python_1;
var hasRequiredPython;
function requirePython() {
  if (hasRequiredPython) return python_1;
  hasRequiredPython = 1;
  python_1 = python2;
  python2.displayName = "python";
  python2.aliases = ["py"];
  function python2(Prism) {
    Prism.languages.python = {
      comment: {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true,
        greedy: true
      },
      "string-interpolation": {
        pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: true,
        inside: {
          interpolation: {
            // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
            pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
            lookbehind: true,
            inside: {
              "format-spec": {
                pattern: /(:)[^:(){}]+(?=\}$)/,
                lookbehind: true
              },
              "conversion-option": {
                pattern: /![sra](?=[:}]$)/,
                alias: "punctuation"
              },
              rest: null
            }
          },
          string: /[\s\S]+/
        }
      },
      "triple-quoted-string": {
        pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
        greedy: true,
        alias: "string"
      },
      string: {
        pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
        greedy: true
      },
      function: {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: true
      },
      "class-name": {
        pattern: /(\bclass\s+)\w+/i,
        lookbehind: true
      },
      decorator: {
        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
        lookbehind: true,
        alias: ["annotation", "punctuation"],
        inside: {
          punctuation: /\./
        }
      },
      keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
      builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
      boolean: /\b(?:False|None|True)\b/,
      number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
      operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
      punctuation: /[{}[\];(),.:]/
    };
    Prism.languages.python["string-interpolation"].inside["interpolation"].inside.rest = Prism.languages.python;
    Prism.languages.py = Prism.languages.python;
  }
  return python_1;
}
var pythonExports = requirePython();
const python = /* @__PURE__ */ getDefaultExportFromCjs(pythonExports);
const python$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: python
}, [pythonExports]);
export {
  python$1 as p
};
