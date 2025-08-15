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
var fortran_1;
var hasRequiredFortran;
function requireFortran() {
  if (hasRequiredFortran) return fortran_1;
  hasRequiredFortran = 1;
  fortran_1 = fortran2;
  fortran2.displayName = "fortran";
  fortran2.aliases = [];
  function fortran2(Prism) {
    Prism.languages.fortran = {
      "quoted-number": {
        pattern: /[BOZ](['"])[A-F0-9]+\1/i,
        alias: "number"
      },
      string: {
        pattern: /(?:\b\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:[ \t]*!.*(?:\r\n?|\n)|(?![ \t]*!))|(?!\1).)*(?:\1|&)/,
        inside: {
          comment: {
            pattern: /(&(?:\r\n?|\n)\s*)!.*/,
            lookbehind: true
          }
        }
      },
      comment: {
        pattern: /!.*/,
        greedy: true
      },
      boolean: /\.(?:FALSE|TRUE)\.(?:_\w+)?/i,
      number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,
      keyword: [
        // Types
        /\b(?:CHARACTER|COMPLEX|DOUBLE ?PRECISION|INTEGER|LOGICAL|REAL)\b/i,
        // END statements
        /\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i,
        // Statements
        /\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i,
        // Others
        /\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEIF|ELSEWHERE|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i
      ],
      operator: [
        /\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.[A-Z]+\./i,
        {
          // Use lookbehind to prevent confusion with (/ /)
          pattern: /(^|(?!\().)\/(?!\))/,
          lookbehind: true
        }
      ],
      punctuation: /\(\/|\/\)|[(),;:&]/
    };
  }
  return fortran_1;
}
var fortranExports = requireFortran();
const fortran = /* @__PURE__ */ getDefaultExportFromCjs(fortranExports);
const fortran$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: fortran
}, [fortranExports]);
export {
  fortran$1 as f
};
