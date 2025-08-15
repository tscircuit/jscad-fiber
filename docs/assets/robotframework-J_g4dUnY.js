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
var robotframework_1;
var hasRequiredRobotframework;
function requireRobotframework() {
  if (hasRequiredRobotframework) return robotframework_1;
  hasRequiredRobotframework = 1;
  robotframework_1 = robotframework2;
  robotframework2.displayName = "robotframework";
  robotframework2.aliases = [];
  function robotframework2(Prism) {
    (function(Prism2) {
      var comment = {
        pattern: /(^[ \t]*| {2}|\t)#.*/m,
        lookbehind: true,
        greedy: true
      };
      var variable = {
        pattern: /((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,
        lookbehind: true,
        inside: {
          punctuation: /^[$@&%]\{|\}$/
        }
      };
      function createSection(name, inside) {
        var extendecInside = {};
        extendecInside["section-header"] = {
          pattern: /^ ?\*{3}.+?\*{3}/,
          alias: "keyword"
        };
        for (var token in inside) {
          extendecInside[token] = inside[token];
        }
        extendecInside["tag"] = {
          pattern: /([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/,
          lookbehind: true,
          inside: {
            punctuation: /\[|\]/
          }
        };
        extendecInside["variable"] = variable;
        extendecInside["comment"] = comment;
        return {
          pattern: RegExp(
            /^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(
              /<name>/g,
              function() {
                return name;
              }
            ),
            "im"
          ),
          alias: "section",
          inside: extendecInside
        };
      }
      var docTag = {
        pattern: /(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,
        lookbehind: true,
        alias: "string"
      };
      var testNameLike = {
        pattern: /([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,
        lookbehind: true,
        alias: "function",
        inside: {
          variable
        }
      };
      var testPropertyLike = {
        pattern: /([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,
        lookbehind: true,
        inside: {
          variable
        }
      };
      Prism2.languages["robotframework"] = {
        settings: createSection("Settings", {
          documentation: {
            pattern: /([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,
            lookbehind: true,
            alias: "string"
          },
          property: {
            pattern: /([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,
            lookbehind: true
          }
        }),
        variables: createSection("Variables"),
        "test-cases": createSection("Test Cases", {
          "test-name": testNameLike,
          documentation: docTag,
          property: testPropertyLike
        }),
        keywords: createSection("Keywords", {
          "keyword-name": testNameLike,
          documentation: docTag,
          property: testPropertyLike
        }),
        tasks: createSection("Tasks", {
          "task-name": testNameLike,
          documentation: docTag,
          property: testPropertyLike
        }),
        comment
      };
      Prism2.languages.robot = Prism2.languages["robotframework"];
    })(Prism);
  }
  return robotframework_1;
}
var robotframeworkExports = requireRobotframework();
const robotframework = /* @__PURE__ */ getDefaultExportFromCjs(robotframeworkExports);
const robotframework$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: robotframework
}, [robotframeworkExports]);
export {
  robotframework$1 as r
};
