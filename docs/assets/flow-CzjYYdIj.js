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
var flow_1;
var hasRequiredFlow;
function requireFlow() {
  if (hasRequiredFlow) return flow_1;
  hasRequiredFlow = 1;
  flow_1 = flow2;
  flow2.displayName = "flow";
  flow2.aliases = [];
  function flow2(Prism) {
    (function(Prism2) {
      Prism2.languages.flow = Prism2.languages.extend("javascript", {});
      Prism2.languages.insertBefore("flow", "keyword", {
        type: [
          {
            pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|any|mixed|null|void)\b/,
            alias: "tag"
          }
        ]
      });
      Prism2.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i;
      delete Prism2.languages.flow["parameter"];
      Prism2.languages.insertBefore("flow", "operator", {
        "flow-punctuation": {
          pattern: /\{\||\|\}/,
          alias: "punctuation"
        }
      });
      if (!Array.isArray(Prism2.languages.flow.keyword)) {
        Prism2.languages.flow.keyword = [Prism2.languages.flow.keyword];
      }
      Prism2.languages.flow.keyword.unshift(
        {
          pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,
          lookbehind: true
        },
        {
          pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,
          lookbehind: true
        }
      );
    })(Prism);
  }
  return flow_1;
}
var flowExports = requireFlow();
const flow = /* @__PURE__ */ getDefaultExportFromCjs(flowExports);
const flow$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: flow
}, [flowExports]);
export {
  flow$1 as f
};
