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
var nim_1;
var hasRequiredNim;
function requireNim() {
  if (hasRequiredNim) return nim_1;
  hasRequiredNim = 1;
  nim_1 = nim2;
  nim2.displayName = "nim";
  nim2.aliases = [];
  function nim2(Prism) {
    Prism.languages.nim = {
      comment: {
        pattern: /#.*/,
        greedy: true
      },
      string: {
        // Double-quoted strings can be prefixed by an identifier (Generalized raw string literals)
        pattern: /(?:\b(?!\d)(?:\w|\\x[89a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")/,
        greedy: true
      },
      char: {
        // Character literals are handled specifically to prevent issues with numeric type suffixes
        pattern: /'(?:\\(?:\d+|x[\da-fA-F]{0,2}|.)|[^'])'/,
        greedy: true
      },
      function: {
        pattern: /(?:(?!\d)(?:\w|\\x[89a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,
        greedy: true,
        inside: {
          operator: /\*$/
        }
      },
      // We don't want to highlight operators (and anything really) inside backticks
      identifier: {
        pattern: /`[^`\r\n]+`/,
        greedy: true,
        inside: {
          punctuation: /`/
        }
      },
      // The negative look ahead prevents wrong highlighting of the .. operator
      number: /\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,
      keyword: /\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,
      operator: {
        // Look behind and look ahead prevent wrong highlighting of punctuations [. .] {. .} (. .)
        // but allow the slice operator .. to take precedence over them
        // One can define his own operators in Nim so all combination of operators might be an operator.
        pattern: /(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|in|is|isnot|mod|not|notin|of|or|shl|shr|xor)\b)/m,
        lookbehind: true
      },
      punctuation: /[({\[]\.|\.[)}\]]|[`(){}\[\],:]/
    };
  }
  return nim_1;
}
var nimExports = requireNim();
const nim = /* @__PURE__ */ getDefaultExportFromCjs(nimExports);
const nim$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: nim
}, [nimExports]);
export {
  nim$1 as n
};
