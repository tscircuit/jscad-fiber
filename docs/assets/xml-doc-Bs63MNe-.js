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
var xmlDoc_1;
var hasRequiredXmlDoc;
function requireXmlDoc() {
  if (hasRequiredXmlDoc) return xmlDoc_1;
  hasRequiredXmlDoc = 1;
  xmlDoc_1 = xmlDoc2;
  xmlDoc2.displayName = "xmlDoc";
  xmlDoc2.aliases = [];
  function xmlDoc2(Prism) {
    (function(Prism2) {
      function insertDocComment(lang, docComment) {
        if (Prism2.languages[lang]) {
          Prism2.languages.insertBefore(lang, "comment", {
            "doc-comment": docComment
          });
        }
      }
      var tag = Prism2.languages.markup.tag;
      var slashDocComment = {
        pattern: /\/\/\/.*/,
        greedy: true,
        alias: "comment",
        inside: {
          tag
        }
      };
      var tickDocComment = {
        pattern: /'''.*/,
        greedy: true,
        alias: "comment",
        inside: {
          tag
        }
      };
      insertDocComment("csharp", slashDocComment);
      insertDocComment("fsharp", slashDocComment);
      insertDocComment("vbnet", tickDocComment);
    })(Prism);
  }
  return xmlDoc_1;
}
var xmlDocExports = requireXmlDoc();
const xmlDoc = /* @__PURE__ */ getDefaultExportFromCjs(xmlDocExports);
const xmlDoc$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: xmlDoc
}, [xmlDocExports]);
export {
  xmlDoc$1 as x
};
