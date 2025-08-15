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
var http_1;
var hasRequiredHttp;
function requireHttp() {
  if (hasRequiredHttp) return http_1;
  hasRequiredHttp = 1;
  http_1 = http2;
  http2.displayName = "http";
  http2.aliases = [];
  function http2(Prism) {
    (function(Prism2) {
      function headerValueOf(name) {
        return RegExp("(^(?:" + name + "):[ 	]*(?![ 	]))[^]+", "i");
      }
      Prism2.languages.http = {
        "request-line": {
          pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
          inside: {
            // HTTP Method
            method: {
              pattern: /^[A-Z]+\b/,
              alias: "property"
            },
            // Request Target e.g. http://example.com, /path/to/file
            "request-target": {
              pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
              lookbehind: true,
              alias: "url",
              inside: Prism2.languages.uri
            },
            // HTTP Version
            "http-version": {
              pattern: /^(\s)HTTP\/[\d.]+/,
              lookbehind: true,
              alias: "property"
            }
          }
        },
        "response-status": {
          pattern: /^HTTP\/[\d.]+ \d+ .+/m,
          inside: {
            // HTTP Version
            "http-version": {
              pattern: /^HTTP\/[\d.]+/,
              alias: "property"
            },
            // Status Code
            "status-code": {
              pattern: /^(\s)\d+(?=\s)/,
              lookbehind: true,
              alias: "number"
            },
            // Reason Phrase
            "reason-phrase": {
              pattern: /^(\s).+/,
              lookbehind: true,
              alias: "string"
            }
          }
        },
        header: {
          pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
          inside: {
            "header-value": [
              {
                pattern: headerValueOf(/Content-Security-Policy/.source),
                lookbehind: true,
                alias: ["csp", "languages-csp"],
                inside: Prism2.languages.csp
              },
              {
                pattern: headerValueOf(/Public-Key-Pins(?:-Report-Only)?/.source),
                lookbehind: true,
                alias: ["hpkp", "languages-hpkp"],
                inside: Prism2.languages.hpkp
              },
              {
                pattern: headerValueOf(/Strict-Transport-Security/.source),
                lookbehind: true,
                alias: ["hsts", "languages-hsts"],
                inside: Prism2.languages.hsts
              },
              {
                pattern: headerValueOf(/[^:]+/.source),
                lookbehind: true
              }
            ],
            "header-name": {
              pattern: /^[^:]+/,
              alias: "keyword"
            },
            punctuation: /^:/
          }
        }
      };
      var langs = Prism2.languages;
      var httpLanguages = {
        "application/javascript": langs.javascript,
        "application/json": langs.json || langs.javascript,
        "application/xml": langs.xml,
        "text/xml": langs.xml,
        "text/html": langs.html,
        "text/css": langs.css,
        "text/plain": langs.plain
      };
      var suffixTypes = {
        "application/json": true,
        "application/xml": true
      };
      function getSuffixPattern(contentType2) {
        var suffix = contentType2.replace(/^[a-z]+\//, "");
        var suffixPattern = "\\w+/(?:[\\w.-]+\\+)+" + suffix + "(?![+\\w.-])";
        return "(?:" + contentType2 + "|" + suffixPattern + ")";
      }
      var options;
      for (var contentType in httpLanguages) {
        if (httpLanguages[contentType]) {
          options = options || {};
          var pattern = suffixTypes[contentType] ? getSuffixPattern(contentType) : contentType;
          options[contentType.replace(/\//g, "-")] = {
            pattern: RegExp(
              "(" + /content-type:\s*/.source + pattern + /(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source + ")" + // This is a little interesting:
              // The HTTP format spec required 1 empty line before the body to make everything unambiguous.
              // However, when writing code by hand (e.g. to display on a website) people can forget about this,
              // so we want to be liberal here. We will allow the empty line to be omitted if the first line of
              // the body does not start with a [\w-] character (as headers do).
              /[^ \t\w-][\s\S]*/.source,
              "i"
            ),
            lookbehind: true,
            inside: httpLanguages[contentType]
          };
        }
      }
      if (options) {
        Prism2.languages.insertBefore("http", "header", options);
      }
    })(Prism);
  }
  return http_1;
}
var httpExports = requireHttp();
const http = /* @__PURE__ */ getDefaultExportFromCjs(httpExports);
const http$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: http
}, [httpExports]);
export {
  http$1 as h
};
