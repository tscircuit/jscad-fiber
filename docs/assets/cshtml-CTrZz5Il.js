import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireCsharp } from "./csharp-iD8vdCRX.js";
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
var cshtml_1;
var hasRequiredCshtml;
function requireCshtml() {
  if (hasRequiredCshtml) return cshtml_1;
  hasRequiredCshtml = 1;
  var refractorCsharp = requireCsharp();
  cshtml_1 = cshtml2;
  cshtml2.displayName = "cshtml";
  cshtml2.aliases = ["razor"];
  function cshtml2(Prism) {
    Prism.register(refractorCsharp);
    (function(Prism2) {
      var commentLike = /\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source;
      var stringLike = /@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source + "|" + /'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;
      function nested(pattern, depthLog2) {
        for (var i = 0; i < depthLog2; i++) {
          pattern = pattern.replace(/<self>/g, function() {
            return "(?:" + pattern + ")";
          });
        }
        return pattern.replace(/<self>/g, "[^\\s\\S]").replace(/<str>/g, "(?:" + stringLike + ")").replace(/<comment>/g, "(?:" + commentLike + ")");
      }
      var round = nested(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source, 2);
      var square = nested(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source, 2);
      var curly = nested(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source, 2);
      var angle = nested(/<(?:[^<>'"@/]|<str>|<comment>|<self>)*>/.source, 2);
      var tagAttrs = /(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?/.source;
      var tagContent = /(?!\d)[^\s>\/=$<%]+/.source + tagAttrs + /\s*\/?>/.source;
      var tagRegion = /\B@?/.source + "(?:" + /<([a-zA-Z][\w:]*)/.source + tagAttrs + /\s*>/.source + "(?:" + (/[^<]/.source + "|" + // all tags that are not the start tag
      // eslint-disable-next-line regexp/strict
      /<\/?(?!\1\b)/.source + tagContent + "|" + // nested start tag
      nested(
        // eslint-disable-next-line regexp/strict
        /<\1/.source + tagAttrs + /\s*>/.source + "(?:" + (/[^<]/.source + "|" + // all tags that are not the start tag
        // eslint-disable-next-line regexp/strict
        /<\/?(?!\1\b)/.source + tagContent + "|<self>") + ")*" + // eslint-disable-next-line regexp/strict
        /<\/\1\s*>/.source,
        2
      )) + ")*" + // eslint-disable-next-line regexp/strict
      /<\/\1\s*>/.source + "|" + /</.source + tagContent + ")";
      Prism2.languages.cshtml = Prism2.languages.extend("markup", {});
      var csharpWithHtml = Prism2.languages.insertBefore(
        "csharp",
        "string",
        {
          html: {
            pattern: RegExp(tagRegion),
            greedy: true,
            inside: Prism2.languages.cshtml
          }
        },
        {
          csharp: Prism2.languages.extend("csharp", {})
        }
      );
      var cs = {
        pattern: /\S[\s\S]*/,
        alias: "language-csharp",
        inside: csharpWithHtml
      };
      Prism2.languages.insertBefore("cshtml", "prolog", {
        "razor-comment": {
          pattern: /@\*[\s\S]*?\*@/,
          greedy: true,
          alias: "comment"
        },
        block: {
          pattern: RegExp(
            /(^|[^@])@/.source + "(?:" + [
              // @{ ... }
              curly,
              // @code{ ... }
              /(?:code|functions)\s*/.source + curly,
              // @for (...) { ... }
              /(?:for|foreach|lock|switch|using|while)\s*/.source + round + /\s*/.source + curly,
              // @do { ... } while (...);
              /do\s*/.source + curly + /\s*while\s*/.source + round + /(?:\s*;)?/.source,
              // @try { ... } catch (...) { ... } finally { ... }
              /try\s*/.source + curly + /\s*catch\s*/.source + round + /\s*/.source + curly + /\s*finally\s*/.source + curly,
              // @if (...) {...} else if (...) {...} else {...}
              /if\s*/.source + round + /\s*/.source + curly + "(?:" + /\s*else/.source + "(?:" + /\s+if\s*/.source + round + ")?" + /\s*/.source + curly + ")*"
            ].join("|") + ")"
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            keyword: /^@\w*/,
            csharp: cs
          }
        },
        directive: {
          pattern: /^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,
          lookbehind: true,
          greedy: true,
          inside: {
            keyword: /^@\w+/,
            csharp: cs
          }
        },
        value: {
          pattern: RegExp(
            /(^|[^@])@/.source + /(?:await\b\s*)?/.source + "(?:" + /\w+\b/.source + "|" + round + ")(?:" + /[?!]?\.\w+\b/.source + "|" + round + "|" + square + "|" + angle + round + ")*"
          ),
          lookbehind: true,
          greedy: true,
          alias: "variable",
          inside: {
            keyword: /^@/,
            csharp: cs
          }
        },
        "delegate-operator": {
          pattern: /(^|[^@])@(?=<)/,
          lookbehind: true,
          alias: "operator"
        }
      });
      Prism2.languages.razor = Prism2.languages.cshtml;
    })(Prism);
  }
  return cshtml_1;
}
var cshtmlExports = requireCshtml();
const cshtml = /* @__PURE__ */ getDefaultExportFromCjs(cshtmlExports);
const cshtml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: cshtml
}, [cshtmlExports]);
export {
  cshtml$1 as c
};
