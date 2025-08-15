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
var bsl_1;
var hasRequiredBsl;
function requireBsl() {
  if (hasRequiredBsl) return bsl_1;
  hasRequiredBsl = 1;
  bsl_1 = bsl2;
  bsl2.displayName = "bsl";
  bsl2.aliases = [];
  function bsl2(Prism) {
    Prism.languages.bsl = {
      comment: /\/\/.*/,
      string: [
        // Строки
        // Strings
        {
          pattern: /"(?:[^"]|"")*"(?!")/,
          greedy: true
        },
        // Дата и время
        // Date & time
        {
          pattern: /'(?:[^'\r\n\\]|\\.)*'/
        }
      ],
      keyword: [
        {
          // RU
          pattern: /(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:пока|для|новый|прервать|попытка|исключение|вызватьисключение|иначе|конецпопытки|неопределено|функция|перем|возврат|конецфункции|если|иначеесли|процедура|конецпроцедуры|тогда|знач|экспорт|конецесли|из|каждого|истина|ложь|по|цикл|конеццикла|выполнить)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,
          lookbehind: true
        },
        {
          // EN
          pattern: /\b(?:break|do|each|else|elseif|enddo|endfunction|endif|endprocedure|endtry|except|execute|export|false|for|function|if|in|new|null|procedure|raise|return|then|to|true|try|undefined|val|var|while)\b/i
        }
      ],
      number: {
        pattern: /(^(?=\d)|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:\d+(?:\.\d*)?|\.\d+)(?:E[+-]?\d+)?/i,
        lookbehind: true
      },
      operator: [
        /[<>+\-*/]=?|[%=]/,
        // RU
        {
          pattern: /(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:и|или|не)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,
          lookbehind: true
        },
        // EN
        {
          pattern: /\b(?:and|not|or)\b/i
        }
      ],
      punctuation: /\(\.|\.\)|[()\[\]:;,.]/,
      directive: [
        // Теги препроцессора вида &Клиент, &Сервер, ...
        // Preprocessor tags of the type &Client, &Server, ...
        {
          pattern: /^([ \t]*)&.*/m,
          lookbehind: true,
          greedy: true,
          alias: "important"
        },
        // Инструкции препроцессора вида:
        // #Если Сервер Тогда
        // ...
        // #КонецЕсли
        // Preprocessor instructions of the form:
        // #If Server Then
        // ...
        // #EndIf
        {
          pattern: /^([ \t]*)#.*/gm,
          lookbehind: true,
          greedy: true,
          alias: "important"
        }
      ]
    };
    Prism.languages.oscript = Prism.languages["bsl"];
  }
  return bsl_1;
}
var bslExports = requireBsl();
const bsl = /* @__PURE__ */ getDefaultExportFromCjs(bslExports);
const bsl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: bsl
}, [bslExports]);
export {
  bsl$1 as b
};
