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
var moonscript_1;
var hasRequiredMoonscript;
function requireMoonscript() {
  if (hasRequiredMoonscript) return moonscript_1;
  hasRequiredMoonscript = 1;
  moonscript_1 = moonscript2;
  moonscript2.displayName = "moonscript";
  moonscript2.aliases = ["moon"];
  function moonscript2(Prism) {
    Prism.languages.moonscript = {
      comment: /--.*/,
      string: [
        {
          pattern: /'[^']*'|\[(=*)\[[\s\S]*?\]\1\]/,
          greedy: true
        },
        {
          pattern: /"[^"]*"/,
          greedy: true,
          inside: {
            interpolation: {
              pattern: /#\{[^{}]*\}/,
              inside: {
                moonscript: {
                  pattern: /(^#\{)[\s\S]+(?=\})/,
                  lookbehind: true,
                  inside: null
                  // see beow
                },
                "interpolation-punctuation": {
                  pattern: /#\{|\}/,
                  alias: "punctuation"
                }
              }
            }
          }
        }
      ],
      "class-name": [
        {
          pattern: /(\b(?:class|extends)[ \t]+)\w+/,
          lookbehind: true
        },
        // class-like names start with a capital letter
        /\b[A-Z]\w*/
      ],
      keyword: /\b(?:class|continue|do|else|elseif|export|extends|for|from|if|import|in|local|nil|return|self|super|switch|then|unless|using|when|while|with)\b/,
      variable: /@@?\w*/,
      property: {
        pattern: /\b(?!\d)\w+(?=:)|(:)(?!\d)\w+/,
        lookbehind: true
      },
      function: {
        pattern: /\b(?:_G|_VERSION|assert|collectgarbage|coroutine\.(?:create|resume|running|status|wrap|yield)|debug\.(?:debug|getfenv|gethook|getinfo|getlocal|getmetatable|getregistry|getupvalue|setfenv|sethook|setlocal|setmetatable|setupvalue|traceback)|dofile|error|getfenv|getmetatable|io\.(?:close|flush|input|lines|open|output|popen|read|stderr|stdin|stdout|tmpfile|type|write)|ipairs|load|loadfile|loadstring|math\.(?:abs|acos|asin|atan|atan2|ceil|cos|cosh|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|pi|pow|rad|random|randomseed|sin|sinh|sqrt|tan|tanh)|module|next|os\.(?:clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname)|package\.(?:cpath|loaded|loadlib|path|preload|seeall)|pairs|pcall|print|rawequal|rawget|rawset|require|select|setfenv|setmetatable|string\.(?:byte|char|dump|find|format|gmatch|gsub|len|lower|match|rep|reverse|sub|upper)|table\.(?:concat|insert|maxn|remove|sort)|tonumber|tostring|type|unpack|xpcall)\b/,
        inside: {
          punctuation: /\./
        }
      },
      boolean: /\b(?:false|true)\b/,
      number: /(?:\B\.\d+|\b\d+\.\d+|\b\d+(?=[eE]))(?:[eE][-+]?\d+)?\b|\b(?:0x[a-fA-F\d]+|\d+)(?:U?LL)?\b/,
      operator: /\.{3}|[-=]>|~=|(?:[-+*/%<>!=]|\.\.)=?|[:#^]|\b(?:and|or)\b=?|\b(?:not)\b/,
      punctuation: /[.,()[\]{}\\]/
    };
    Prism.languages.moonscript.string[1].inside.interpolation.inside.moonscript.inside = Prism.languages.moonscript;
    Prism.languages.moon = Prism.languages.moonscript;
  }
  return moonscript_1;
}
var moonscriptExports = requireMoonscript();
const moonscript = /* @__PURE__ */ getDefaultExportFromCjs(moonscriptExports);
const moonscript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: moonscript
}, [moonscriptExports]);
export {
  moonscript$1 as m
};
