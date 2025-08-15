import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireC } from "./c-BM9zQzkN.js";
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
var objectivec_1;
var hasRequiredObjectivec;
function requireObjectivec() {
  if (hasRequiredObjectivec) return objectivec_1;
  hasRequiredObjectivec = 1;
  var refractorC = requireC();
  objectivec_1 = objectivec2;
  objectivec2.displayName = "objectivec";
  objectivec2.aliases = ["objc"];
  function objectivec2(Prism) {
    Prism.register(refractorC);
    Prism.languages.objectivec = Prism.languages.extend("c", {
      string: {
        pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        greedy: true
      },
      keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
      operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
    });
    delete Prism.languages.objectivec["class-name"];
    Prism.languages.objc = Prism.languages.objectivec;
  }
  return objectivec_1;
}
var objectivecExports = requireObjectivec();
const objectivec = /* @__PURE__ */ getDefaultExportFromCjs(objectivecExports);
const objectivec$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: objectivec
}, [objectivecExports]);
export {
  objectivec$1 as o
};
