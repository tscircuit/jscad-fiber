import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireCsharp } from "./csharp-iD8vdCRX.js";
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
var aspnet_1;
var hasRequiredAspnet;
function requireAspnet() {
  if (hasRequiredAspnet) return aspnet_1;
  hasRequiredAspnet = 1;
  var refractorCsharp = requireCsharp();
  aspnet_1 = aspnet2;
  aspnet2.displayName = "aspnet";
  aspnet2.aliases = [];
  function aspnet2(Prism) {
    Prism.register(refractorCsharp);
    Prism.languages.aspnet = Prism.languages.extend("markup", {
      "page-directive": {
        pattern: /<%\s*@.*%>/,
        alias: "tag",
        inside: {
          "page-directive": {
            pattern: /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
            alias: "tag"
          },
          rest: Prism.languages.markup.tag.inside
        }
      },
      directive: {
        pattern: /<%.*%>/,
        alias: "tag",
        inside: {
          directive: {
            pattern: /<%\s*?[$=%#:]{0,2}|%>/,
            alias: "tag"
          },
          rest: Prism.languages.csharp
        }
      }
    });
    Prism.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/;
    Prism.languages.insertBefore(
      "inside",
      "punctuation",
      {
        directive: Prism.languages.aspnet["directive"]
      },
      Prism.languages.aspnet.tag.inside["attr-value"]
    );
    Prism.languages.insertBefore("aspnet", "comment", {
      "asp-comment": {
        pattern: /<%--[\s\S]*?--%>/,
        alias: ["asp", "comment"]
      }
    });
    Prism.languages.insertBefore(
      "aspnet",
      Prism.languages.javascript ? "script" : "tag",
      {
        "asp-script": {
          pattern: /(<script(?=.*runat=['"]?server\b)[^>]*>)[\s\S]*?(?=<\/script>)/i,
          lookbehind: true,
          alias: ["asp", "script"],
          inside: Prism.languages.csharp || {}
        }
      }
    );
  }
  return aspnet_1;
}
var aspnetExports = requireAspnet();
const aspnet = /* @__PURE__ */ getDefaultExportFromCjs(aspnetExports);
const aspnet$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: aspnet
}, [aspnetExports]);
export {
  aspnet$1 as a
};
