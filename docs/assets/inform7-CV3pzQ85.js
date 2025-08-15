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
var inform7_1;
var hasRequiredInform7;
function requireInform7() {
  if (hasRequiredInform7) return inform7_1;
  hasRequiredInform7 = 1;
  inform7_1 = inform72;
  inform72.displayName = "inform7";
  inform72.aliases = [];
  function inform72(Prism) {
    Prism.languages.inform7 = {
      string: {
        pattern: /"[^"]*"/,
        inside: {
          substitution: {
            pattern: /\[[^\[\]]+\]/,
            inside: {
              delimiter: {
                pattern: /\[|\]/,
                alias: "punctuation"
              }
              // See rest below
            }
          }
        }
      },
      comment: {
        pattern: /\[[^\[\]]+\]/,
        greedy: true
      },
      title: {
        pattern: /^[ \t]*(?:book|chapter|part(?! of)|section|table|volume)\b.+/im,
        alias: "important"
      },
      number: {
        pattern: /(^|[^-])(?:\b\d+(?:\.\d+)?(?:\^\d+)?(?:(?!\d)\w+)?|\b(?:eight|eleven|five|four|nine|one|seven|six|ten|three|twelve|two))\b(?!-)/i,
        lookbehind: true
      },
      verb: {
        pattern: /(^|[^-])\b(?:answering|applying to|are|asking|attacking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:ing|s)?|consulting|contain(?:ing|s)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:s|ve|ving)|hold(?:ing|s)?|impl(?:ies|y)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:ing|s)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:ing|s)?|setting|showing|singing|sleeping|smelling|squeezing|support(?:ing|s)?|swearing|switching|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:ing|s)?|var(?:ies|y|ying)|waiting|waking|waving|wear(?:ing|s)?)\b(?!-)/i,
        lookbehind: true,
        alias: "operator"
      },
      keyword: {
        pattern: /(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|the story|unless)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,
        lookbehind: true
      },
      property: {
        pattern: /(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: off| on)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,
        lookbehind: true,
        alias: "symbol"
      },
      position: {
        pattern: /(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,
        lookbehind: true,
        alias: "keyword"
      },
      type: {
        pattern: /(^|[^-])\b(?:actions?|activit(?:ies|y)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,
        lookbehind: true,
        alias: "variable"
      },
      punctuation: /[.,:;(){}]/
    };
    Prism.languages.inform7["string"].inside["substitution"].inside.rest = Prism.languages.inform7;
    Prism.languages.inform7["string"].inside["substitution"].inside.rest.text = {
      pattern: /\S(?:\s*\S)*/,
      alias: "comment"
    };
  }
  return inform7_1;
}
var inform7Exports = requireInform7();
const inform7 = /* @__PURE__ */ getDefaultExportFromCjs(inform7Exports);
const inform7$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: inform7
}, [inform7Exports]);
export {
  inform7$1 as i
};
