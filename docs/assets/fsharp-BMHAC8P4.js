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
var fsharp_1;
var hasRequiredFsharp;
function requireFsharp() {
  if (hasRequiredFsharp) return fsharp_1;
  hasRequiredFsharp = 1;
  fsharp_1 = fsharp2;
  fsharp2.displayName = "fsharp";
  fsharp2.aliases = [];
  function fsharp2(Prism) {
    Prism.languages.fsharp = Prism.languages.extend("clike", {
      comment: [
        {
          pattern: /(^|[^\\])\(\*(?!\))[\s\S]*?\*\)/,
          lookbehind: true,
          greedy: true
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      string: {
        pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?/,
        greedy: true
      },
      "class-name": {
        pattern: /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,
        lookbehind: true,
        inside: {
          operator: /->|\*/,
          punctuation: /\./
        }
      },
      keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|asr|assert|atomic|base|begin|break|checked|class|component|const|constraint|constructor|continue|default|delegate|do|done|downcast|downto|eager|elif|else|end|event|exception|extern|external|false|finally|fixed|for|fun|function|functor|global|if|in|include|inherit|inline|interface|internal|land|lazy|lor|lsl|lsr|lxor|match|member|method|mixin|mod|module|mutable|namespace|new|not|null|object|of|open|or|override|parallel|private|process|protected|public|pure|rec|sealed|select|sig|static|struct|tailcall|then|to|trait|true|try|type|upcast|val|virtual|void|volatile|when|while|with)\b/,
      number: [
        /\b0x[\da-fA-F]+(?:LF|lf|un)?\b/,
        /\b0b[01]+(?:uy|y)?\b/,
        /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,
        /\b\d+(?:[IlLsy]|UL|u[lsy]?)?\b/
      ],
      operator: /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/
    });
    Prism.languages.insertBefore("fsharp", "keyword", {
      preprocessor: {
        pattern: /(^[\t ]*)#.*/m,
        lookbehind: true,
        alias: "property",
        inside: {
          directive: {
            pattern: /(^#)\b(?:else|endif|if|light|line|nowarn)\b/,
            lookbehind: true,
            alias: "keyword"
          }
        }
      }
    });
    Prism.languages.insertBefore("fsharp", "punctuation", {
      "computation-expression": {
        pattern: /\b[_a-z]\w*(?=\s*\{)/i,
        alias: "keyword"
      }
    });
    Prism.languages.insertBefore("fsharp", "string", {
      annotation: {
        pattern: /\[<.+?>\]/,
        greedy: true,
        inside: {
          punctuation: /^\[<|>\]$/,
          "class-name": {
            pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,
            lookbehind: true
          },
          "annotation-content": {
            pattern: /[\s\S]+/,
            inside: Prism.languages.fsharp
          }
        }
      },
      char: {
        pattern: /'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,
        greedy: true
      }
    });
  }
  return fsharp_1;
}
var fsharpExports = requireFsharp();
const fsharp = /* @__PURE__ */ getDefaultExportFromCjs(fsharpExports);
const fsharp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: fsharp
}, [fsharpExports]);
export {
  fsharp$1 as f
};
