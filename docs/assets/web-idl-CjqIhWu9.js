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
var webIdl_1;
var hasRequiredWebIdl;
function requireWebIdl() {
  if (hasRequiredWebIdl) return webIdl_1;
  hasRequiredWebIdl = 1;
  webIdl_1 = webIdl2;
  webIdl2.displayName = "webIdl";
  webIdl2.aliases = [];
  function webIdl2(Prism) {
    (function(Prism2) {
      var id = /(?:\B-|\b_|\b)[A-Za-z][\w-]*(?![\w-])/.source;
      var type = "(?:" + /\b(?:unsigned\s+)?long\s+long(?![\w-])/.source + "|" + /\b(?:unrestricted|unsigned)\s+[a-z]+(?![\w-])/.source + "|" + /(?!(?:unrestricted|unsigned)\b)/.source + id + /(?:\s*<(?:[^<>]|<[^<>]*>)*>)?/.source + ")" + /(?:\s*\?)?/.source;
      var typeInside = {};
      Prism2.languages["web-idl"] = {
        comment: {
          pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
          greedy: true
        },
        string: {
          pattern: /"[^"]*"/,
          greedy: true
        },
        namespace: {
          pattern: RegExp(/(\bnamespace\s+)/.source + id),
          lookbehind: true
        },
        "class-name": [
          {
            pattern: /(^|[^\w-])(?:iterable|maplike|setlike)\s*<(?:[^<>]|<[^<>]*>)*>/,
            lookbehind: true,
            inside: typeInside
          },
          {
            pattern: RegExp(
              /(\b(?:attribute|const|deleter|getter|optional|setter)\s+)/.source + type
            ),
            lookbehind: true,
            inside: typeInside
          },
          {
            // callback return type
            pattern: RegExp(
              "(" + /\bcallback\s+/.source + id + /\s*=\s*/.source + ")" + type
            ),
            lookbehind: true,
            inside: typeInside
          },
          {
            // typedef
            pattern: RegExp(/(\btypedef\b\s*)/.source + type),
            lookbehind: true,
            inside: typeInside
          },
          {
            pattern: RegExp(
              /(\b(?:callback|dictionary|enum|interface(?:\s+mixin)?)\s+)(?!(?:interface|mixin)\b)/.source + id
            ),
            lookbehind: true
          },
          {
            // inheritance
            pattern: RegExp(/(:\s*)/.source + id),
            lookbehind: true
          },
          // includes and implements
          RegExp(id + /(?=\s+(?:implements|includes)\b)/.source),
          {
            pattern: RegExp(/(\b(?:implements|includes)\s+)/.source + id),
            lookbehind: true
          },
          {
            // function return type, parameter types, and dictionary members
            pattern: RegExp(
              type + "(?=" + /\s*(?:\.{3}\s*)?/.source + id + /\s*[(),;=]/.source + ")"
            ),
            inside: typeInside
          }
        ],
        builtin: /\b(?:ArrayBuffer|BigInt64Array|BigUint64Array|ByteString|DOMString|DataView|Float32Array|Float64Array|FrozenArray|Int16Array|Int32Array|Int8Array|ObservableArray|Promise|USVString|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray)\b/,
        keyword: [
          /\b(?:async|attribute|callback|const|constructor|deleter|dictionary|enum|getter|implements|includes|inherit|interface|mixin|namespace|null|optional|or|partial|readonly|required|setter|static|stringifier|typedef|unrestricted)\b/,
          // type keywords
          /\b(?:any|bigint|boolean|byte|double|float|iterable|long|maplike|object|octet|record|sequence|setlike|short|symbol|undefined|unsigned|void)\b/
        ],
        boolean: /\b(?:false|true)\b/,
        number: {
          pattern: /(^|[^\w-])-?(?:0x[0-9a-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|NaN|Infinity)(?![\w-])/i,
          lookbehind: true
        },
        operator: /\.{3}|[=:?<>-]/,
        punctuation: /[(){}[\].,;]/
      };
      for (var key in Prism2.languages["web-idl"]) {
        if (key !== "class-name") {
          typeInside[key] = Prism2.languages["web-idl"][key];
        }
      }
      Prism2.languages["webidl"] = Prism2.languages["web-idl"];
    })(Prism);
  }
  return webIdl_1;
}
var webIdlExports = requireWebIdl();
const webIdl = /* @__PURE__ */ getDefaultExportFromCjs(webIdlExports);
const webIdl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: webIdl
}, [webIdlExports]);
export {
  webIdl$1 as w
};
