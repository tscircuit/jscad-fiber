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
var powershell_1;
var hasRequiredPowershell;
function requirePowershell() {
  if (hasRequiredPowershell) return powershell_1;
  hasRequiredPowershell = 1;
  powershell_1 = powershell2;
  powershell2.displayName = "powershell";
  powershell2.aliases = [];
  function powershell2(Prism) {
    (function(Prism2) {
      var powershell3 = Prism2.languages.powershell = {
        comment: [
          {
            pattern: /(^|[^`])<#[\s\S]*?#>/,
            lookbehind: true
          },
          {
            pattern: /(^|[^`])#.*/,
            lookbehind: true
          }
        ],
        string: [
          {
            pattern: /"(?:`[\s\S]|[^`"])*"/,
            greedy: true,
            inside: null
            // see below
          },
          {
            pattern: /'(?:[^']|'')*'/,
            greedy: true
          }
        ],
        // Matches name spaces as well as casts, attribute decorators. Force starting with letter to avoid matching array indices
        // Supports two levels of nested brackets (e.g. `[OutputType([System.Collections.Generic.List[int]])]`)
        namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
        boolean: /\$(?:false|true)\b/i,
        variable: /\$\w+\b/,
        // Cmdlets and aliases. Aliases should come last, otherwise "write" gets preferred over "write-host" for example
        // Get-Command | ?{ $_.ModuleName -match "Microsoft.PowerShell.(Util|Core|Management)" }
        // Get-Alias | ?{ $_.ReferencedCommand.Module.Name -match "Microsoft.PowerShell.(Util|Core|Management)" }
        function: [
          /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
          /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
        ],
        // per http://technet.microsoft.com/en-us/library/hh847744.aspx
        keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
        operator: {
          pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
          lookbehind: true
        },
        punctuation: /[|{}[\];(),.]/
      };
      powershell3.string[0].inside = {
        function: {
          // Allow for one level of nesting
          pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
          lookbehind: true,
          inside: powershell3
        },
        boolean: powershell3.boolean,
        variable: powershell3.variable
      };
    })(Prism);
  }
  return powershell_1;
}
var powershellExports = requirePowershell();
const powershell = /* @__PURE__ */ getDefaultExportFromCjs(powershellExports);
const powershell$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: powershell
}, [powershellExports]);
export {
  powershell$1 as p
};
