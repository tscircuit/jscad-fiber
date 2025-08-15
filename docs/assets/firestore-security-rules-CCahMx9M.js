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
var firestoreSecurityRules_1;
var hasRequiredFirestoreSecurityRules;
function requireFirestoreSecurityRules() {
  if (hasRequiredFirestoreSecurityRules) return firestoreSecurityRules_1;
  hasRequiredFirestoreSecurityRules = 1;
  firestoreSecurityRules_1 = firestoreSecurityRules2;
  firestoreSecurityRules2.displayName = "firestoreSecurityRules";
  firestoreSecurityRules2.aliases = [];
  function firestoreSecurityRules2(Prism) {
    Prism.languages["firestore-security-rules"] = Prism.languages.extend(
      "clike",
      {
        comment: /\/\/.*/,
        keyword: /\b(?:allow|function|if|match|null|return|rules_version|service)\b/,
        operator: /&&|\|\||[<>!=]=?|[-+*/%]|\b(?:in|is)\b/
      }
    );
    delete Prism.languages["firestore-security-rules"]["class-name"];
    Prism.languages.insertBefore("firestore-security-rules", "keyword", {
      path: {
        pattern: /(^|[\s(),])(?:\/(?:[\w\xA0-\uFFFF]+|\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)))+/,
        lookbehind: true,
        greedy: true,
        inside: {
          variable: {
            pattern: /\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)/,
            inside: {
              operator: /=/,
              keyword: /\*\*/,
              punctuation: /[.$(){}]/
            }
          },
          punctuation: /\//
        }
      },
      method: {
        // to make the pattern shorter, the actual method names are omitted
        pattern: /(\ballow\s+)[a-z]+(?:\s*,\s*[a-z]+)*(?=\s*[:;])/,
        lookbehind: true,
        alias: "builtin",
        inside: {
          punctuation: /,/
        }
      }
    });
  }
  return firestoreSecurityRules_1;
}
var firestoreSecurityRulesExports = requireFirestoreSecurityRules();
const firestoreSecurityRules = /* @__PURE__ */ getDefaultExportFromCjs(firestoreSecurityRulesExports);
const firestoreSecurityRules$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: firestoreSecurityRules
}, [firestoreSecurityRulesExports]);
export {
  firestoreSecurityRules$1 as f
};
