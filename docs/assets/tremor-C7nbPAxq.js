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
var tremor_1;
var hasRequiredTremor;
function requireTremor() {
  if (hasRequiredTremor) return tremor_1;
  hasRequiredTremor = 1;
  tremor_1 = tremor2;
  tremor2.displayName = "tremor";
  tremor2.aliases = [];
  function tremor2(Prism) {
    (function(Prism2) {
      Prism2.languages.tremor = {
        comment: {
          pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
          lookbehind: true
        },
        "interpolated-string": null,
        // see below
        extractor: {
          pattern: /\b[a-z_]\w*\|(?:[^\r\n\\|]|\\(?:\r\n|[\s\S]))*\|/i,
          greedy: true,
          inside: {
            regex: {
              pattern: /(^re)\|[\s\S]+/,
              lookbehind: true
            },
            function: /^\w+/,
            value: /\|[\s\S]+/
          }
        },
        identifier: {
          pattern: /`[^`]*`/,
          greedy: true
        },
        function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())\b/,
        keyword: /\b(?:args|as|by|case|config|connect|connector|const|copy|create|default|define|deploy|drop|each|emit|end|erase|event|flow|fn|for|from|group|having|insert|into|intrinsic|let|links|match|merge|mod|move|of|operator|patch|pipeline|recur|script|select|set|sliding|state|stream|to|tumbling|update|use|when|where|window|with)\b/,
        boolean: /\b(?:false|null|true)\b/i,
        number: /\b(?:0b[01_]*|0x[0-9a-fA-F_]*|\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee][+-]?[\d_]+)?)\b/,
        "pattern-punctuation": {
          pattern: /%(?=[({[])/,
          alias: "punctuation"
        },
        operator: /[-+*\/%~!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?>?=?|(?:absent|and|not|or|present|xor)\b/,
        punctuation: /::|[;\[\]()\{\},.:]/
      };
      var interpolationPattern = /#\{(?:[^"{}]|\{[^{}]*\}|"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*")*\}/.source;
      Prism2.languages.tremor["interpolated-string"] = {
        pattern: RegExp(
          /(^|[^\\])/.source + '(?:"""(?:' + /[^"\\#]|\\[\s\S]|"(?!"")|#(?!\{)/.source + "|" + interpolationPattern + ')*"""|"(?:' + /[^"\\\r\n#]|\\(?:\r\n|[\s\S])|#(?!\{)/.source + "|" + interpolationPattern + ')*")'
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          interpolation: {
            pattern: RegExp(interpolationPattern),
            inside: {
              punctuation: /^#\{|\}$/,
              expression: {
                pattern: /[\s\S]+/,
                inside: Prism2.languages.tremor
              }
            }
          },
          string: /[\s\S]+/
        }
      };
      Prism2.languages.troy = Prism2.languages["tremor"];
      Prism2.languages.trickle = Prism2.languages["tremor"];
    })(Prism);
  }
  return tremor_1;
}
var tremorExports = requireTremor();
const tremor = /* @__PURE__ */ getDefaultExportFromCjs(tremorExports);
const tremor$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: tremor
}, [tremorExports]);
export {
  tremor$1 as t
};
