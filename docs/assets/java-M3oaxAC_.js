var java_1;
var hasRequiredJava;
function requireJava() {
  if (hasRequiredJava) return java_1;
  hasRequiredJava = 1;
  java_1 = java;
  java.displayName = "java";
  java.aliases = [];
  function java(Prism) {
    (function(Prism2) {
      var keywords = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/;
      var classNamePrefix = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source;
      var className = {
        pattern: RegExp(classNamePrefix + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
        lookbehind: true,
        inside: {
          namespace: {
            pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
            inside: {
              punctuation: /\./
            }
          },
          punctuation: /\./
        }
      };
      Prism2.languages.java = Prism2.languages.extend("clike", {
        string: {
          pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
          lookbehind: true,
          greedy: true
        },
        "class-name": [
          className,
          {
            // variables and parameters
            // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
            pattern: RegExp(
              classNamePrefix + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source
            ),
            lookbehind: true,
            inside: className.inside
          }
        ],
        keyword: keywords,
        function: [
          Prism2.languages.clike.function,
          {
            pattern: /(::\s*)[a-z_]\w*/,
            lookbehind: true
          }
        ],
        number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
        operator: {
          pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
          lookbehind: true
        }
      });
      Prism2.languages.insertBefore("java", "string", {
        "triple-quoted-string": {
          // http://openjdk.java.net/jeps/355#Description
          pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
          greedy: true,
          alias: "string"
        },
        char: {
          pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
          greedy: true
        }
      });
      Prism2.languages.insertBefore("java", "class-name", {
        annotation: {
          pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
          lookbehind: true,
          alias: "punctuation"
        },
        generics: {
          pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
          inside: {
            "class-name": className,
            keyword: keywords,
            punctuation: /[<>(),.:]/,
            operator: /[?&|]/
          }
        },
        namespace: {
          pattern: RegExp(
            /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(
              /<keyword>/g,
              function() {
                return keywords.source;
              }
            )
          ),
          lookbehind: true,
          inside: {
            punctuation: /\./
          }
        }
      });
    })(Prism);
  }
  return java_1;
}
export {
  requireJava as r
};
