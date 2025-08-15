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
var protobuf_1;
var hasRequiredProtobuf;
function requireProtobuf() {
  if (hasRequiredProtobuf) return protobuf_1;
  hasRequiredProtobuf = 1;
  protobuf_1 = protobuf2;
  protobuf2.displayName = "protobuf";
  protobuf2.aliases = [];
  function protobuf2(Prism) {
    (function(Prism2) {
      var builtinTypes = /\b(?:bool|bytes|double|s?fixed(?:32|64)|float|[su]?int(?:32|64)|string)\b/;
      Prism2.languages.protobuf = Prism2.languages.extend("clike", {
        "class-name": [
          {
            pattern: /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,
            lookbehind: true
          },
          {
            pattern: /(\b(?:rpc\s+\w+|returns)\s*\(\s*(?:stream\s+)?)\.?[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s*\))/,
            lookbehind: true
          }
        ],
        keyword: /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|returns|rpc(?=\s+\w)|service|stream|syntax|to)\b(?!\s*=\s*\d)/,
        function: /\b[a-z_]\w*(?=\s*\()/i
      });
      Prism2.languages.insertBefore("protobuf", "operator", {
        map: {
          pattern: /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[a-z_]\w*\s*[=;])/i,
          alias: "class-name",
          inside: {
            punctuation: /[<>.,]/,
            builtin: builtinTypes
          }
        },
        builtin: builtinTypes,
        "positional-class-name": {
          pattern: /(?:\b|\B\.)[a-z_]\w*(?:\.[a-z_]\w*)*(?=\s+[a-z_]\w*\s*[=;])/i,
          alias: "class-name",
          inside: {
            punctuation: /\./
          }
        },
        annotation: {
          pattern: /(\[\s*)[a-z_]\w*(?=\s*=)/i,
          lookbehind: true
        }
      });
    })(Prism);
  }
  return protobuf_1;
}
var protobufExports = requireProtobuf();
const protobuf = /* @__PURE__ */ getDefaultExportFromCjs(protobufExports);
const protobuf$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protobuf
}, [protobufExports]);
export {
  protobuf$1 as p
};
