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
var mermaid_1;
var hasRequiredMermaid;
function requireMermaid() {
  if (hasRequiredMermaid) return mermaid_1;
  hasRequiredMermaid = 1;
  mermaid_1 = mermaid2;
  mermaid2.displayName = "mermaid";
  mermaid2.aliases = [];
  function mermaid2(Prism) {
    Prism.languages.mermaid = {
      comment: {
        pattern: /%%.*/,
        greedy: true
      },
      style: {
        pattern: /^([ \t]*(?:classDef|linkStyle|style)[ \t]+[\w$-]+[ \t]+)\w.*[^\s;]/m,
        lookbehind: true,
        inside: {
          property: /\b\w[\w-]*(?=[ \t]*:)/,
          operator: /:/,
          punctuation: /,/
        }
      },
      "inter-arrow-label": {
        pattern: /([^<>ox.=-])(?:-[-.]|==)(?![<>ox.=-])[ \t]*(?:"[^"\r\n]*"|[^\s".=-](?:[^\r\n.=-]*[^\s.=-])?)[ \t]*(?:\.+->?|--+[->]|==+[=>])(?![<>ox.=-])/,
        lookbehind: true,
        greedy: true,
        inside: {
          arrow: {
            pattern: /(?:\.+->?|--+[->]|==+[=>])$/,
            alias: "operator"
          },
          label: {
            pattern: /^([\s\S]{2}[ \t]*)\S(?:[\s\S]*\S)?/,
            lookbehind: true,
            alias: "property"
          },
          "arrow-head": {
            pattern: /^\S+/,
            alias: ["arrow", "operator"]
          }
        }
      },
      arrow: [
        // This might look complex but it really isn't.
        // There are many possible arrows (see tests) and it's impossible to fit all of them into one pattern. The
        // problem is that we only have one lookbehind per pattern. However, we cannot disallow too many arrow
        // characters in the one lookbehind because that would create too many false negatives. So we have to split the
        // arrows into different patterns.
        {
          // ER diagram
          pattern: /(^|[^{}|o.-])[|}][|o](?:--|\.\.)[|o][|{](?![{}|o.-])/,
          lookbehind: true,
          alias: "operator"
        },
        {
          // flow chart
          // (?:==+|--+|-\.*-)
          pattern: /(^|[^<>ox.=-])(?:[<ox](?:==+|--+|-\.*-)[>ox]?|(?:==+|--+|-\.*-)[>ox]|===+|---+|-\.+-)(?![<>ox.=-])/,
          lookbehind: true,
          alias: "operator"
        },
        {
          // sequence diagram
          pattern: /(^|[^<>()x-])(?:--?(?:>>|[x>)])(?![<>()x])|(?:<<|[x<(])--?(?!-))/,
          lookbehind: true,
          alias: "operator"
        },
        {
          // class diagram
          pattern: /(^|[^<>|*o.-])(?:[*o]--|--[*o]|<\|?(?:--|\.\.)|(?:--|\.\.)\|?>|--|\.\.)(?![<>|*o.-])/,
          lookbehind: true,
          alias: "operator"
        }
      ],
      label: {
        pattern: /(^|[^|<])\|(?:[^\r\n"|]|"[^"\r\n]*")+\|/,
        lookbehind: true,
        greedy: true,
        alias: "property"
      },
      text: {
        pattern: /(?:[(\[{]+|\b>)(?:[^\r\n"()\[\]{}]|"[^"\r\n]*")+(?:[)\]}]+|>)/,
        alias: "string"
      },
      string: {
        pattern: /"[^"\r\n]*"/,
        greedy: true
      },
      annotation: {
        pattern: /<<(?:abstract|choice|enumeration|fork|interface|join|service)>>|\[\[(?:choice|fork|join)\]\]/i,
        alias: "important"
      },
      keyword: [
        // This language has both case-sensitive and case-insensitive keywords
        {
          pattern: /(^[ \t]*)(?:action|callback|class|classDef|classDiagram|click|direction|erDiagram|flowchart|gantt|gitGraph|graph|journey|link|linkStyle|pie|requirementDiagram|sequenceDiagram|stateDiagram|stateDiagram-v2|style|subgraph)(?![\w$-])/m,
          lookbehind: true,
          greedy: true
        },
        {
          pattern: /(^[ \t]*)(?:activate|alt|and|as|autonumber|deactivate|else|end(?:[ \t]+note)?|loop|opt|par|participant|rect|state|note[ \t]+(?:over|(?:left|right)[ \t]+of))(?![\w$-])/im,
          lookbehind: true,
          greedy: true
        }
      ],
      entity: /#[a-z0-9]+;/,
      operator: {
        pattern: /(\w[ \t]*)&(?=[ \t]*\w)|:::|:/,
        lookbehind: true
      },
      punctuation: /[(){};]/
    };
  }
  return mermaid_1;
}
var mermaidExports = requireMermaid();
const mermaid = /* @__PURE__ */ getDefaultExportFromCjs(mermaidExports);
const mermaid$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: mermaid
}, [mermaidExports]);
export {
  mermaid$1 as m
};
