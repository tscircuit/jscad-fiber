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
var xojo_1;
var hasRequiredXojo;
function requireXojo() {
  if (hasRequiredXojo) return xojo_1;
  hasRequiredXojo = 1;
  xojo_1 = xojo2;
  xojo2.displayName = "xojo";
  xojo2.aliases = [];
  function xojo2(Prism) {
    Prism.languages.xojo = {
      comment: {
        pattern: /(?:'|\/\/|Rem\b).+/i,
        greedy: true
      },
      string: {
        pattern: /"(?:""|[^"])*"/,
        greedy: true
      },
      number: [/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i, /&[bchou][a-z\d]+/i],
      directive: {
        pattern: /#(?:Else|ElseIf|Endif|If|Pragma)\b/i,
        alias: "property"
      },
      keyword: /\b(?:AddHandler|App|Array|As(?:signs)?|Auto|Boolean|Break|By(?:Ref|Val)|Byte|Call|Case|Catch|CFStringRef|CGFloat|Class|Color|Const|Continue|CString|Currency|CurrentMethodName|Declare|Delegate|Dim|Do(?:uble|wnTo)?|Each|Else(?:If)?|End|Enumeration|Event|Exception|Exit|Extends|False|Finally|For|Function|Get|GetTypeInfo|Global|GOTO|If|Implements|In|Inherits|Int(?:8|16|32|64|eger|erface)?|Lib|Loop|Me|Module|Next|Nil|Object|Optional|OSType|ParamArray|Private|Property|Protected|PString|Ptr|Raise(?:Event)?|ReDim|RemoveHandler|Return|Select(?:or)?|Self|Set|Shared|Short|Single|Soft|Static|Step|String|Sub|Super|Text|Then|To|True|Try|Ubound|UInt(?:8|16|32|64|eger)?|Until|Using|Var(?:iant)?|Wend|While|WindowPtr|WString)\b/i,
      operator: /<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|WeakAddressOf|Xor)\b/i,
      punctuation: /[.,;:()]/
    };
  }
  return xojo_1;
}
var xojoExports = requireXojo();
const xojo = /* @__PURE__ */ getDefaultExportFromCjs(xojoExports);
const xojo$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: xojo
}, [xojoExports]);
export {
  xojo$1 as x
};
