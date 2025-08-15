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
var sml_1;
var hasRequiredSml;
function requireSml() {
  if (hasRequiredSml) return sml_1;
  hasRequiredSml = 1;
  sml_1 = sml2;
  sml2.displayName = "sml";
  sml2.aliases = ["smlnj"];
  function sml2(Prism) {
    (function(Prism2) {
      var keywords = /\b(?:abstype|and|andalso|as|case|datatype|do|else|end|eqtype|exception|fn|fun|functor|handle|if|in|include|infix|infixr|let|local|nonfix|of|op|open|orelse|raise|rec|sharing|sig|signature|struct|structure|then|type|val|where|while|with|withtype)\b/i;
      Prism2.languages.sml = {
        // allow one level of nesting
        comment: /\(\*(?:[^*(]|\*(?!\))|\((?!\*)|\(\*(?:[^*(]|\*(?!\))|\((?!\*))*\*\))*\*\)/,
        string: {
          pattern: /#?"(?:[^"\\]|\\.)*"/,
          greedy: true
        },
        "class-name": [
          {
            // This is only an approximation since the real grammar is context-free
            //
            // Why the main loop so complex?
            // The main loop is approximately the same as /(?:\s*(?:[*,]|->)\s*<TERMINAL>)*/ which is, obviously, a lot
            // simpler. The difference is that if a comma is the last iteration of the loop, then the terminal must be
            // followed by a long identifier.
            pattern: RegExp(
              /((?:^|[^:]):\s*)<TERMINAL>(?:\s*(?:(?:\*|->)\s*<TERMINAL>|,\s*<TERMINAL>(?:(?=<NOT-LAST>)|(?!<NOT-LAST>)\s+<LONG-ID>)))*/.source.replace(/<NOT-LAST>/g, function() {
                return /\s*(?:[*,]|->)/.source;
              }).replace(/<TERMINAL>/g, function() {
                return /(?:'[\w']*|<LONG-ID>|\((?:[^()]|\([^()]*\))*\)|\{(?:[^{}]|\{[^{}]*\})*\})(?:\s+<LONG-ID>)*/.source;
              }).replace(/<LONG-ID>/g, function() {
                return /(?!<KEYWORD>)[a-z\d_][\w'.]*/.source;
              }).replace(/<KEYWORD>/g, function() {
                return keywords.source;
              }),
              "i"
            ),
            lookbehind: true,
            greedy: true,
            inside: null
            // see below
          },
          {
            pattern: /((?:^|[^\w'])(?:datatype|exception|functor|signature|structure|type)\s+)[a-z_][\w'.]*/i,
            lookbehind: true
          }
        ],
        function: {
          pattern: /((?:^|[^\w'])fun\s+)[a-z_][\w'.]*/i,
          lookbehind: true
        },
        keyword: keywords,
        variable: {
          pattern: /(^|[^\w'])'[\w']*/,
          lookbehind: true
        },
        number: /~?\b(?:\d+(?:\.\d+)?(?:e~?\d+)?|0x[\da-f]+)\b/i,
        word: {
          pattern: /\b0w(?:\d+|x[\da-f]+)\b/i,
          alias: "constant"
        },
        boolean: /\b(?:false|true)\b/i,
        operator: /\.\.\.|:[>=:]|=>?|->|[<>]=?|[!+\-*/^#|@~]/,
        punctuation: /[(){}\[\].:,;]/
      };
      Prism2.languages.sml["class-name"][0].inside = Prism2.languages.sml;
      Prism2.languages.smlnj = Prism2.languages.sml;
    })(Prism);
  }
  return sml_1;
}
var smlExports = requireSml();
const sml = /* @__PURE__ */ getDefaultExportFromCjs(smlExports);
const sml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: sml
}, [smlExports]);
export {
  sml$1 as s
};
