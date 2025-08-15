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
var xeora_1;
var hasRequiredXeora;
function requireXeora() {
  if (hasRequiredXeora) return xeora_1;
  hasRequiredXeora = 1;
  xeora_1 = xeora2;
  xeora2.displayName = "xeora";
  xeora2.aliases = ["xeoracube"];
  function xeora2(Prism) {
    (function(Prism2) {
      Prism2.languages.xeora = Prism2.languages.extend("markup", {
        constant: {
          pattern: /\$(?:DomainContents|PageRenderDuration)\$/,
          inside: {
            punctuation: {
              pattern: /\$/
            }
          }
        },
        variable: {
          pattern: /\$@?(?:#+|[-+*~=^])?[\w.]+\$/,
          inside: {
            punctuation: {
              pattern: /[$.]/
            },
            operator: {
              pattern: /#+|[-+*~=^@]/
            }
          }
        },
        "function-inline": {
          pattern: /\$F:[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\$/,
          inside: {
            variable: {
              pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,
              inside: {
                punctuation: {
                  pattern: /[,.|]/
                },
                operator: {
                  pattern: /#+|[-+*~=^@]/
                }
              }
            },
            punctuation: {
              pattern: /\$\w:|[$:?.,|]/
            }
          },
          alias: "function"
        },
        "function-block": {
          pattern: /\$XF:\{[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\}:XF\$/,
          inside: {
            punctuation: {
              pattern: /[$:{}?.,|]/
            }
          },
          alias: "function"
        },
        "directive-inline": {
          pattern: /\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\/\w.]+\$/,
          inside: {
            punctuation: {
              pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
              inside: {
                tag: {
                  pattern: /#\d/
                }
              }
            }
          },
          alias: "function"
        },
        "directive-block-open": {
          pattern: /\$\w+:\{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\w.]+:\{(?:![A-Z]+)?/,
          inside: {
            punctuation: {
              pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
              inside: {
                tag: {
                  pattern: /#\d/
                }
              }
            },
            attribute: {
              pattern: /![A-Z]+$/,
              inside: {
                punctuation: {
                  pattern: /!/
                }
              },
              alias: "keyword"
            }
          },
          alias: "function"
        },
        "directive-block-separator": {
          pattern: /\}:[-\w.]+:\{/,
          inside: {
            punctuation: {
              pattern: /[:{}]/
            }
          },
          alias: "function"
        },
        "directive-block-close": {
          pattern: /\}:[-\w.]+\$/,
          inside: {
            punctuation: {
              pattern: /[:{}$]/
            }
          },
          alias: "function"
        }
      });
      Prism2.languages.insertBefore(
        "inside",
        "punctuation",
        {
          variable: Prism2.languages.xeora["function-inline"].inside["variable"]
        },
        Prism2.languages.xeora["function-block"]
      );
      Prism2.languages.xeoracube = Prism2.languages.xeora;
    })(Prism);
  }
  return xeora_1;
}
var xeoraExports = requireXeora();
const xeora = /* @__PURE__ */ getDefaultExportFromCjs(xeoraExports);
const xeora$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: xeora
}, [xeoraExports]);
export {
  xeora$1 as x
};
