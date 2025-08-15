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
var hoon_1;
var hasRequiredHoon;
function requireHoon() {
  if (hasRequiredHoon) return hoon_1;
  hasRequiredHoon = 1;
  hoon_1 = hoon2;
  hoon2.displayName = "hoon";
  hoon2.aliases = [];
  function hoon2(Prism) {
    Prism.languages.hoon = {
      comment: {
        pattern: /::.*/,
        greedy: true
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      constant: /%(?:\.[ny]|[\w-]+)/,
      "class-name": /@(?:[a-z0-9-]*[a-z0-9])?|\*/i,
      function: /(?:\+[-+] {2})?(?:[a-z](?:[a-z0-9-]*[a-z0-9])?)/,
      keyword: /\.[\^\+\*=\?]|![><:\.=\?!]|=[>|:,\.\-\^<+;/~\*\?]|\?[>|:\.\-\^<\+&~=@!]|\|[\$_%:\.\-\^~\*=@\?]|\+[|\$\+\*]|:[_\-\^\+~\*]|%[_:\.\-\^\+~\*=]|\^[|:\.\-\+&~\*=\?]|\$[|_%:<>\-\^&~@=\?]|;[:<\+;\/~\*=]|~[>|\$_%<\+\/&=\?!]|--|==/
    };
  }
  return hoon_1;
}
var hoonExports = requireHoon();
const hoon = /* @__PURE__ */ getDefaultExportFromCjs(hoonExports);
const hoon$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: hoon
}, [hoonExports]);
export {
  hoon$1 as h
};
