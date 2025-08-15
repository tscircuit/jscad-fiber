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
var velocity_1;
var hasRequiredVelocity;
function requireVelocity() {
  if (hasRequiredVelocity) return velocity_1;
  hasRequiredVelocity = 1;
  velocity_1 = velocity2;
  velocity2.displayName = "velocity";
  velocity2.aliases = [];
  function velocity2(Prism) {
    (function(Prism2) {
      Prism2.languages.velocity = Prism2.languages.extend("markup", {});
      var velocity3 = {
        variable: {
          pattern: /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+\])*|\{[^}]+\})/i,
          lookbehind: true,
          inside: {}
          // See below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        number: /\b\d+\b/,
        boolean: /\b(?:false|true)\b/,
        operator: /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,
        punctuation: /[(){}[\]:,.]/
      };
      velocity3.variable.inside = {
        string: velocity3["string"],
        function: {
          pattern: /([^\w-])[a-z][\w-]*(?=\()/,
          lookbehind: true
        },
        number: velocity3["number"],
        boolean: velocity3["boolean"],
        punctuation: velocity3["punctuation"]
      };
      Prism2.languages.insertBefore("velocity", "comment", {
        unparsed: {
          pattern: /(^|[^\\])#\[\[[\s\S]*?\]\]#/,
          lookbehind: true,
          greedy: true,
          inside: {
            punctuation: /^#\[\[|\]\]#$/
          }
        },
        "velocity-comment": [
          {
            pattern: /(^|[^\\])#\*[\s\S]*?\*#/,
            lookbehind: true,
            greedy: true,
            alias: "comment"
          },
          {
            pattern: /(^|[^\\])##.*/,
            lookbehind: true,
            greedy: true,
            alias: "comment"
          }
        ],
        directive: {
          pattern: /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,
          lookbehind: true,
          inside: {
            keyword: {
              pattern: /^#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})|\bin\b/,
              inside: {
                punctuation: /[{}]/
              }
            },
            rest: velocity3
          }
        },
        variable: velocity3["variable"]
      });
      Prism2.languages.velocity["tag"].inside["attr-value"].inside.rest = Prism2.languages.velocity;
    })(Prism);
  }
  return velocity_1;
}
var velocityExports = requireVelocity();
const velocity = /* @__PURE__ */ getDefaultExportFromCjs(velocityExports);
const velocity$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: velocity
}, [velocityExports]);
export {
  velocity$1 as v
};
