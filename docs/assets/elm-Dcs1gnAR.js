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
var elm_1;
var hasRequiredElm;
function requireElm() {
  if (hasRequiredElm) return elm_1;
  hasRequiredElm = 1;
  elm_1 = elm2;
  elm2.displayName = "elm";
  elm2.aliases = [];
  function elm2(Prism) {
    Prism.languages.elm = {
      comment: /--.*|\{-[\s\S]*?-\}/,
      char: {
        pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+|u\{[0-9a-fA-F]+\}))'/,
        greedy: true
      },
      string: [
        {
          // Multiline strings are wrapped in triple ". Quotes may appear unescaped.
          pattern: /"""[\s\S]*?"""/,
          greedy: true
        },
        {
          pattern: /"(?:[^\\"\r\n]|\\.)*"/,
          greedy: true
        }
      ],
      "import-statement": {
        // The imported or hidden names are not included in this import
        // statement. This is because we want to highlight those exactly like
        // we do for the names in the program.
        pattern: /(^[\t ]*)import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+(?:[A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
        lookbehind: true,
        inside: {
          keyword: /\b(?:as|exposing|import)\b/
        }
      },
      keyword: /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
      // These are builtin variables only. Constructors are highlighted later as a constant.
      builtin: /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
      // decimal integers and floating point numbers | hexadecimal integers
      number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
      // Most of this is needed because of the meaning of a single '.'.
      // If it stands alone freely, it is the function composition.
      // It may also be a separator between a module name and an identifier => no
      // operator. If it comes together with other special characters it is an
      // operator too.
      // Valid operator characters in 0.18: +-/*=.$<>:&|^?%#@~!
      // Ref: https://groups.google.com/forum/#!msg/elm-dev/0AHSnDdkSkQ/E0SVU70JEQAJ
      operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,
      // In Elm, nearly everything is a variable, do not highlight these.
      hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
      constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
      punctuation: /[{}[\]|(),.:]/
    };
  }
  return elm_1;
}
var elmExports = requireElm();
const elm = /* @__PURE__ */ getDefaultExportFromCjs(elmExports);
const elm$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: elm
}, [elmExports]);
export {
  elm$1 as e
};
