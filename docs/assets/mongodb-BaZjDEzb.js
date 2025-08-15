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
var mongodb_1;
var hasRequiredMongodb;
function requireMongodb() {
  if (hasRequiredMongodb) return mongodb_1;
  hasRequiredMongodb = 1;
  mongodb_1 = mongodb2;
  mongodb2.displayName = "mongodb";
  mongodb2.aliases = [];
  function mongodb2(Prism) {
    (function(Prism2) {
      var operators = [
        // query and projection
        "$eq",
        "$gt",
        "$gte",
        "$in",
        "$lt",
        "$lte",
        "$ne",
        "$nin",
        "$and",
        "$not",
        "$nor",
        "$or",
        "$exists",
        "$type",
        "$expr",
        "$jsonSchema",
        "$mod",
        "$regex",
        "$text",
        "$where",
        "$geoIntersects",
        "$geoWithin",
        "$near",
        "$nearSphere",
        "$all",
        "$elemMatch",
        "$size",
        "$bitsAllClear",
        "$bitsAllSet",
        "$bitsAnyClear",
        "$bitsAnySet",
        "$comment",
        "$elemMatch",
        "$meta",
        "$slice",
        // update
        "$currentDate",
        "$inc",
        "$min",
        "$max",
        "$mul",
        "$rename",
        "$set",
        "$setOnInsert",
        "$unset",
        "$addToSet",
        "$pop",
        "$pull",
        "$push",
        "$pullAll",
        "$each",
        "$position",
        "$slice",
        "$sort",
        "$bit",
        // aggregation pipeline stages
        "$addFields",
        "$bucket",
        "$bucketAuto",
        "$collStats",
        "$count",
        "$currentOp",
        "$facet",
        "$geoNear",
        "$graphLookup",
        "$group",
        "$indexStats",
        "$limit",
        "$listLocalSessions",
        "$listSessions",
        "$lookup",
        "$match",
        "$merge",
        "$out",
        "$planCacheStats",
        "$project",
        "$redact",
        "$replaceRoot",
        "$replaceWith",
        "$sample",
        "$set",
        "$skip",
        "$sort",
        "$sortByCount",
        "$unionWith",
        "$unset",
        "$unwind",
        "$setWindowFields",
        // aggregation pipeline operators
        "$abs",
        "$accumulator",
        "$acos",
        "$acosh",
        "$add",
        "$addToSet",
        "$allElementsTrue",
        "$and",
        "$anyElementTrue",
        "$arrayElemAt",
        "$arrayToObject",
        "$asin",
        "$asinh",
        "$atan",
        "$atan2",
        "$atanh",
        "$avg",
        "$binarySize",
        "$bsonSize",
        "$ceil",
        "$cmp",
        "$concat",
        "$concatArrays",
        "$cond",
        "$convert",
        "$cos",
        "$dateFromParts",
        "$dateToParts",
        "$dateFromString",
        "$dateToString",
        "$dayOfMonth",
        "$dayOfWeek",
        "$dayOfYear",
        "$degreesToRadians",
        "$divide",
        "$eq",
        "$exp",
        "$filter",
        "$first",
        "$floor",
        "$function",
        "$gt",
        "$gte",
        "$hour",
        "$ifNull",
        "$in",
        "$indexOfArray",
        "$indexOfBytes",
        "$indexOfCP",
        "$isArray",
        "$isNumber",
        "$isoDayOfWeek",
        "$isoWeek",
        "$isoWeekYear",
        "$last",
        "$last",
        "$let",
        "$literal",
        "$ln",
        "$log",
        "$log10",
        "$lt",
        "$lte",
        "$ltrim",
        "$map",
        "$max",
        "$mergeObjects",
        "$meta",
        "$min",
        "$millisecond",
        "$minute",
        "$mod",
        "$month",
        "$multiply",
        "$ne",
        "$not",
        "$objectToArray",
        "$or",
        "$pow",
        "$push",
        "$radiansToDegrees",
        "$range",
        "$reduce",
        "$regexFind",
        "$regexFindAll",
        "$regexMatch",
        "$replaceOne",
        "$replaceAll",
        "$reverseArray",
        "$round",
        "$rtrim",
        "$second",
        "$setDifference",
        "$setEquals",
        "$setIntersection",
        "$setIsSubset",
        "$setUnion",
        "$size",
        "$sin",
        "$slice",
        "$split",
        "$sqrt",
        "$stdDevPop",
        "$stdDevSamp",
        "$strcasecmp",
        "$strLenBytes",
        "$strLenCP",
        "$substr",
        "$substrBytes",
        "$substrCP",
        "$subtract",
        "$sum",
        "$switch",
        "$tan",
        "$toBool",
        "$toDate",
        "$toDecimal",
        "$toDouble",
        "$toInt",
        "$toLong",
        "$toObjectId",
        "$toString",
        "$toLower",
        "$toUpper",
        "$trim",
        "$trunc",
        "$type",
        "$week",
        "$year",
        "$zip",
        "$count",
        "$dateAdd",
        "$dateDiff",
        "$dateSubtract",
        "$dateTrunc",
        "$getField",
        "$rand",
        "$sampleRate",
        "$setField",
        "$unsetField",
        // aggregation pipeline query modifiers
        "$comment",
        "$explain",
        "$hint",
        "$max",
        "$maxTimeMS",
        "$min",
        "$orderby",
        "$query",
        "$returnKey",
        "$showDiskLoc",
        "$natural"
      ];
      var builtinFunctions = [
        "ObjectId",
        "Code",
        "BinData",
        "DBRef",
        "Timestamp",
        "NumberLong",
        "NumberDecimal",
        "MaxKey",
        "MinKey",
        "RegExp",
        "ISODate",
        "UUID"
      ];
      operators = operators.map(function(operator) {
        return operator.replace("$", "\\$");
      });
      var operatorsSource = "(?:" + operators.join("|") + ")\\b";
      Prism2.languages.mongodb = Prism2.languages.extend("javascript", {});
      Prism2.languages.insertBefore("mongodb", "string", {
        property: {
          pattern: /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,
          greedy: true,
          inside: {
            keyword: RegExp(`^(['"])?` + operatorsSource + "(?:\\1)?$")
          }
        }
      });
      Prism2.languages.mongodb.string.inside = {
        url: {
          // url pattern
          pattern: /https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,
          greedy: true
        },
        entity: {
          // ipv4
          pattern: /\b(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d\d?|2[0-4]\d|25[0-5])\b/,
          greedy: true
        }
      };
      Prism2.languages.insertBefore("mongodb", "constant", {
        builtin: {
          pattern: RegExp("\\b(?:" + builtinFunctions.join("|") + ")\\b"),
          alias: "keyword"
        }
      });
    })(Prism);
  }
  return mongodb_1;
}
var mongodbExports = requireMongodb();
const mongodb = /* @__PURE__ */ getDefaultExportFromCjs(mongodbExports);
const mongodb$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: mongodb
}, [mongodbExports]);
export {
  mongodb$1 as m
};
