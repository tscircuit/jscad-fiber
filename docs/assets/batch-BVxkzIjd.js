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
var batch_1;
var hasRequiredBatch;
function requireBatch() {
  if (hasRequiredBatch) return batch_1;
  hasRequiredBatch = 1;
  batch_1 = batch2;
  batch2.displayName = "batch";
  batch2.aliases = [];
  function batch2(Prism) {
    (function(Prism2) {
      var variable = /%%?[~:\w]+%?|!\S+!/;
      var parameter = {
        pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
        alias: "attr-name",
        inside: {
          punctuation: /:/
        }
      };
      var string = /"(?:[\\"]"|[^"])*"(?!")/;
      var number = /(?:\b|-)\d+\b/;
      Prism2.languages.batch = {
        comment: [
          /^::.*/m,
          {
            pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
            lookbehind: true
          }
        ],
        label: {
          pattern: /^:.*/m,
          alias: "property"
        },
        command: [
          {
            // FOR command
            pattern: /((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im,
            lookbehind: true,
            inside: {
              keyword: /\b(?:do|in)\b|^for\b/i,
              string,
              parameter,
              variable,
              number,
              punctuation: /[()',]/
            }
          },
          {
            // IF command
            pattern: /((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|geq|gtr|leq|lss|neq) )(?:"[^"]*"|[^\s"]\S*))/im,
            lookbehind: true,
            inside: {
              keyword: /\b(?:cmdextversion|defined|errorlevel|exist|not)\b|^if\b/i,
              string,
              parameter,
              variable,
              number,
              operator: /\^|==|\b(?:equ|geq|gtr|leq|lss|neq)\b/i
            }
          },
          {
            // ELSE command
            pattern: /((?:^|[&()])[ \t]*)else\b/im,
            lookbehind: true,
            inside: {
              keyword: /^else\b/i
            }
          },
          {
            // SET command
            pattern: /((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
            lookbehind: true,
            inside: {
              keyword: /^set\b/i,
              string,
              parameter,
              variable: [variable, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
              number,
              operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
              punctuation: /[()',]/
            }
          },
          {
            // Other commands
            pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/m,
            lookbehind: true,
            inside: {
              keyword: /^\w+\b/,
              string,
              parameter,
              label: {
                pattern: /(^\s*):\S+/m,
                lookbehind: true,
                alias: "property"
              },
              variable,
              number,
              operator: /\^/
            }
          }
        ],
        operator: /[&@]/,
        punctuation: /[()']/
      };
    })(Prism);
  }
  return batch_1;
}
var batchExports = requireBatch();
const batch = /* @__PURE__ */ getDefaultExportFromCjs(batchExports);
const batch$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: batch
}, [batchExports]);
export {
  batch$1 as b
};
