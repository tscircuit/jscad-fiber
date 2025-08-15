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
var ichigojam_1;
var hasRequiredIchigojam;
function requireIchigojam() {
  if (hasRequiredIchigojam) return ichigojam_1;
  hasRequiredIchigojam = 1;
  ichigojam_1 = ichigojam2;
  ichigojam2.displayName = "ichigojam";
  ichigojam2.aliases = [];
  function ichigojam2(Prism) {
    Prism.languages.ichigojam = {
      comment: /(?:\B'|REM)(?:[^\n\r]*)/i,
      string: {
        pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/,
        greedy: true
      },
      number: /\B#[0-9A-F]+|\B`[01]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
      keyword: /\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GOTO|GSB|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RIGHT|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,
      function: /\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,
      label: /(?:\B@\S+)/,
      operator: /<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,
      punctuation: /[\[,;:()\]]/
    };
  }
  return ichigojam_1;
}
var ichigojamExports = requireIchigojam();
const ichigojam = /* @__PURE__ */ getDefaultExportFromCjs(ichigojamExports);
const ichigojam$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: ichigojam
}, [ichigojamExports]);
export {
  ichigojam$1 as i
};
