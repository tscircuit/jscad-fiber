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
var nix_1;
var hasRequiredNix;
function requireNix() {
  if (hasRequiredNix) return nix_1;
  hasRequiredNix = 1;
  nix_1 = nix2;
  nix2.displayName = "nix";
  nix2.aliases = [];
  function nix2(Prism) {
    Prism.languages.nix = {
      comment: {
        pattern: /\/\*[\s\S]*?\*\/|#.*/,
        greedy: true
      },
      string: {
        pattern: /"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,
        greedy: true,
        inside: {
          interpolation: {
            // The lookbehind ensures the ${} is not preceded by \ or ''
            pattern: /(^|(?:^|(?!'').)[^\\])\$\{(?:[^{}]|\{[^}]*\})*\}/,
            lookbehind: true,
            inside: null
            // see below
          }
        }
      },
      url: [
        /\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,
        {
          pattern: /([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,
          lookbehind: true
        }
      ],
      antiquotation: {
        pattern: /\$(?=\{)/,
        alias: "important"
      },
      number: /\b\d+\b/,
      keyword: /\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,
      function: /\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:Tarball|url)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,
      boolean: /\b(?:false|true)\b/,
      operator: /[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,
      punctuation: /[{}()[\].,:;]/
    };
    Prism.languages.nix.string.inside.interpolation.inside = Prism.languages.nix;
  }
  return nix_1;
}
var nixExports = requireNix();
const nix = /* @__PURE__ */ getDefaultExportFromCjs(nixExports);
const nix$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: nix
}, [nixExports]);
export {
  nix$1 as n
};
