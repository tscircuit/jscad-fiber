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
var dnsZoneFile_1;
var hasRequiredDnsZoneFile;
function requireDnsZoneFile() {
  if (hasRequiredDnsZoneFile) return dnsZoneFile_1;
  hasRequiredDnsZoneFile = 1;
  dnsZoneFile_1 = dnsZoneFile2;
  dnsZoneFile2.displayName = "dnsZoneFile";
  dnsZoneFile2.aliases = [];
  function dnsZoneFile2(Prism) {
    Prism.languages["dns-zone-file"] = {
      comment: /;.*/,
      string: {
        pattern: /"(?:\\.|[^"\\\r\n])*"/,
        greedy: true
      },
      variable: [
        {
          pattern: /(^\$ORIGIN[ \t]+)\S+/m,
          lookbehind: true
        },
        {
          pattern: /(^|\s)@(?=\s|$)/,
          lookbehind: true
        }
      ],
      keyword: /^\$(?:INCLUDE|ORIGIN|TTL)(?=\s|$)/m,
      class: {
        // https://tools.ietf.org/html/rfc1035#page-13
        pattern: /(^|\s)(?:CH|CS|HS|IN)(?=\s|$)/,
        lookbehind: true,
        alias: "keyword"
      },
      type: {
        // https://en.wikipedia.org/wiki/List_of_DNS_record_types
        pattern: /(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/,
        lookbehind: true,
        alias: "keyword"
      },
      punctuation: /[()]/
    };
    Prism.languages["dns-zone"] = Prism.languages["dns-zone-file"];
  }
  return dnsZoneFile_1;
}
var dnsZoneFileExports = requireDnsZoneFile();
const dnsZoneFile = /* @__PURE__ */ getDefaultExportFromCjs(dnsZoneFileExports);
const dnsZoneFile$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: dnsZoneFile
}, [dnsZoneFileExports]);
export {
  dnsZoneFile$1 as d
};
