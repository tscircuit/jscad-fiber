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
var squirrel_1;
var hasRequiredSquirrel;
function requireSquirrel() {
  if (hasRequiredSquirrel) return squirrel_1;
  hasRequiredSquirrel = 1;
  squirrel_1 = squirrel2;
  squirrel2.displayName = "squirrel";
  squirrel2.aliases = [];
  function squirrel2(Prism) {
    Prism.languages.squirrel = Prism.languages.extend("clike", {
      comment: [
        Prism.languages.clike["comment"][0],
        {
          pattern: /(^|[^\\:])(?:\/\/|#).*/,
          lookbehind: true,
          greedy: true
        }
      ],
      string: {
        pattern: /(^|[^\\"'@])(?:@"(?:[^"]|"")*"(?!")|"(?:[^\\\r\n"]|\\.)*")/,
        lookbehind: true,
        greedy: true
      },
      "class-name": {
        pattern: /(\b(?:class|enum|extends|instanceof)\s+)\w+(?:\.\w+)*/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      },
      keyword: /\b(?:__FILE__|__LINE__|base|break|case|catch|class|clone|const|constructor|continue|default|delete|else|enum|extends|for|foreach|function|if|in|instanceof|local|null|resume|return|static|switch|this|throw|try|typeof|while|yield)\b/,
      number: /\b(?:0x[0-9a-fA-F]+|\d+(?:\.(?:\d+|[eE][+-]?\d+))?)\b/,
      operator: /\+\+|--|<=>|<[-<]|>>>?|&&?|\|\|?|[-+*/%!=<>]=?|[~^]|::?/,
      punctuation: /[(){}\[\],;.]/
    });
    Prism.languages.insertBefore("squirrel", "string", {
      char: {
        pattern: /(^|[^\\"'])'(?:[^\\']|\\(?:[xuU][0-9a-fA-F]{0,8}|[\s\S]))'/,
        lookbehind: true,
        greedy: true
      }
    });
    Prism.languages.insertBefore("squirrel", "operator", {
      "attribute-punctuation": {
        pattern: /<\/|\/>/,
        alias: "important"
      },
      lambda: {
        pattern: /@(?=\()/,
        alias: "operator"
      }
    });
  }
  return squirrel_1;
}
var squirrelExports = requireSquirrel();
const squirrel = /* @__PURE__ */ getDefaultExportFromCjs(squirrelExports);
const squirrel$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: squirrel
}, [squirrelExports]);
export {
  squirrel$1 as s
};
