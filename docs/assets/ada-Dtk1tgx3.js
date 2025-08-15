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
var ada_1;
var hasRequiredAda;
function requireAda() {
  if (hasRequiredAda) return ada_1;
  hasRequiredAda = 1;
  ada_1 = ada2;
  ada2.displayName = "ada";
  ada2.aliases = [];
  function ada2(Prism) {
    Prism.languages.ada = {
      comment: /--.*/,
      string: /"(?:""|[^"\r\f\n])*"/,
      number: [
        {
          pattern: /\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i
        },
        {
          pattern: /\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i
        }
      ],
      "attr-name": /\b'\w+/,
      keyword: /\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|new|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|return|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,
      boolean: /\b(?:false|true)\b/i,
      operator: /<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,
      punctuation: /\.\.?|[,;():]/,
      char: /'.'/,
      variable: /\b[a-z](?:\w)*\b/i
    };
  }
  return ada_1;
}
var adaExports = requireAda();
const ada = /* @__PURE__ */ getDefaultExportFromCjs(adaExports);
const ada$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: ada
}, [adaExports]);
export {
  ada$1 as a
};
