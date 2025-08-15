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
var splunkSpl_1;
var hasRequiredSplunkSpl;
function requireSplunkSpl() {
  if (hasRequiredSplunkSpl) return splunkSpl_1;
  hasRequiredSplunkSpl = 1;
  splunkSpl_1 = splunkSpl2;
  splunkSpl2.displayName = "splunkSpl";
  splunkSpl2.aliases = [];
  function splunkSpl2(Prism) {
    Prism.languages["splunk-spl"] = {
      comment: /`comment\("(?:\\.|[^\\"])*"\)`/,
      string: {
        pattern: /"(?:\\.|[^\\"])*"/,
        greedy: true
      },
      // https://docs.splunk.com/Documentation/Splunk/7.3.0/SearchReference/ListOfSearchCommands
      keyword: /\b(?:abstract|accum|addcoltotals|addinfo|addtotals|analyzefields|anomalies|anomalousvalue|anomalydetection|append|appendcols|appendcsv|appendlookup|appendpipe|arules|associate|audit|autoregress|bin|bucket|bucketdir|chart|cluster|cofilter|collect|concurrency|contingency|convert|correlate|datamodel|dbinspect|dedup|delete|delta|diff|erex|eval|eventcount|eventstats|extract|fieldformat|fields|fieldsummary|filldown|fillnull|findtypes|folderize|foreach|format|from|gauge|gentimes|geom|geomfilter|geostats|head|highlight|history|iconify|input|inputcsv|inputlookup|iplocation|join|kmeans|kv|kvform|loadjob|localize|localop|lookup|makecontinuous|makemv|makeresults|map|mcollect|metadata|metasearch|meventcollect|mstats|multikv|multisearch|mvcombine|mvexpand|nomv|outlier|outputcsv|outputlookup|outputtext|overlap|pivot|predict|rangemap|rare|regex|relevancy|reltime|rename|replace|rest|return|reverse|rex|rtorder|run|savedsearch|script|scrub|search|searchtxn|selfjoin|sendemail|set|setfields|sichart|sirare|sistats|sitimechart|sitop|sort|spath|stats|strcat|streamstats|table|tags|tail|timechart|timewrap|top|transaction|transpose|trendline|tscollect|tstats|typeahead|typelearner|typer|union|uniq|untable|where|x11|xmlkv|xmlunescape|xpath|xyseries)\b/i,
      "operator-word": {
        pattern: /\b(?:and|as|by|not|or|xor)\b/i,
        alias: "operator"
      },
      function: /\b\w+(?=\s*\()/,
      property: /\b\w+(?=\s*=(?!=))/,
      date: {
        // MM/DD/YYYY(:HH:MM:SS)?
        pattern: /\b\d{1,2}\/\d{1,2}\/\d{1,4}(?:(?::\d{1,2}){3})?\b/,
        alias: "number"
      },
      number: /\b\d+(?:\.\d+)?\b/,
      boolean: /\b(?:f|false|t|true)\b/i,
      operator: /[<>=]=?|[-+*/%|]/,
      punctuation: /[()[\],]/
    };
  }
  return splunkSpl_1;
}
var splunkSplExports = requireSplunkSpl();
const splunkSpl = /* @__PURE__ */ getDefaultExportFromCjs(splunkSplExports);
const splunkSpl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: splunkSpl
}, [splunkSplExports]);
export {
  splunkSpl$1 as s
};
