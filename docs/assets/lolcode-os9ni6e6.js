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
var lolcode_1;
var hasRequiredLolcode;
function requireLolcode() {
  if (hasRequiredLolcode) return lolcode_1;
  hasRequiredLolcode = 1;
  lolcode_1 = lolcode2;
  lolcode2.displayName = "lolcode";
  lolcode2.aliases = [];
  function lolcode2(Prism) {
    Prism.languages.lolcode = {
      comment: [/\bOBTW\s[\s\S]*?\sTLDR\b/, /\bBTW.+/],
      string: {
        pattern: /"(?::.|[^":])*"/,
        inside: {
          variable: /:\{[^}]+\}/,
          symbol: [/:\([a-f\d]+\)/i, /:\[[^\]]+\]/, /:[)>o":]/]
        },
        greedy: true
      },
      number: /(?:\B-)?(?:\b\d+(?:\.\d*)?|\B\.\d+)/,
      symbol: {
        pattern: /(^|\s)(?:A )?(?:BUKKIT|NOOB|NUMBAR|NUMBR|TROOF|YARN)(?=\s|,|$)/,
        lookbehind: true,
        inside: {
          keyword: /A(?=\s)/
        }
      },
      label: {
        pattern: /((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,
        lookbehind: true,
        alias: "string"
      },
      function: {
        pattern: /((?:^|\s)(?:HOW IZ I|I IZ|IZ) )[a-zA-Z]\w*/,
        lookbehind: true
      },
      keyword: [
        {
          pattern: /(^|\s)(?:AN|FOUND YR|GIMMEH|GTFO|HAI|HAS A|HOW IZ I|I HAS A|I IZ|IF U SAY SO|IM IN YR|IM OUTTA YR|IS NOW(?: A)?|ITZ(?: A)?|IZ|KTHX|KTHXBYE|LIEK(?: A)?|MAEK|MEBBE|MKAY|NERFIN|NO WAI|O HAI IM|O RLY\?|OIC|OMG|OMGWTF|R|SMOOSH|SRS|TIL|UPPIN|VISIBLE|WILE|WTF\?|YA RLY|YR)(?=\s|,|$)/,
          lookbehind: true
        },
        /'Z(?=\s|,|$)/
      ],
      boolean: {
        pattern: /(^|\s)(?:FAIL|WIN)(?=\s|,|$)/,
        lookbehind: true
      },
      variable: {
        pattern: /(^|\s)IT(?=\s|,|$)/,
        lookbehind: true
      },
      operator: {
        pattern: /(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:ALL|ANY|BIGGR|BOTH|DIFF|EITHER|MOD|PRODUKT|QUOSHUNT|SMALLR|SUM|WON) OF)(?=\s|,|$)/,
        lookbehind: true
      },
      punctuation: /\.{3}|…|,|!/
    };
  }
  return lolcode_1;
}
var lolcodeExports = requireLolcode();
const lolcode = /* @__PURE__ */ getDefaultExportFromCjs(lolcodeExports);
const lolcode$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: lolcode
}, [lolcodeExports]);
export {
  lolcode$1 as l
};
