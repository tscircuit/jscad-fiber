import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireYaml } from "./yaml-hSvfQRm2.js";
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
var tap_1;
var hasRequiredTap;
function requireTap() {
  if (hasRequiredTap) return tap_1;
  hasRequiredTap = 1;
  var refractorYaml = requireYaml();
  tap_1 = tap2;
  tap2.displayName = "tap";
  tap2.aliases = [];
  function tap2(Prism) {
    Prism.register(refractorYaml);
    Prism.languages.tap = {
      fail: /not ok[^#{\n\r]*/,
      pass: /ok[^#{\n\r]*/,
      pragma: /pragma [+-][a-z]+/,
      bailout: /bail out!.*/i,
      version: /TAP version \d+/i,
      plan: /\b\d+\.\.\d+(?: +#.*)?/,
      subtest: {
        pattern: /# Subtest(?:: .*)?/,
        greedy: true
      },
      punctuation: /[{}]/,
      directive: /#.*/,
      yamlish: {
        pattern: /(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,
        lookbehind: true,
        inside: Prism.languages.yaml,
        alias: "language-yaml"
      }
    };
  }
  return tap_1;
}
var tapExports = requireTap();
const tap = /* @__PURE__ */ getDefaultExportFromCjs(tapExports);
const tap$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: tap
}, [tapExports]);
export {
  tap$1 as t
};
