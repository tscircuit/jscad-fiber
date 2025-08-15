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
var purebasic_1;
var hasRequiredPurebasic;
function requirePurebasic() {
  if (hasRequiredPurebasic) return purebasic_1;
  hasRequiredPurebasic = 1;
  purebasic_1 = purebasic2;
  purebasic2.displayName = "purebasic";
  purebasic2.aliases = [];
  function purebasic2(Prism) {
    Prism.languages.purebasic = Prism.languages.extend("clike", {
      comment: /;.*/,
      keyword: /\b(?:align|and|as|break|calldebugger|case|compilercase|compilerdefault|compilerelse|compilerelseif|compilerendif|compilerendselect|compilererror|compilerif|compilerselect|continue|data|datasection|debug|debuglevel|declare|declarec|declarecdll|declaredll|declaremodule|default|define|dim|disableasm|disabledebugger|disableexplicit|else|elseif|enableasm|enabledebugger|enableexplicit|end|enddatasection|enddeclaremodule|endenumeration|endif|endimport|endinterface|endmacro|endmodule|endprocedure|endselect|endstructure|endstructureunion|endwith|enumeration|extends|fakereturn|for|foreach|forever|global|gosub|goto|if|import|importc|includebinary|includefile|includepath|interface|macro|module|newlist|newmap|next|not|or|procedure|procedurec|procedurecdll|proceduredll|procedurereturn|protected|prototype|prototypec|read|redim|repeat|restore|return|runtime|select|shared|static|step|structure|structureunion|swap|threaded|to|until|wend|while|with|xincludefile|xor)\b/i,
      function: /\b\w+(?:\.\w+)?\s*(?=\()/,
      number: /(?:\$[\da-f]+|\b-?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)\b/i,
      operator: /(?:@\*?|\?|\*)\w+|-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*/@]/
    });
    Prism.languages.insertBefore("purebasic", "keyword", {
      tag: /#\w+\$?/,
      asm: {
        pattern: /(^[\t ]*)!.*/m,
        lookbehind: true,
        alias: "tag",
        inside: {
          comment: /;.*/,
          string: {
            pattern: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            greedy: true
          },
          // Anonymous label references, i.e.: jmp @b
          "label-reference-anonymous": {
            pattern: /(!\s*j[a-z]+\s+)@[fb]/i,
            lookbehind: true,
            alias: "fasm-label"
          },
          // Named label reference, i.e.: jne label1
          "label-reference-addressed": {
            pattern: /(!\s*j[a-z]+\s+)[A-Z._?$@][\w.?$@~#]*/i,
            lookbehind: true,
            alias: "fasm-label"
          },
          keyword: [
            /\b(?:extern|global)\b[^;\r\n]*/i,
            /\b(?:CPU|DEFAULT|FLOAT)\b.*/
          ],
          function: {
            pattern: /^([\t ]*!\s*)[\da-z]+(?=\s|$)/im,
            lookbehind: true
          },
          "function-inline": {
            pattern: /(:\s*)[\da-z]+(?=\s)/i,
            lookbehind: true,
            alias: "function"
          },
          label: {
            pattern: /^([\t ]*!\s*)[A-Za-z._?$@][\w.?$@~#]*(?=:)/m,
            lookbehind: true,
            alias: "fasm-label"
          },
          register: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|di|si|sp)|[cdefgs]s|mm\d+)\b/i,
          number: /(?:\b|-|(?=\$))(?:0[hx](?:[\da-f]*\.)?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,
          operator: /[\[\]*+\-/%<>=&|$!,.:]/
        }
      }
    });
    delete Prism.languages.purebasic["class-name"];
    delete Prism.languages.purebasic["boolean"];
    Prism.languages.pbfasm = Prism.languages["purebasic"];
  }
  return purebasic_1;
}
var purebasicExports = requirePurebasic();
const purebasic = /* @__PURE__ */ getDefaultExportFromCjs(purebasicExports);
const purebasic$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: purebasic
}, [purebasicExports]);
export {
  purebasic$1 as p
};
