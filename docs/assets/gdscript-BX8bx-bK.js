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
var gdscript_1;
var hasRequiredGdscript;
function requireGdscript() {
  if (hasRequiredGdscript) return gdscript_1;
  hasRequiredGdscript = 1;
  gdscript_1 = gdscript2;
  gdscript2.displayName = "gdscript";
  gdscript2.aliases = [];
  function gdscript2(Prism) {
    Prism.languages.gdscript = {
      comment: /#.*/,
      string: {
        pattern: /@?(?:("|')(?:(?!\1)[^\n\\]|\\[\s\S])*\1(?!"|')|"""(?:[^\\]|\\[\s\S])*?""")/,
        greedy: true
      },
      "class-name": {
        // class_name Foo, extends Bar, class InnerClass
        // export(int) var baz, export(int, 0) var i
        // as Node
        // const FOO: int = 9, var bar: bool = true
        // func add(reference: Item, amount: int) -> Item:
        pattern: /(^(?:class|class_name|extends)[ \t]+|^export\([ \t]*|\bas[ \t]+|(?:\b(?:const|var)[ \t]|[,(])[ \t]*\w+[ \t]*:[ \t]*|->[ \t]*)[a-zA-Z_]\w*/m,
        lookbehind: true
      },
      keyword: /\b(?:and|as|assert|break|breakpoint|class|class_name|const|continue|elif|else|enum|export|extends|for|func|if|in|is|master|mastersync|match|not|null|onready|or|pass|preload|puppet|puppetsync|remote|remotesync|return|self|setget|signal|static|tool|var|while|yield)\b/,
      function: /\b[a-z_]\w*(?=[ \t]*\()/i,
      variable: /\$\w+/,
      number: [
        /\b0b[01_]+\b|\b0x[\da-fA-F_]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.[\d_]+)(?:e[+-]?[\d_]+)?\b/,
        /\b(?:INF|NAN|PI|TAU)\b/
      ],
      constant: /\b[A-Z][A-Z_\d]*\b/,
      boolean: /\b(?:false|true)\b/,
      operator: /->|:=|&&|\|\||<<|>>|[-+*/%&|!<>=]=?|[~^]/,
      punctuation: /[.:,;()[\]{}]/
    };
  }
  return gdscript_1;
}
var gdscriptExports = requireGdscript();
const gdscript = /* @__PURE__ */ getDefaultExportFromCjs(gdscriptExports);
const gdscript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: gdscript
}, [gdscriptExports]);
export {
  gdscript$1 as g
};
