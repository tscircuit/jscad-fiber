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
var uri_1;
var hasRequiredUri;
function requireUri() {
  if (hasRequiredUri) return uri_1;
  hasRequiredUri = 1;
  uri_1 = uri2;
  uri2.displayName = "uri";
  uri2.aliases = ["url"];
  function uri2(Prism) {
    Prism.languages.uri = {
      scheme: {
        pattern: /^[a-z][a-z0-9+.-]*:/im,
        greedy: true,
        inside: {
          "scheme-delimiter": /:$/
        }
      },
      fragment: {
        pattern: /#[\w\-.~!$&'()*+,;=%:@/?]*/,
        inside: {
          "fragment-delimiter": /^#/
        }
      },
      query: {
        pattern: /\?[\w\-.~!$&'()*+,;=%:@/?]*/,
        inside: {
          "query-delimiter": {
            pattern: /^\?/,
            greedy: true
          },
          "pair-delimiter": /[&;]/,
          pair: {
            pattern: /^[^=][\s\S]*/,
            inside: {
              key: /^[^=]+/,
              value: {
                pattern: /(^=)[\s\S]+/,
                lookbehind: true
              }
            }
          }
        }
      },
      authority: {
        pattern: RegExp(
          /^\/\//.source + // [ userinfo "@" ]
          /(?:[\w\-.~!$&'()*+,;=%:]*@)?/.source + // host
          ("(?:" + // IP-literal
          /\[(?:[0-9a-fA-F:.]{2,48}|v[0-9a-fA-F]+\.[\w\-.~!$&'()*+,;=]+)\]/.source + "|" + // IPv4address or registered name
          /[\w\-.~!$&'()*+,;=%]*/.source + ")") + // [ ":" port ]
          /(?::\d*)?/.source,
          "m"
        ),
        inside: {
          "authority-delimiter": /^\/\//,
          "user-info-segment": {
            pattern: /^[\w\-.~!$&'()*+,;=%:]*@/,
            inside: {
              "user-info-delimiter": /@$/,
              "user-info": /^[\w\-.~!$&'()*+,;=%:]+/
            }
          },
          "port-segment": {
            pattern: /:\d*$/,
            inside: {
              "port-delimiter": /^:/,
              port: /^\d+/
            }
          },
          host: {
            pattern: /[\s\S]+/,
            inside: {
              "ip-literal": {
                pattern: /^\[[\s\S]+\]$/,
                inside: {
                  "ip-literal-delimiter": /^\[|\]$/,
                  "ipv-future": /^v[\s\S]+/,
                  "ipv6-address": /^[\s\S]+/
                }
              },
              "ipv4-address": /^(?:(?:[03-9]\d?|[12]\d{0,2})\.){3}(?:[03-9]\d?|[12]\d{0,2})$/
            }
          }
        }
      },
      path: {
        pattern: /^[\w\-.~!$&'()*+,;=%:@/]+/m,
        inside: {
          "path-separator": /\//
        }
      }
    };
    Prism.languages.url = Prism.languages.uri;
  }
  return uri_1;
}
var uriExports = requireUri();
const uri = /* @__PURE__ */ getDefaultExportFromCjs(uriExports);
const uri$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: uri
}, [uriExports]);
export {
  uri$1 as u
};
