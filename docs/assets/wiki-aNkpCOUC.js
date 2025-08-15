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
var wiki_1;
var hasRequiredWiki;
function requireWiki() {
  if (hasRequiredWiki) return wiki_1;
  hasRequiredWiki = 1;
  wiki_1 = wiki2;
  wiki2.displayName = "wiki";
  wiki2.aliases = [];
  function wiki2(Prism) {
    Prism.languages.wiki = Prism.languages.extend("markup", {
      "block-comment": {
        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
        lookbehind: true,
        alias: "comment"
      },
      heading: {
        pattern: /^(=+)[^=\r\n].*?\1/m,
        inside: {
          punctuation: /^=+|=+$/,
          important: /.+/
        }
      },
      emphasis: {
        // TODO Multi-line
        pattern: /('{2,5}).+?\1/,
        inside: {
          "bold-italic": {
            pattern: /(''''').+?(?=\1)/,
            lookbehind: true,
            alias: ["bold", "italic"]
          },
          bold: {
            pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
            lookbehind: true
          },
          italic: {
            pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
            lookbehind: true
          },
          punctuation: /^''+|''+$/
        }
      },
      hr: {
        pattern: /^-{4,}/m,
        alias: "punctuation"
      },
      url: [
        /ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:PMID|RFC) +\d+/i,
        /\[\[.+?\]\]|\[.+?\]/
      ],
      variable: [
        /__[A-Z]+__/,
        // FIXME Nested structures should be handled
        // {{formatnum:{{#expr:{{{3}}}}}}}
        /\{{3}.+?\}{3}/,
        /\{\{.+?\}\}/
      ],
      symbol: [/^#redirect/im, /~{3,5}/],
      // Handle table attrs:
      // {|
      // ! style="text-align:left;"| Item
      // |}
      "table-tag": {
        pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
        lookbehind: true,
        inside: {
          "table-bar": {
            pattern: /\|$/,
            alias: "punctuation"
          },
          rest: Prism.languages.markup["tag"].inside
        }
      },
      punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
    });
    Prism.languages.insertBefore("wiki", "tag", {
      // Prevent highlighting inside <nowiki>, <source> and <pre> tags
      nowiki: {
        pattern: /<(nowiki|pre|source)\b[^>]*>[\s\S]*?<\/\1>/i,
        inside: {
          tag: {
            pattern: /<(?:nowiki|pre|source)\b[^>]*>|<\/(?:nowiki|pre|source)>/i,
            inside: Prism.languages.markup["tag"].inside
          }
        }
      }
    });
  }
  return wiki_1;
}
var wikiExports = requireWiki();
const wiki = /* @__PURE__ */ getDefaultExportFromCjs(wikiExports);
const wiki$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: wiki
}, [wikiExports]);
export {
  wiki$1 as w
};
