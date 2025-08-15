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
var uorazor_1;
var hasRequiredUorazor;
function requireUorazor() {
  if (hasRequiredUorazor) return uorazor_1;
  hasRequiredUorazor = 1;
  uorazor_1 = uorazor2;
  uorazor2.displayName = "uorazor";
  uorazor2.aliases = [];
  function uorazor2(Prism) {
    Prism.languages.uorazor = {
      "comment-hash": {
        pattern: /#.*/,
        alias: "comment",
        greedy: true
      },
      "comment-slash": {
        pattern: /\/\/.*/,
        alias: "comment",
        greedy: true
      },
      string: {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        inside: {
          punctuation: /^['"]|['"]$/
        },
        greedy: true
      },
      "source-layers": {
        pattern: /\b(?:arms|backpack|blue|bracelet|cancel|clear|cloak|criminal|earrings|enemy|facialhair|friend|friendly|gloves|gray|grey|ground|hair|head|innerlegs|innertorso|innocent|lefthand|middletorso|murderer|neck|nonfriendly|onehandedsecondary|outerlegs|outertorso|pants|red|righthand|ring|self|shirt|shoes|talisman|waist)\b/i,
        alias: "function"
      },
      "source-commands": {
        pattern: /\b(?:alliance|attack|cast|clearall|clearignore|clearjournal|clearlist|clearsysmsg|createlist|createtimer|dclick|dclicktype|dclickvar|dress|dressconfig|drop|droprelloc|emote|getlabel|guild|gumpclose|gumpresponse|hotkey|ignore|lasttarget|lift|lifttype|menu|menuresponse|msg|org|organize|organizer|overhead|pause|poplist|potion|promptresponse|pushlist|removelist|removetimer|rename|restock|say|scav|scavenger|script|setability|setlasttarget|setskill|settimer|setvar|sysmsg|target|targetloc|targetrelloc|targettype|undress|unignore|unsetvar|useobject|useonce|useskill|usetype|virtue|wait|waitforgump|waitformenu|waitforprompt|waitforstat|waitforsysmsg|waitfortarget|walk|wfsysmsg|wft|whisper|yell)\b/,
        alias: "function"
      },
      "tag-name": {
        pattern: /(^\{%-?\s*)\w+/,
        lookbehind: true,
        alias: "keyword"
      },
      delimiter: {
        pattern: /^\{[{%]-?|-?[%}]\}$/,
        alias: "punctuation"
      },
      function: /\b(?:atlist|close|closest|count|counter|counttype|dead|dex|diffhits|diffmana|diffstam|diffweight|find|findbuff|finddebuff|findlayer|findtype|findtypelist|followers|gumpexists|hidden|hits|hp|hue|human|humanoid|ingump|inlist|insysmessage|insysmsg|int|invul|lhandempty|list|listexists|mana|maxhits|maxhp|maxmana|maxstam|maxweight|monster|mounted|name|next|noto|paralyzed|poisoned|position|prev|previous|queued|rand|random|rhandempty|skill|stam|str|targetexists|timer|timerexists|varexist|warmode|weight)\b/,
      keyword: /\b(?:and|as|break|continue|else|elseif|endfor|endif|endwhile|for|if|loop|not|or|replay|stop|while)\b/,
      boolean: /\b(?:false|null|true)\b/,
      number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
      operator: [
        {
          pattern: /(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
          lookbehind: true
        },
        /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/
      ],
      punctuation: /[()\[\]{}:.,]/
    };
  }
  return uorazor_1;
}
var uorazorExports = requireUorazor();
const uorazor = /* @__PURE__ */ getDefaultExportFromCjs(uorazorExports);
const uorazor$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: uorazor
}, [uorazorExports]);
export {
  uorazor$1 as u
};
