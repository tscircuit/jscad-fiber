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
var stylus_1;
var hasRequiredStylus;
function requireStylus() {
  if (hasRequiredStylus) return stylus_1;
  hasRequiredStylus = 1;
  stylus_1 = stylus2;
  stylus2.displayName = "stylus";
  stylus2.aliases = [];
  function stylus2(Prism) {
    (function(Prism2) {
      var unit = {
        pattern: /(\b\d+)(?:%|[a-z]+)/,
        lookbehind: true
      };
      var number = {
        pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
        lookbehind: true
      };
      var inside = {
        comment: {
          pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
          lookbehind: true
        },
        url: {
          pattern: /\burl\((["']?).*?\1\)/i,
          greedy: true
        },
        string: {
          pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
          greedy: true
        },
        interpolation: null,
        // See below
        func: null,
        // See below
        important: /\B!(?:important|optional)\b/i,
        keyword: {
          pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
          lookbehind: true
        },
        hexcode: /#[\da-f]{3,6}/i,
        color: [
          /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
          {
            pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
            inside: {
              unit,
              number,
              function: /[\w-]+(?=\()/,
              punctuation: /[(),]/
            }
          }
        ],
        entity: /\\[\da-f]{1,8}/i,
        unit,
        boolean: /\b(?:false|true)\b/,
        operator: [
          // We want non-word chars around "-" because it is
          // accepted in property names.
          /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/
        ],
        number,
        punctuation: /[{}()\[\];:,]/
      };
      inside["interpolation"] = {
        pattern: /\{[^\r\n}:]+\}/,
        alias: "variable",
        inside: {
          delimiter: {
            pattern: /^\{|\}$/,
            alias: "punctuation"
          },
          rest: inside
        }
      };
      inside["func"] = {
        pattern: /[\w-]+\([^)]*\).*/,
        inside: {
          function: /^[^(]+/,
          rest: inside
        }
      };
      Prism2.languages.stylus = {
        "atrule-declaration": {
          pattern: /(^[ \t]*)@.+/m,
          lookbehind: true,
          inside: {
            atrule: /^@[\w-]+/,
            rest: inside
          }
        },
        "variable-declaration": {
          pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
          lookbehind: true,
          inside: {
            variable: /^\S+/,
            rest: inside
          }
        },
        statement: {
          pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
          lookbehind: true,
          inside: {
            keyword: /^\S+/,
            rest: inside
          }
        },
        // A property/value pair cannot end with a comma or a brace
        // It cannot have indented content unless it ended with a semicolon
        "property-declaration": {
          pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
          lookbehind: true,
          inside: {
            property: {
              pattern: /^[^\s:]+/,
              inside: {
                interpolation: inside.interpolation
              }
            },
            rest: inside
          }
        },
        // A selector can contain parentheses only as part of a pseudo-element
        // It can span multiple lines.
        // It must end with a comma or an accolade or have indented content.
        selector: {
          pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
          lookbehind: true,
          inside: {
            interpolation: inside.interpolation,
            comment: inside.comment,
            punctuation: /[{},]/
          }
        },
        func: inside.func,
        string: inside.string,
        comment: {
          pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
          lookbehind: true,
          greedy: true
        },
        interpolation: inside.interpolation,
        punctuation: /[{}()\[\];:.]/
      };
    })(Prism);
  }
  return stylus_1;
}
var stylusExports = requireStylus();
const stylus = /* @__PURE__ */ getDefaultExportFromCjs(stylusExports);
const stylus$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: stylus
}, [stylusExports]);
export {
  stylus$1 as s
};
