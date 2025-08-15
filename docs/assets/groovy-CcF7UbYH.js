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
var groovy_1;
var hasRequiredGroovy;
function requireGroovy() {
  if (hasRequiredGroovy) return groovy_1;
  hasRequiredGroovy = 1;
  groovy_1 = groovy2;
  groovy2.displayName = "groovy";
  groovy2.aliases = [];
  function groovy2(Prism) {
    Prism.languages.groovy = Prism.languages.extend("clike", {
      string: [
        {
          // https://groovy-lang.org/syntax.html#_dollar_slashy_string
          pattern: /("""|''')(?:[^\\]|\\[\s\S])*?\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,
          greedy: true
        },
        {
          // TODO: Slash strings (e.g. /foo/) can contain line breaks but this will cause a lot of trouble with
          // simple division (see JS regex), so find a fix maybe?
          pattern: /(["'/])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        }
      ],
      keyword: /\b(?:abstract|as|assert|boolean|break|byte|case|catch|char|class|const|continue|def|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
      number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,
      operator: {
        pattern: /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
        lookbehind: true
      },
      punctuation: /\.+|[{}[\];(),:$]/
    });
    Prism.languages.insertBefore("groovy", "string", {
      shebang: {
        pattern: /#!.+/,
        alias: "comment"
      }
    });
    Prism.languages.insertBefore("groovy", "punctuation", {
      "spock-block": /\b(?:and|cleanup|expect|given|setup|then|when|where):/
    });
    Prism.languages.insertBefore("groovy", "function", {
      annotation: {
        pattern: /(^|[^.])@\w+/,
        lookbehind: true,
        alias: "punctuation"
      }
    });
    Prism.hooks.add("wrap", function(env) {
      if (env.language === "groovy" && env.type === "string") {
        var delimiter = env.content.value[0];
        if (delimiter != "'") {
          var pattern = /([^\\])(?:\$(?:\{.*?\}|[\w.]+))/;
          if (delimiter === "$") {
            pattern = /([^\$])(?:\$(?:\{.*?\}|[\w.]+))/;
          }
          env.content.value = env.content.value.replace(/&lt;/g, "<").replace(/&amp;/g, "&");
          env.content = Prism.highlight(env.content.value, {
            expression: {
              pattern,
              lookbehind: true,
              inside: Prism.languages.groovy
            }
          });
          env.classes.push(delimiter === "/" ? "regex" : "gstring");
        }
      }
    });
  }
  return groovy_1;
}
var groovyExports = requireGroovy();
const groovy = /* @__PURE__ */ getDefaultExportFromCjs(groovyExports);
const groovy$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: groovy
}, [groovyExports]);
export {
  groovy$1 as g
};
