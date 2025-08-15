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
var gcode_1;
var hasRequiredGcode;
function requireGcode() {
  if (hasRequiredGcode) return gcode_1;
  hasRequiredGcode = 1;
  gcode_1 = gcode2;
  gcode2.displayName = "gcode";
  gcode2.aliases = [];
  function gcode2(Prism) {
    Prism.languages.gcode = {
      comment: /;.*|\B\(.*?\)\B/,
      string: {
        pattern: /"(?:""|[^"])*"/,
        greedy: true
      },
      keyword: /\b[GM]\d+(?:\.\d+)?\b/,
      property: /\b[A-Z]/,
      checksum: {
        pattern: /(\*)\d+/,
        lookbehind: true,
        alias: "number"
      },
      // T0:0:0
      punctuation: /[:*]/
    };
  }
  return gcode_1;
}
var gcodeExports = requireGcode();
const gcode = /* @__PURE__ */ getDefaultExportFromCjs(gcodeExports);
const gcode$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: gcode
}, [gcodeExports]);
export {
  gcode$1 as g
};
