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
var asm6502_1;
var hasRequiredAsm6502;
function requireAsm6502() {
  if (hasRequiredAsm6502) return asm6502_1;
  hasRequiredAsm6502 = 1;
  asm6502_1 = asm65022;
  asm65022.displayName = "asm6502";
  asm65022.aliases = [];
  function asm65022(Prism) {
    Prism.languages.asm6502 = {
      comment: /;.*/,
      directive: {
        pattern: /\.\w+(?= )/,
        alias: "property"
      },
      string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      "op-code": {
        pattern: /\b(?:ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA|adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya)\b/,
        alias: "keyword"
      },
      "hex-number": {
        pattern: /#?\$[\da-f]{1,4}\b/i,
        alias: "number"
      },
      "binary-number": {
        pattern: /#?%[01]+\b/,
        alias: "number"
      },
      "decimal-number": {
        pattern: /#?\b\d+\b/,
        alias: "number"
      },
      register: {
        pattern: /\b[xya]\b/i,
        alias: "variable"
      },
      punctuation: /[(),:]/
    };
  }
  return asm6502_1;
}
var asm6502Exports = requireAsm6502();
const asm6502 = /* @__PURE__ */ getDefaultExportFromCjs(asm6502Exports);
const asm6502$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: asm6502
}, [asm6502Exports]);
export {
  asm6502$1 as a
};
