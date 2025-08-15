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
var cssExtras_1;
var hasRequiredCssExtras;
function requireCssExtras() {
  if (hasRequiredCssExtras) return cssExtras_1;
  hasRequiredCssExtras = 1;
  cssExtras_1 = cssExtras2;
  cssExtras2.displayName = "cssExtras";
  cssExtras2.aliases = [];
  function cssExtras2(Prism) {
    (function(Prism2) {
      var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
      var selectorInside;
      Prism2.languages.css.selector = {
        pattern: Prism2.languages.css.selector.pattern,
        lookbehind: true,
        inside: selectorInside = {
          "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
          "pseudo-class": /:[-\w]+/,
          class: /\.[-\w]+/,
          id: /#[-\w]+/,
          attribute: {
            pattern: RegExp(`\\[(?:[^[\\]"']|` + string.source + ")*\\]"),
            greedy: true,
            inside: {
              punctuation: /^\[|\]$/,
              "case-sensitivity": {
                pattern: /(\s)[si]$/i,
                lookbehind: true,
                alias: "keyword"
              },
              namespace: {
                pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                lookbehind: true,
                inside: {
                  punctuation: /\|$/
                }
              },
              "attr-name": {
                pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                lookbehind: true
              },
              "attr-value": [
                string,
                {
                  pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                  lookbehind: true
                }
              ],
              operator: /[|~*^$]?=/
            }
          },
          "n-th": [
            {
              pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
              lookbehind: true,
              inside: {
                number: /[\dn]+/,
                operator: /[+-]/
              }
            },
            {
              pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
              lookbehind: true
            }
          ],
          combinator: />|\+|~|\|\|/,
          // the `tag` token has been existed and removed.
          // because we can't find a perfect tokenize to match it.
          // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
          punctuation: /[(),]/
        }
      };
      Prism2.languages.css["atrule"].inside["selector-function-argument"].inside = selectorInside;
      Prism2.languages.insertBefore("css", "property", {
        variable: {
          pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
          lookbehind: true
        }
      });
      var unit = {
        pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
        lookbehind: true
      };
      var number = {
        pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
        lookbehind: true
      };
      Prism2.languages.insertBefore("css", "function", {
        operator: {
          pattern: /(\s)[+\-*\/](?=\s)/,
          lookbehind: true
        },
        // CAREFUL!
        // Previewers and Inline color use hexcode and color.
        hexcode: {
          pattern: /\B#[\da-f]{3,8}\b/i,
          alias: "color"
        },
        color: [
          {
            pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
            lookbehind: true
          },
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
        // it's important that there is no boundary assertion after the hex digits
        entity: /\\[\da-f]{1,8}/i,
        unit,
        number
      });
    })(Prism);
  }
  return cssExtras_1;
}
var cssExtrasExports = requireCssExtras();
const cssExtras = /* @__PURE__ */ getDefaultExportFromCjs(cssExtrasExports);
const cssExtras$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: cssExtras
}, [cssExtrasExports]);
export {
  cssExtras$1 as c
};
