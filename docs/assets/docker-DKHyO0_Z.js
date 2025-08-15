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
var docker_1;
var hasRequiredDocker;
function requireDocker() {
  if (hasRequiredDocker) return docker_1;
  hasRequiredDocker = 1;
  docker_1 = docker2;
  docker2.displayName = "docker";
  docker2.aliases = ["dockerfile"];
  function docker2(Prism) {
    (function(Prism2) {
      var spaceAfterBackSlash = /\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source;
      var space = /(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(
        /<SP_BS>/g,
        function() {
          return spaceAfterBackSlash;
        }
      );
      var string = /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source;
      var option = /--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(
        /<STR>/g,
        function() {
          return string;
        }
      );
      var stringRule = {
        pattern: RegExp(string),
        greedy: true
      };
      var commentRule = {
        pattern: /(^[ \t]*)#.*/m,
        lookbehind: true,
        greedy: true
      };
      function re(source, flags) {
        source = source.replace(/<OPT>/g, function() {
          return option;
        }).replace(/<SP>/g, function() {
          return space;
        });
        return RegExp(source, flags);
      }
      Prism2.languages.docker = {
        instruction: {
          pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
          lookbehind: true,
          greedy: true,
          inside: {
            options: {
              pattern: re(
                /(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source,
                "i"
              ),
              lookbehind: true,
              greedy: true,
              inside: {
                property: {
                  pattern: /(^|\s)--[\w-]+/,
                  lookbehind: true
                },
                string: [
                  stringRule,
                  {
                    pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
                    lookbehind: true
                  }
                ],
                operator: /\\$/m,
                punctuation: /=/
              }
            },
            keyword: [
              {
                // https://docs.docker.com/engine/reference/builder/#healthcheck
                pattern: re(
                  /(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source,
                  "i"
                ),
                lookbehind: true,
                greedy: true
              },
              {
                // https://docs.docker.com/engine/reference/builder/#from
                pattern: re(
                  /(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source,
                  "i"
                ),
                lookbehind: true,
                greedy: true
              },
              {
                // https://docs.docker.com/engine/reference/builder/#onbuild
                pattern: re(/(^ONBUILD<SP>)\w+/.source, "i"),
                lookbehind: true,
                greedy: true
              },
              {
                pattern: /^\w+/,
                greedy: true
              }
            ],
            comment: commentRule,
            string: stringRule,
            variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
            operator: /\\$/m
          }
        },
        comment: commentRule
      };
      Prism2.languages.dockerfile = Prism2.languages.docker;
    })(Prism);
  }
  return docker_1;
}
var dockerExports = requireDocker();
const docker = /* @__PURE__ */ getDefaultExportFromCjs(dockerExports);
const docker$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: docker
}, [dockerExports]);
export {
  docker$1 as d
};
