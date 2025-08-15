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
var kumir_1;
var hasRequiredKumir;
function requireKumir() {
  if (hasRequiredKumir) return kumir_1;
  hasRequiredKumir = 1;
  kumir_1 = kumir2;
  kumir2.displayName = "kumir";
  kumir2.aliases = ["kum"];
  function kumir2(Prism) {
    (function(Prism2) {
      var nonId = /\s\x00-\x1f\x22-\x2f\x3a-\x3f\x5b-\x5e\x60\x7b-\x7e/.source;
      function wrapId(pattern, flags) {
        return RegExp(pattern.replace(/<nonId>/g, nonId), flags);
      }
      Prism2.languages.kumir = {
        comment: {
          pattern: /\|.*/
        },
        prolog: {
          pattern: /#.*/,
          greedy: true
        },
        string: {
          pattern: /"[^\n\r"]*"|'[^\n\r']*'/,
          greedy: true
        },
        boolean: {
          pattern: wrapId(/(^|[<nonId>])(?:да|нет)(?=[<nonId>]|$)/.source),
          lookbehind: true
        },
        "operator-word": {
          pattern: wrapId(/(^|[<nonId>])(?:и|или|не)(?=[<nonId>]|$)/.source),
          lookbehind: true,
          alias: "keyword"
        },
        "system-variable": {
          pattern: wrapId(/(^|[<nonId>])знач(?=[<nonId>]|$)/.source),
          lookbehind: true,
          alias: "keyword"
        },
        type: [
          {
            pattern: wrapId(
              /(^|[<nonId>])(?:вещ|лит|лог|сим|цел)(?:\x20*таб)?(?=[<nonId>]|$)/.source
            ),
            lookbehind: true,
            alias: "builtin"
          },
          {
            pattern: wrapId(
              /(^|[<nonId>])(?:компл|сканкод|файл|цвет)(?=[<nonId>]|$)/.source
            ),
            lookbehind: true,
            alias: "important"
          }
        ],
        /**
         * Should be performed after searching for type names because of "таб".
         * "таб" is a reserved word, but never used without a preceding type name.
         * "НАЗНАЧИТЬ", "Фввод", and "Фвывод" are not reserved words.
         */
        keyword: {
          pattern: wrapId(
            /(^|[<nonId>])(?:алг|арг(?:\x20*рез)?|ввод|ВКЛЮЧИТЬ|вс[её]|выбор|вывод|выход|дано|для|до|дс|если|иначе|исп|использовать|кон(?:(?:\x20+|_)исп)?|кц(?:(?:\x20+|_)при)?|надо|нач|нс|нц|от|пауза|пока|при|раза?|рез|стоп|таб|то|утв|шаг)(?=[<nonId>]|$)/.source
          ),
          lookbehind: true
        },
        /** Should be performed after searching for reserved words. */
        name: {
          // eslint-disable-next-line regexp/no-super-linear-backtracking
          pattern: wrapId(
            /(^|[<nonId>])[^\d<nonId>][^<nonId>]*(?:\x20+[^<nonId>]+)*(?=[<nonId>]|$)/.source
          ),
          lookbehind: true
        },
        /** Should be performed after searching for names. */
        number: {
          pattern: wrapId(
            /(^|[<nonId>])(?:\B\$[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?=[<nonId>]|$)/.source,
            "i"
          ),
          lookbehind: true
        },
        /** Should be performed after searching for words. */
        punctuation: /:=|[(),:;\[\]]/,
        /**
         * Should be performed after searching for
         * - numeric constants (because of "+" and "-");
         * - punctuation marks (because of ":=" and "=").
         */
        "operator-char": {
          pattern: /\*\*?|<[=>]?|>=?|[-+/=]/,
          alias: "operator"
        }
      };
      Prism2.languages.kum = Prism2.languages.kumir;
    })(Prism);
  }
  return kumir_1;
}
var kumirExports = requireKumir();
const kumir = /* @__PURE__ */ getDefaultExportFromCjs(kumirExports);
const kumir$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: kumir
}, [kumirExports]);
export {
  kumir$1 as k
};
