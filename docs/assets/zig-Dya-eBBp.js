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
var zig_1;
var hasRequiredZig;
function requireZig() {
  if (hasRequiredZig) return zig_1;
  hasRequiredZig = 1;
  zig_1 = zig2;
  zig2.displayName = "zig";
  zig2.aliases = [];
  function zig2(Prism) {
    (function(Prism2) {
      function literal(str) {
        return function() {
          return str;
        };
      }
      var keyword = /\b(?:align|allowzero|and|anyframe|anytype|asm|async|await|break|cancel|catch|comptime|const|continue|defer|else|enum|errdefer|error|export|extern|fn|for|if|inline|linksection|nakedcc|noalias|nosuspend|null|or|orelse|packed|promise|pub|resume|return|stdcallcc|struct|suspend|switch|test|threadlocal|try|undefined|union|unreachable|usingnamespace|var|volatile|while)\b/;
      var IDENTIFIER = "\\b(?!" + keyword.source + ")(?!\\d)\\w+\\b";
      var ALIGN = /align\s*\((?:[^()]|\([^()]*\))*\)/.source;
      var PREFIX_TYPE_OP = /(?:\?|\bpromise->|(?:\[[^[\]]*\]|\*(?!\*)|\*\*)(?:\s*<ALIGN>|\s*const\b|\s*volatile\b|\s*allowzero\b)*)/.source.replace(
        /<ALIGN>/g,
        literal(ALIGN)
      );
      var SUFFIX_EXPR = /(?:\bpromise\b|(?:\berror\.)?<ID>(?:\.<ID>)*(?!\s+<ID>))/.source.replace(
        /<ID>/g,
        literal(IDENTIFIER)
      );
      var TYPE = "(?!\\s)(?:!?\\s*(?:" + PREFIX_TYPE_OP + "\\s*)*" + SUFFIX_EXPR + ")+";
      Prism2.languages.zig = {
        comment: [
          {
            pattern: /\/\/[/!].*/,
            alias: "doc-comment"
          },
          /\/{2}.*/
        ],
        string: [
          {
            // "string" and c"string"
            pattern: /(^|[^\\@])c?"(?:[^"\\\r\n]|\\.)*"/,
            lookbehind: true,
            greedy: true
          },
          {
            // multiline strings and c-strings
            pattern: /([\r\n])([ \t]+c?\\{2}).*(?:(?:\r\n?|\n)\2.*)*/,
            lookbehind: true,
            greedy: true
          }
        ],
        char: {
          // characters 'a', '\n', '\xFF', '\u{10FFFF}'
          pattern: /(^|[^\\])'(?:[^'\\\r\n]|[\uD800-\uDFFF]{2}|\\(?:.|x[a-fA-F\d]{2}|u\{[a-fA-F\d]{1,6}\}))'/,
          lookbehind: true,
          greedy: true
        },
        builtin: /\B@(?!\d)\w+(?=\s*\()/,
        label: {
          pattern: /(\b(?:break|continue)\s*:\s*)\w+\b|\b(?!\d)\w+\b(?=\s*:\s*(?:\{|while\b))/,
          lookbehind: true
        },
        "class-name": [
          // const Foo = struct {};
          /\b(?!\d)\w+(?=\s*=\s*(?:(?:extern|packed)\s+)?(?:enum|struct|union)\s*[({])/,
          {
            // const x: i32 = 9;
            // var x: Bar;
            // fn foo(x: bool, y: f32) void {}
            pattern: RegExp(
              /(:\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?[=;,)])|<TYPE>(?=\s*(?:<ALIGN>\s*)?\{)/.source.replace(/<TYPE>/g, literal(TYPE)).replace(/<ALIGN>/g, literal(ALIGN))
            ),
            lookbehind: true,
            inside: null
            // see below
          },
          {
            // extern fn foo(x: f64) f64; (optional alignment)
            pattern: RegExp(
              /(\)\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?;)/.source.replace(/<TYPE>/g, literal(TYPE)).replace(/<ALIGN>/g, literal(ALIGN))
            ),
            lookbehind: true,
            inside: null
            // see below
          }
        ],
        "builtin-type": {
          pattern: /\b(?:anyerror|bool|c_u?(?:int|long|longlong|short)|c_longdouble|c_void|comptime_(?:float|int)|f(?:16|32|64|128)|[iu](?:8|16|32|64|128|size)|noreturn|type|void)\b/,
          alias: "keyword"
        },
        keyword,
        function: /\b(?!\d)\w+(?=\s*\()/,
        number: /\b(?:0b[01]+|0o[0-7]+|0x[a-fA-F\d]+(?:\.[a-fA-F\d]*)?(?:[pP][+-]?[a-fA-F\d]+)?|\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\b/,
        boolean: /\b(?:false|true)\b/,
        operator: /\.[*?]|\.{2,3}|[-=]>|\*\*|\+\+|\|\||(?:<<|>>|[-+*]%|[-+*/%^&|<>!=])=?|[?~]/,
        punctuation: /[.:,;(){}[\]]/
      };
      Prism2.languages.zig["class-name"].forEach(function(obj) {
        if (obj.inside === null) {
          obj.inside = Prism2.languages.zig;
        }
      });
    })(Prism);
  }
  return zig_1;
}
var zigExports = requireZig();
const zig = /* @__PURE__ */ getDefaultExportFromCjs(zigExports);
const zig$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: zig
}, [zigExports]);
export {
  zig$1 as z
};
