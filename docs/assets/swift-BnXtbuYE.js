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
var swift_1;
var hasRequiredSwift;
function requireSwift() {
  if (hasRequiredSwift) return swift_1;
  hasRequiredSwift = 1;
  swift_1 = swift2;
  swift2.displayName = "swift";
  swift2.aliases = [];
  function swift2(Prism) {
    Prism.languages.swift = {
      comment: {
        // Nested comments are supported up to 2 levels
        pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
        lookbehind: true,
        greedy: true
      },
      "string-literal": [
        // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
        {
          pattern: RegExp(
            /(^|[^"#])/.source + "(?:" + // single-line string
            /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + // multi-line string
            /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            interpolation: {
              pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
              lookbehind: true,
              inside: null
              // see below
            },
            "interpolation-punctuation": {
              pattern: /^\)|\\\($/,
              alias: "punctuation"
            },
            punctuation: /\\(?=[\r\n])/,
            string: /[\s\S]+/
          }
        },
        {
          pattern: RegExp(
            /(^|[^"#])(#+)/.source + "(?:" + // single-line string
            /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + // multi-line string
            /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            interpolation: {
              pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
              lookbehind: true,
              inside: null
              // see below
            },
            "interpolation-punctuation": {
              pattern: /^\)|\\#+\($/,
              alias: "punctuation"
            },
            string: /[\s\S]+/
          }
        }
      ],
      directive: {
        // directives with conditions
        pattern: RegExp(
          /#/.source + "(?:" + (/(?:elseif|if)\b/.source + "(?:[ 	]*" + // This regex is a little complex. It's equivalent to this:
          //   (?:![ \t]*)?(?:\b\w+\b(?:[ \t]*<round>)?|<round>)(?:[ \t]*(?:&&|\|\|))?
          // where <round> is a general parentheses expression.
          /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+") + "|" + /(?:else|endif)\b/.source + ")"
        ),
        alias: "property",
        inside: {
          "directive-name": /^#\w+/,
          boolean: /\b(?:false|true)\b/,
          number: /\b\d+(?:\.\d+)*\b/,
          operator: /!|&&|\|\||[<>]=?/,
          punctuation: /[(),]/
        }
      },
      literal: {
        pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
        alias: "constant"
      },
      "other-directive": {
        pattern: /#\w+\b/,
        alias: "property"
      },
      attribute: {
        pattern: /@\w+/,
        alias: "atrule"
      },
      "function-definition": {
        pattern: /(\bfunc\s+)\w+/,
        lookbehind: true,
        alias: "function"
      },
      label: {
        // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
        pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
        lookbehind: true,
        alias: "important"
      },
      keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
      boolean: /\b(?:false|true)\b/,
      nil: {
        pattern: /\bnil\b/,
        alias: "constant"
      },
      "short-argument": /\$\d+\b/,
      omit: {
        pattern: /\b_\b/,
        alias: "keyword"
      },
      number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
      // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
      "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
      function: /\b[a-z_]\w*(?=\s*\()/i,
      constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
      // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
      // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
      // This regex only supports ASCII operators.
      operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
      punctuation: /[{}[\]();,.:\\]/
    };
    Prism.languages.swift["string-literal"].forEach(function(rule) {
      rule.inside["interpolation"].inside = Prism.languages.swift;
    });
  }
  return swift_1;
}
var swiftExports = requireSwift();
const swift = /* @__PURE__ */ getDefaultExportFromCjs(swiftExports);
const swift$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: swift
}, [swiftExports]);
export {
  swift$1 as s
};
