import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireRuby } from "./ruby-BhyE9auN.js";
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
var rubyExports = requireRuby();
const ruby = /* @__PURE__ */ getDefaultExportFromCjs(rubyExports);
const ruby$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: ruby
}, [rubyExports]);
export {
  ruby$1 as r
};
