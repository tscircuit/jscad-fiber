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
var stan_1;
var hasRequiredStan;
function requireStan() {
  if (hasRequiredStan) return stan_1;
  hasRequiredStan = 1;
  stan_1 = stan2;
  stan2.displayName = "stan";
  stan2.aliases = [];
  function stan2(Prism) {
    (function(Prism2) {
      var higherOrderFunctions = /\b(?:algebra_solver|algebra_solver_newton|integrate_1d|integrate_ode|integrate_ode_bdf|integrate_ode_rk45|map_rect|ode_(?:adams|bdf|ckrk|rk45)(?:_tol)?|ode_adjoint_tol_ctl|reduce_sum|reduce_sum_static)\b/;
      Prism2.languages.stan = {
        comment: /\/\/.*|\/\*[\s\S]*?\*\/|#(?!include).*/,
        string: {
          // String literals can contain spaces and any printable ASCII characters except for " and \
          // https://mc-stan.org/docs/2_24/reference-manual/print-statements-section.html#string-literals
          pattern: /"[\x20\x21\x23-\x5B\x5D-\x7E]*"/,
          greedy: true
        },
        directive: {
          pattern: /^([ \t]*)#include\b.*/m,
          lookbehind: true,
          alias: "property"
        },
        "function-arg": {
          pattern: RegExp(
            "(" + higherOrderFunctions.source + /\s*\(\s*/.source + ")" + /[a-zA-Z]\w*/.source
          ),
          lookbehind: true,
          alias: "function"
        },
        constraint: {
          pattern: /(\b(?:int|matrix|real|row_vector|vector)\s*)<[^<>]*>/,
          lookbehind: true,
          inside: {
            expression: {
              pattern: /(=\s*)\S(?:\S|\s+(?!\s))*?(?=\s*(?:>$|,\s*\w+\s*=))/,
              lookbehind: true,
              inside: null
              // see below
            },
            property: /\b[a-z]\w*(?=\s*=)/i,
            operator: /=/,
            punctuation: /^<|>$|,/
          }
        },
        keyword: [
          {
            pattern: /\bdata(?=\s*\{)|\b(?:functions|generated|model|parameters|quantities|transformed)\b/,
            alias: "program-block"
          },
          /\b(?:array|break|cholesky_factor_corr|cholesky_factor_cov|complex|continue|corr_matrix|cov_matrix|data|else|for|if|in|increment_log_prob|int|matrix|ordered|positive_ordered|print|real|reject|return|row_vector|simplex|target|unit_vector|vector|void|while)\b/,
          // these are functions that are known to take another function as their first argument.
          higherOrderFunctions
        ],
        function: /\b[a-z]\w*(?=\s*\()/i,
        number: /(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:E[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
        boolean: /\b(?:false|true)\b/,
        operator: /<-|\.[*/]=?|\|\|?|&&|[!=<>+\-*/]=?|['^%~?:]/,
        punctuation: /[()\[\]{},;]/
      };
      Prism2.languages.stan.constraint.inside.expression.inside = Prism2.languages.stan;
    })(Prism);
  }
  return stan_1;
}
var stanExports = requireStan();
const stan = /* @__PURE__ */ getDefaultExportFromCjs(stanExports);
const stan$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: stan
}, [stanExports]);
export {
  stan$1 as s
};
