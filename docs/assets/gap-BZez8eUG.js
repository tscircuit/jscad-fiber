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
var gap_1;
var hasRequiredGap;
function requireGap() {
  if (hasRequiredGap) return gap_1;
  hasRequiredGap = 1;
  gap_1 = gap2;
  gap2.displayName = "gap";
  gap2.aliases = [];
  function gap2(Prism) {
    Prism.languages.gap = {
      shell: {
        pattern: /^gap>[\s\S]*?(?=^gap>|$(?![\s\S]))/m,
        greedy: true,
        inside: {
          gap: {
            pattern: /^(gap>).+(?:(?:\r(?:\n|(?!\n))|\n)>.*)*/,
            lookbehind: true,
            inside: null
            // see below
          },
          punctuation: /^gap>/
        }
      },
      comment: {
        pattern: /#.*/,
        greedy: true
      },
      string: {
        pattern: /(^|[^\\'"])(?:'(?:[^\r\n\\']|\\.){1,10}'|"(?:[^\r\n\\"]|\\.)*"(?!")|"""[\s\S]*?""")/,
        lookbehind: true,
        greedy: true,
        inside: {
          continuation: {
            pattern: /([\r\n])>/,
            lookbehind: true,
            alias: "punctuation"
          }
        }
      },
      keyword: /\b(?:Assert|Info|IsBound|QUIT|TryNextMethod|Unbind|and|atomic|break|continue|do|elif|else|end|fi|for|function|if|in|local|mod|not|od|or|quit|readonly|readwrite|rec|repeat|return|then|until|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b[a-z_]\w*(?=\s*\()/i,
      number: {
        pattern: /(^|[^\w.]|\.\.)(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?:_[a-z]?)?(?=$|[^\w.]|\.\.)/,
        lookbehind: true
      },
      continuation: {
        pattern: /([\r\n])>/,
        lookbehind: true,
        alias: "punctuation"
      },
      operator: /->|[-+*/^~=!]|<>|[<>]=?|:=|\.\./,
      punctuation: /[()[\]{},;.:]/
    };
    Prism.languages.gap.shell.inside.gap.inside = Prism.languages.gap;
  }
  return gap_1;
}
var gapExports = requireGap();
const gap = /* @__PURE__ */ getDefaultExportFromCjs(gapExports);
const gap$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: gap
}, [gapExports]);
export {
  gap$1 as g
};
