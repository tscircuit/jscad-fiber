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
var agda_1;
var hasRequiredAgda;
function requireAgda() {
  if (hasRequiredAgda) return agda_1;
  hasRequiredAgda = 1;
  agda_1 = agda2;
  agda2.displayName = "agda";
  agda2.aliases = [];
  function agda2(Prism) {
    (function(Prism2) {
      Prism2.languages.agda = {
        comment: /\{-[\s\S]*?(?:-\}|$)|--.*/,
        string: {
          pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
          greedy: true
        },
        punctuation: /[(){}⦃⦄.;@]/,
        "class-name": {
          pattern: /((?:data|record) +)\S+/,
          lookbehind: true
        },
        function: {
          pattern: /(^[ \t]*)(?!\s)[^:\r\n]+(?=:)/m,
          lookbehind: true
        },
        operator: {
          pattern: /(^\s*|\s)(?:[=|:∀→λ\\?_]|->)(?=\s)/,
          lookbehind: true
        },
        keyword: /\b(?:Set|abstract|constructor|data|eta-equality|field|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)\b/
      };
    })(Prism);
  }
  return agda_1;
}
var agdaExports = requireAgda();
const agda = /* @__PURE__ */ getDefaultExportFromCjs(agdaExports);
const agda$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: agda
}, [agdaExports]);
export {
  agda$1 as a
};
