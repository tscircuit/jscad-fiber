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
var unrealscript_1;
var hasRequiredUnrealscript;
function requireUnrealscript() {
  if (hasRequiredUnrealscript) return unrealscript_1;
  hasRequiredUnrealscript = 1;
  unrealscript_1 = unrealscript2;
  unrealscript2.displayName = "unrealscript";
  unrealscript2.aliases = ["uc", "uscript"];
  function unrealscript2(Prism) {
    Prism.languages.unrealscript = {
      comment: /\/\/.*|\/\*[\s\S]*?\*\//,
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      category: {
        pattern: /(\b(?:(?:autoexpand|hide|show)categories|var)\s*\()[^()]+(?=\))/,
        lookbehind: true,
        greedy: true,
        alias: "property"
      },
      metadata: {
        pattern: /(\w\s*)<\s*\w+\s*=[^<>|=\r\n]+(?:\|\s*\w+\s*=[^<>|=\r\n]+)*>/,
        lookbehind: true,
        greedy: true,
        inside: {
          property: /\b\w+(?=\s*=)/,
          operator: /=/,
          punctuation: /[<>|]/
        }
      },
      macro: {
        pattern: /`\w+/,
        alias: "property"
      },
      "class-name": {
        pattern: /(\b(?:class|enum|extends|interface|state(?:\(\))?|struct|within)\s+)\w+/,
        lookbehind: true
      },
      keyword: /\b(?:abstract|actor|array|auto|autoexpandcategories|bool|break|byte|case|class|classgroup|client|coerce|collapsecategories|config|const|continue|default|defaultproperties|delegate|dependson|deprecated|do|dontcollapsecategories|editconst|editinlinenew|else|enum|event|exec|export|extends|final|float|for|forcescriptorder|foreach|function|goto|guid|hidecategories|hidedropdown|if|ignores|implements|inherits|input|int|interface|iterator|latent|local|material|name|native|nativereplication|noexport|nontransient|noteditinlinenew|notplaceable|operator|optional|out|pawn|perobjectconfig|perobjectlocalized|placeable|postoperator|preoperator|private|protected|reliable|replication|return|server|showcategories|simulated|singular|state|static|string|struct|structdefault|structdefaultproperties|switch|texture|transient|travel|unreliable|until|var|vector|while|within)\b/,
      function: /\b[a-z_]\w*(?=\s*\()/i,
      boolean: /\b(?:false|true)\b/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      // https://docs.unrealengine.com/udk/Three/UnrealScriptExpressions.html
      operator: />>|<<|--|\+\+|\*\*|[-+*/~!=<>$@]=?|&&?|\|\|?|\^\^?|[?:%]|\b(?:ClockwiseFrom|Cross|Dot)\b/,
      punctuation: /[()[\]{};,.]/
    };
    Prism.languages.uc = Prism.languages.uscript = Prism.languages.unrealscript;
  }
  return unrealscript_1;
}
var unrealscriptExports = requireUnrealscript();
const unrealscript = /* @__PURE__ */ getDefaultExportFromCjs(unrealscriptExports);
const unrealscript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: unrealscript
}, [unrealscriptExports]);
export {
  unrealscript$1 as u
};
