import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requirePhp } from "./php-BBLqus8v.js";
import { r as requireJavadoclike } from "./javadoclike-BdPr_VnG.js";
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
var phpdoc_1;
var hasRequiredPhpdoc;
function requirePhpdoc() {
  if (hasRequiredPhpdoc) return phpdoc_1;
  hasRequiredPhpdoc = 1;
  var refractorPhp = requirePhp();
  var refractorJavadoclike = requireJavadoclike();
  phpdoc_1 = phpdoc2;
  phpdoc2.displayName = "phpdoc";
  phpdoc2.aliases = [];
  function phpdoc2(Prism) {
    Prism.register(refractorPhp);
    Prism.register(refractorJavadoclike);
    (function(Prism2) {
      var typeExpression = /(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;
      Prism2.languages.phpdoc = Prism2.languages.extend("javadoclike", {
        parameter: {
          pattern: RegExp(
            "(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" + typeExpression + "\\s+)?)\\$\\w+"
          ),
          lookbehind: true
        }
      });
      Prism2.languages.insertBefore("phpdoc", "keyword", {
        "class-name": [
          {
            pattern: RegExp(
              "(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" + typeExpression
            ),
            lookbehind: true,
            inside: {
              keyword: /\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,
              punctuation: /[|\\[\]()]/
            }
          }
        ]
      });
      Prism2.languages.javadoclike.addSupport("php", Prism2.languages.phpdoc);
    })(Prism);
  }
  return phpdoc_1;
}
var phpdocExports = requirePhpdoc();
const phpdoc = /* @__PURE__ */ getDefaultExportFromCjs(phpdocExports);
const phpdoc$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: phpdoc
}, [phpdocExports]);
export {
  phpdoc$1 as p
};
