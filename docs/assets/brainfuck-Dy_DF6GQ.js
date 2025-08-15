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
var brainfuck_1;
var hasRequiredBrainfuck;
function requireBrainfuck() {
  if (hasRequiredBrainfuck) return brainfuck_1;
  hasRequiredBrainfuck = 1;
  brainfuck_1 = brainfuck2;
  brainfuck2.displayName = "brainfuck";
  brainfuck2.aliases = [];
  function brainfuck2(Prism) {
    Prism.languages.brainfuck = {
      pointer: {
        pattern: /<|>/,
        alias: "keyword"
      },
      increment: {
        pattern: /\+/,
        alias: "inserted"
      },
      decrement: {
        pattern: /-/,
        alias: "deleted"
      },
      branching: {
        pattern: /\[|\]/,
        alias: "important"
      },
      operator: /[.,]/,
      comment: /\S+/
    };
  }
  return brainfuck_1;
}
var brainfuckExports = requireBrainfuck();
const brainfuck = /* @__PURE__ */ getDefaultExportFromCjs(brainfuckExports);
const brainfuck$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: brainfuck
}, [brainfuckExports]);
export {
  brainfuck$1 as b
};
