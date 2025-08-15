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
var solidity_1;
var hasRequiredSolidity;
function requireSolidity() {
  if (hasRequiredSolidity) return solidity_1;
  hasRequiredSolidity = 1;
  solidity_1 = solidity2;
  solidity2.displayName = "solidity";
  solidity2.aliases = ["sol"];
  function solidity2(Prism) {
    Prism.languages.solidity = Prism.languages.extend("clike", {
      "class-name": {
        pattern: /(\b(?:contract|enum|interface|library|new|struct|using)\s+)(?!\d)[\w$]+/,
        lookbehind: true
      },
      keyword: /\b(?:_|anonymous|as|assembly|assert|break|calldata|case|constant|constructor|continue|contract|default|delete|do|else|emit|enum|event|external|for|from|function|if|import|indexed|inherited|interface|internal|is|let|library|mapping|memory|modifier|new|payable|pragma|private|public|pure|require|returns?|revert|selfdestruct|solidity|storage|struct|suicide|switch|this|throw|using|var|view|while)\b/,
      operator: /=>|->|:=|=:|\*\*|\+\+|--|\|\||&&|<<=?|>>=?|[-+*/%^&|<>!=]=?|[~?]/
    });
    Prism.languages.insertBefore("solidity", "keyword", {
      builtin: /\b(?:address|bool|byte|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|string|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/
    });
    Prism.languages.insertBefore("solidity", "number", {
      version: {
        pattern: /([<>]=?|\^)\d+\.\d+\.\d+\b/,
        lookbehind: true,
        alias: "number"
      }
    });
    Prism.languages.sol = Prism.languages.solidity;
  }
  return solidity_1;
}
var solidityExports = requireSolidity();
const solidity = /* @__PURE__ */ getDefaultExportFromCjs(solidityExports);
const solidity$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: solidity
}, [solidityExports]);
export {
  solidity$1 as s
};
