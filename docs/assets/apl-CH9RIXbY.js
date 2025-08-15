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
var apl_1;
var hasRequiredApl;
function requireApl() {
  if (hasRequiredApl) return apl_1;
  hasRequiredApl = 1;
  apl_1 = apl2;
  apl2.displayName = "apl";
  apl2.aliases = [];
  function apl2(Prism) {
    Prism.languages.apl = {
      comment: /(?:⍝|#[! ]).*$/m,
      string: {
        pattern: /'(?:[^'\r\n]|'')*'/,
        greedy: true
      },
      number: /¯?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+)?|¯|∞))?/i,
      statement: /:[A-Z][a-z][A-Za-z]*\b/,
      "system-function": {
        pattern: /⎕[A-Z]+/i,
        alias: "function"
      },
      constant: /[⍬⌾#⎕⍞]/,
      function: /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
      "monadic-operator": {
        pattern: /[\\\/⌿⍀¨⍨⌶&∥]/,
        alias: "operator"
      },
      "dyadic-operator": {
        pattern: /[.⍣⍠⍤∘⌸@⌺⍥]/,
        alias: "operator"
      },
      assignment: {
        pattern: /←/,
        alias: "keyword"
      },
      punctuation: /[\[;\]()◇⋄]/,
      dfn: {
        pattern: /[{}⍺⍵⍶⍹∇⍫:]/,
        alias: "builtin"
      }
    };
  }
  return apl_1;
}
var aplExports = requireApl();
const apl = /* @__PURE__ */ getDefaultExportFromCjs(aplExports);
const apl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: apl
}, [aplExports]);
export {
  apl$1 as a
};
