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
var perl_1;
var hasRequiredPerl;
function requirePerl() {
  if (hasRequiredPerl) return perl_1;
  hasRequiredPerl = 1;
  perl_1 = perl2;
  perl2.displayName = "perl";
  perl2.aliases = [];
  function perl2(Prism) {
    (function(Prism2) {
      var brackets = /(?:\((?:[^()\\]|\\[\s\S])*\)|\{(?:[^{}\\]|\\[\s\S])*\}|\[(?:[^[\]\\]|\\[\s\S])*\]|<(?:[^<>\\]|\\[\s\S])*>)/.source;
      Prism2.languages.perl = {
        comment: [
          {
            // POD
            pattern: /(^\s*)=\w[\s\S]*?=cut.*/m,
            lookbehind: true,
            greedy: true
          },
          {
            pattern: /(^|[^\\$])#.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        // TODO Could be nice to handle Heredoc too.
        string: [
          {
            pattern: RegExp(
              /\b(?:q|qq|qw|qx)(?![a-zA-Z0-9])\s*/.source + "(?:" + [
                // q/.../
                /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
                // q a...a
                // eslint-disable-next-line regexp/strict
                /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
                // q(...)
                // q{...}
                // q[...]
                // q<...>
                brackets
              ].join("|") + ")"
            ),
            greedy: true
          },
          // "...", `...`
          {
            pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,
            greedy: true
          },
          // '...'
          // FIXME Multi-line single-quoted strings are not supported as they would break variables containing '
          {
            pattern: /'(?:[^'\\\r\n]|\\.)*'/,
            greedy: true
          }
        ],
        regex: [
          {
            pattern: RegExp(
              /\b(?:m|qr)(?![a-zA-Z0-9])\s*/.source + "(?:" + [
                // m/.../
                /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
                // m a...a
                // eslint-disable-next-line regexp/strict
                /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
                // m(...)
                // m{...}
                // m[...]
                // m<...>
                brackets
              ].join("|") + ")" + /[msixpodualngc]*/.source
            ),
            greedy: true
          },
          // The lookbehinds prevent -s from breaking
          {
            pattern: RegExp(
              /(^|[^-])\b(?:s|tr|y)(?![a-zA-Z0-9])\s*/.source + "(?:" + [
                // s/.../.../
                // eslint-disable-next-line regexp/strict
                /([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
                // s a...a...a
                // eslint-disable-next-line regexp/strict
                /([a-zA-Z0-9])(?:(?!\3)[^\\]|\\[\s\S])*\3(?:(?!\3)[^\\]|\\[\s\S])*\3/.source,
                // s(...)(...)
                // s{...}{...}
                // s[...][...]
                // s<...><...>
                // s(...)[...]
                brackets + /\s*/.source + brackets
              ].join("|") + ")" + /[msixpodualngcer]*/.source
            ),
            lookbehind: true,
            greedy: true
          },
          // /.../
          // The look-ahead tries to prevent two divisions on
          // the same line from being highlighted as regex.
          // This does not support multi-line regex.
          {
            pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/,
            greedy: true
          }
        ],
        // FIXME Not sure about the handling of ::, ', and #
        variable: [
          // ${^POSTMATCH}
          /[&*$@%]\{\^[A-Z]+\}/,
          // $^V
          /[&*$@%]\^[A-Z_]/,
          // ${...}
          /[&*$@%]#?(?=\{)/,
          // $foo
          /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/,
          // $1
          /[&*$@%]\d+/,
          // $_, @_, %!
          // The negative lookahead prevents from breaking the %= operator
          /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/
        ],
        filehandle: {
          // <>, <FOO>, _
          pattern: /<(?![<=])\S*?>|\b_\b/,
          alias: "symbol"
        },
        "v-string": {
          // v1.2, 1.2.3
          pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
          alias: "string"
        },
        function: {
          pattern: /(\bsub[ \t]+)\w+/,
          lookbehind: true
        },
        keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
        number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
        operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/,
        punctuation: /[{}[\];(),:]/
      };
    })(Prism);
  }
  return perl_1;
}
var perlExports = requirePerl();
const perl = /* @__PURE__ */ getDefaultExportFromCjs(perlExports);
const perl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: perl
}, [perlExports]);
export {
  perl$1 as p
};
