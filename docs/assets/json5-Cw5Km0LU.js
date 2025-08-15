import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireJson } from "./json-BgFPXYLn.js";
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
var json5_1;
var hasRequiredJson5;
function requireJson5() {
  if (hasRequiredJson5) return json5_1;
  hasRequiredJson5 = 1;
  var refractorJson = requireJson();
  json5_1 = json52;
  json52.displayName = "json5";
  json52.aliases = [];
  function json52(Prism) {
    Prism.register(refractorJson);
    (function(Prism2) {
      var string = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
      Prism2.languages.json5 = Prism2.languages.extend("json", {
        property: [
          {
            pattern: RegExp(string.source + "(?=\\s*:)"),
            greedy: true
          },
          {
            pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
            alias: "unquoted"
          }
        ],
        string: {
          pattern: string,
          greedy: true
        },
        number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/
      });
    })(Prism);
  }
  return json5_1;
}
var json5Exports = requireJson5();
const json5 = /* @__PURE__ */ getDefaultExportFromCjs(json5Exports);
const json5$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: json5
}, [json5Exports]);
export {
  json5$1 as j
};
