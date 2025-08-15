var json_1;
var hasRequiredJson;
function requireJson() {
  if (hasRequiredJson) return json_1;
  hasRequiredJson = 1;
  json_1 = json;
  json.displayName = "json";
  json.aliases = ["webmanifest"];
  function json(Prism) {
    Prism.languages.json = {
      property: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: true,
        greedy: true
      },
      string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: true,
        greedy: true
      },
      comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true
      },
      number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
      punctuation: /[{}[\],]/,
      operator: /:/,
      boolean: /\b(?:false|true)\b/,
      null: {
        pattern: /\bnull\b/,
        alias: "keyword"
      }
    };
    Prism.languages.webmanifest = Prism.languages.json;
  }
  return json_1;
}
export {
  requireJson as r
};
