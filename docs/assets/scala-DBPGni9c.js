import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireJava } from "./java-M3oaxAC_.js";
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
var scala_1;
var hasRequiredScala;
function requireScala() {
  if (hasRequiredScala) return scala_1;
  hasRequiredScala = 1;
  var refractorJava = requireJava();
  scala_1 = scala2;
  scala2.displayName = "scala";
  scala2.aliases = [];
  function scala2(Prism) {
    Prism.register(refractorJava);
    Prism.languages.scala = Prism.languages.extend("java", {
      "triple-quoted-string": {
        pattern: /"""[\s\S]*?"""/,
        greedy: true,
        alias: "string"
      },
      string: {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      keyword: /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
      number: /\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,
      builtin: /\b(?:Any|AnyRef|AnyVal|Boolean|Byte|Char|Double|Float|Int|Long|Nothing|Short|String|Unit)\b/,
      symbol: /'[^\d\s\\]\w*/
    });
    Prism.languages.insertBefore("scala", "triple-quoted-string", {
      "string-interpolation": {
        pattern: /\b[a-z]\w*(?:"""(?:[^$]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*?"""|"(?:[^$"\r\n]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*")/i,
        greedy: true,
        inside: {
          id: {
            pattern: /^\w+/,
            greedy: true,
            alias: "function"
          },
          escape: {
            pattern: /\\\$"|\$[$"]/,
            greedy: true,
            alias: "symbol"
          },
          interpolation: {
            pattern: /\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,
            greedy: true,
            inside: {
              punctuation: /^\$\{?|\}$/,
              expression: {
                pattern: /[\s\S]+/,
                inside: Prism.languages.scala
              }
            }
          },
          string: /[\s\S]+/
        }
      }
    });
    delete Prism.languages.scala["class-name"];
    delete Prism.languages.scala["function"];
  }
  return scala_1;
}
var scalaExports = requireScala();
const scala = /* @__PURE__ */ getDefaultExportFromCjs(scalaExports);
const scala$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: scala
}, [scalaExports]);
export {
  scala$1 as s
};
