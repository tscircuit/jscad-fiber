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
var git_1;
var hasRequiredGit;
function requireGit() {
  if (hasRequiredGit) return git_1;
  hasRequiredGit = 1;
  git_1 = git2;
  git2.displayName = "git";
  git2.aliases = [];
  function git2(Prism) {
    Prism.languages.git = {
      /*
       * A simple one line comment like in a git status command
       * For instance:
       * $ git status
       * # On branch infinite-scroll
       * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
       * # and have 1 and 2 different commits each, respectively.
       * nothing to commit (working directory clean)
       */
      comment: /^#.*/m,
      /*
       * Regexp to match the changed lines in a git diff output. Check the example below.
       */
      deleted: /^[-–].*/m,
      inserted: /^\+.*/m,
      /*
       * a string (double and simple quote)
       */
      string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
      /*
       * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
       * For instance:
       * $ git add file.txt
       */
      command: {
        pattern: /^.*\$ git .*$/m,
        inside: {
          /*
           * A git command can contain a parameter starting by a single or a double dash followed by a string
           * For instance:
           * $ git diff --cached
           * $ git log -p
           */
          parameter: /\s--?\w+/
        }
      },
      /*
       * Coordinates displayed in a git diff command
       * For instance:
       * $ git diff
       * diff --git file.txt file.txt
       * index 6214953..1d54a52 100644
       * --- file.txt
       * +++ file.txt
       * @@ -1 +1,2 @@
       * -Here's my tetx file
       * +Here's my text file
       * +And this is the second line
       */
      coord: /^@@.*@@$/m,
      /*
       * Match a "commit [SHA1]" line in a git log output.
       * For instance:
       * $ git log
       * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
       * Author: lgiraudel
       * Date:   Mon Feb 17 11:18:34 2014 +0100
       *
       *     Add of a new line
       */
      "commit-sha1": /^commit \w{40}$/m
    };
  }
  return git_1;
}
var gitExports = requireGit();
const git = /* @__PURE__ */ getDefaultExportFromCjs(gitExports);
const git$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: git
}, [gitExports]);
export {
  git$1 as g
};
