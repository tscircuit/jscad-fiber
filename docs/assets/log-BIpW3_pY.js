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
var log_1;
var hasRequiredLog;
function requireLog() {
  if (hasRequiredLog) return log_1;
  hasRequiredLog = 1;
  log_1 = log2;
  log2.displayName = "log";
  log2.aliases = [];
  function log2(Prism) {
    Prism.languages.log = {
      string: {
        // Single-quoted strings must not be confused with plain text. E.g. Can't isn't Susan's Chris' toy
        pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?![st] | \w)(?:[^'\\\r\n]|\\.)*'/,
        greedy: true
      },
      exception: {
        pattern: /(^|[^\w.])[a-z][\w.]*(?:Error|Exception):.*(?:(?:\r\n?|\n)[ \t]*(?:at[ \t].+|\.{3}.*|Caused by:.*))+(?:(?:\r\n?|\n)[ \t]*\.\.\. .*)?/,
        lookbehind: true,
        greedy: true,
        alias: ["javastacktrace", "language-javastacktrace"],
        inside: Prism.languages["javastacktrace"] || {
          keyword: /\bat\b/,
          function: /[a-z_][\w$]*(?=\()/,
          punctuation: /[.:()]/
        }
      },
      level: [
        {
          pattern: /\b(?:ALERT|CRIT|CRITICAL|EMERG|EMERGENCY|ERR|ERROR|FAILURE|FATAL|SEVERE)\b/,
          alias: ["error", "important"]
        },
        {
          pattern: /\b(?:WARN|WARNING|WRN)\b/,
          alias: ["warning", "important"]
        },
        {
          pattern: /\b(?:DISPLAY|INF|INFO|NOTICE|STATUS)\b/,
          alias: ["info", "keyword"]
        },
        {
          pattern: /\b(?:DBG|DEBUG|FINE)\b/,
          alias: ["debug", "keyword"]
        },
        {
          pattern: /\b(?:FINER|FINEST|TRACE|TRC|VERBOSE|VRB)\b/,
          alias: ["trace", "comment"]
        }
      ],
      property: {
        pattern: /((?:^|[\]|])[ \t]*)[a-z_](?:[\w-]|\b\/\b)*(?:[. ]\(?\w(?:[\w-]|\b\/\b)*\)?)*:(?=\s)/im,
        lookbehind: true
      },
      separator: {
        pattern: /(^|[^-+])-{3,}|={3,}|\*{3,}|- - /m,
        lookbehind: true,
        alias: "comment"
      },
      url: /\b(?:file|ftp|https?):\/\/[^\s|,;'"]*[^\s|,;'">.]/,
      email: {
        pattern: /(^|\s)[-\w+.]+@[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)+(?=\s)/,
        lookbehind: true,
        alias: "url"
      },
      "ip-address": {
        pattern: /\b(?:\d{1,3}(?:\.\d{1,3}){3})\b/,
        alias: "constant"
      },
      "mac-address": {
        pattern: /\b[a-f0-9]{2}(?::[a-f0-9]{2}){5}\b/i,
        alias: "constant"
      },
      domain: {
        pattern: /(^|\s)[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)*\.[a-z][a-z0-9-]+(?=\s)/,
        lookbehind: true,
        alias: "constant"
      },
      uuid: {
        pattern: /\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/i,
        alias: "constant"
      },
      hash: {
        pattern: /\b(?:[a-f0-9]{32}){1,2}\b/i,
        alias: "constant"
      },
      "file-path": {
        pattern: /\b[a-z]:[\\/][^\s|,;:(){}\[\]"']+|(^|[\s:\[\](>|])\.{0,2}\/\w[^\s|,;:(){}\[\]"']*/i,
        lookbehind: true,
        greedy: true,
        alias: "string"
      },
      date: {
        pattern: RegExp(
          /\b\d{4}[-/]\d{2}[-/]\d{2}(?:T(?=\d{1,2}:)|(?=\s\d{1,2}:))/.source + "|" + /\b\d{1,4}[-/ ](?:\d{1,2}|Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)[-/ ]\d{2,4}T?\b/.source + "|" + /\b(?:(?:Fri|Mon|Sat|Sun|Thu|Tue|Wed)(?:\s{1,2}(?:Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep))?|Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)\s{1,2}\d{1,2}\b/.source,
          "i"
        ),
        alias: "number"
      },
      time: {
        pattern: /\b\d{1,2}:\d{1,2}:\d{1,2}(?:[.,:]\d+)?(?:\s?[+-]\d{2}:?\d{2}|Z)?\b/,
        alias: "number"
      },
      boolean: /\b(?:false|null|true)\b/i,
      number: {
        pattern: /(^|[^.\w])(?:0x[a-f0-9]+|0o[0-7]+|0b[01]+|v?\d[\da-f]*(?:\.\d+)*(?:e[+-]?\d+)?[a-z]{0,3}\b)\b(?!\.\w)/i,
        lookbehind: true
      },
      operator: /[;:?<=>~/@!$%&+\-|^(){}*#]/,
      punctuation: /[\[\].,]/
    };
  }
  return log_1;
}
var logExports = requireLog();
const log = /* @__PURE__ */ getDefaultExportFromCjs(logExports);
const log$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: log
}, [logExports]);
export {
  log$1 as l
};
