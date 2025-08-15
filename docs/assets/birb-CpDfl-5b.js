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
var birb_1;
var hasRequiredBirb;
function requireBirb() {
  if (hasRequiredBirb) return birb_1;
  hasRequiredBirb = 1;
  birb_1 = birb2;
  birb2.displayName = "birb";
  birb2.aliases = [];
  function birb2(Prism) {
    Prism.languages.birb = Prism.languages.extend("clike", {
      string: {
        pattern: /r?("|')(?:\\.|(?!\1)[^\\])*\1/,
        greedy: true
      },
      "class-name": [
        /\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/,
        // matches variable and function return types (parameters as well).
        /\b(?:[A-Z]\w*|(?!(?:var|void)\b)[a-z]\w*)(?=\s+\w+\s*[;,=()])/
      ],
      keyword: /\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|new|next|noSeeb|return|static|switch|throw|var|void|while)\b/,
      operator: /\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/,
      variable: /\b[a-z_]\w*\b/
    });
    Prism.languages.insertBefore("birb", "function", {
      metadata: {
        pattern: /<\w+>/,
        greedy: true,
        alias: "symbol"
      }
    });
  }
  return birb_1;
}
var birbExports = requireBirb();
const birb = /* @__PURE__ */ getDefaultExportFromCjs(birbExports);
const birb$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: birb
}, [birbExports]);
export {
  birb$1 as b
};
