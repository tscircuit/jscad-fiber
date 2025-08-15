import { c as commonjsGlobal, g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireMarkup } from "./markup-C6VGQJiO.js";
import { r as requireCss } from "./css-BATkWsdy.js";
import { r as requireClike } from "./clike-BoWTHpGR.js";
import { r as requireJavascript } from "./javascript-BAz-eJCg.js";
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
var immutable;
var hasRequiredImmutable;
function requireImmutable() {
  if (hasRequiredImmutable) return immutable;
  hasRequiredImmutable = 1;
  immutable = extend;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function extend() {
    var target = {};
    for (var i = 0; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
  return immutable;
}
var schema;
var hasRequiredSchema;
function requireSchema() {
  if (hasRequiredSchema) return schema;
  hasRequiredSchema = 1;
  schema = Schema;
  var proto = Schema.prototype;
  proto.space = null;
  proto.normal = {};
  proto.property = {};
  function Schema(property, normal, space) {
    this.property = property;
    this.normal = normal;
    if (space) {
      this.space = space;
    }
  }
  return schema;
}
var merge_1;
var hasRequiredMerge;
function requireMerge() {
  if (hasRequiredMerge) return merge_1;
  hasRequiredMerge = 1;
  var xtend = requireImmutable();
  var Schema = requireSchema();
  merge_1 = merge;
  function merge(definitions) {
    var length = definitions.length;
    var property = [];
    var normal = [];
    var index = -1;
    var info2;
    var space;
    while (++index < length) {
      info2 = definitions[index];
      property.push(info2.property);
      normal.push(info2.normal);
      space = info2.space;
    }
    return new Schema(
      xtend.apply(null, property),
      xtend.apply(null, normal),
      space
    );
  }
  return merge_1;
}
var normalize_1;
var hasRequiredNormalize;
function requireNormalize() {
  if (hasRequiredNormalize) return normalize_1;
  hasRequiredNormalize = 1;
  normalize_1 = normalize;
  function normalize(value) {
    return value.toLowerCase();
  }
  return normalize_1;
}
var info;
var hasRequiredInfo;
function requireInfo() {
  if (hasRequiredInfo) return info;
  hasRequiredInfo = 1;
  info = Info;
  var proto = Info.prototype;
  proto.space = null;
  proto.attribute = null;
  proto.property = null;
  proto.boolean = false;
  proto.booleanish = false;
  proto.overloadedBoolean = false;
  proto.number = false;
  proto.commaSeparated = false;
  proto.spaceSeparated = false;
  proto.commaOrSpaceSeparated = false;
  proto.mustUseProperty = false;
  proto.defined = false;
  function Info(property, attribute) {
    this.property = property;
    this.attribute = attribute;
  }
  return info;
}
var types = {};
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes) return types;
  hasRequiredTypes = 1;
  var powers = 0;
  types.boolean = increment();
  types.booleanish = increment();
  types.overloadedBoolean = increment();
  types.number = increment();
  types.spaceSeparated = increment();
  types.commaSeparated = increment();
  types.commaOrSpaceSeparated = increment();
  function increment() {
    return Math.pow(2, ++powers);
  }
  return types;
}
var definedInfo;
var hasRequiredDefinedInfo;
function requireDefinedInfo() {
  if (hasRequiredDefinedInfo) return definedInfo;
  hasRequiredDefinedInfo = 1;
  var Info = requireInfo();
  var types2 = requireTypes();
  definedInfo = DefinedInfo;
  DefinedInfo.prototype = new Info();
  DefinedInfo.prototype.defined = true;
  var checks = [
    "boolean",
    "booleanish",
    "overloadedBoolean",
    "number",
    "commaSeparated",
    "spaceSeparated",
    "commaOrSpaceSeparated"
  ];
  var checksLength = checks.length;
  function DefinedInfo(property, attribute, mask, space) {
    var index = -1;
    var check;
    mark(this, "space", space);
    Info.call(this, property, attribute);
    while (++index < checksLength) {
      check = checks[index];
      mark(this, check, (mask & types2[check]) === types2[check]);
    }
  }
  function mark(values, key, value) {
    if (value) {
      values[key] = value;
    }
  }
  return definedInfo;
}
var create_1;
var hasRequiredCreate;
function requireCreate() {
  if (hasRequiredCreate) return create_1;
  hasRequiredCreate = 1;
  var normalize = requireNormalize();
  var Schema = requireSchema();
  var DefinedInfo = requireDefinedInfo();
  create_1 = create;
  function create(definition) {
    var space = definition.space;
    var mustUseProperty = definition.mustUseProperty || [];
    var attributes = definition.attributes || {};
    var props = definition.properties;
    var transform = definition.transform;
    var property = {};
    var normal = {};
    var prop;
    var info2;
    for (prop in props) {
      info2 = new DefinedInfo(
        prop,
        transform(attributes, prop),
        props[prop],
        space
      );
      if (mustUseProperty.indexOf(prop) !== -1) {
        info2.mustUseProperty = true;
      }
      property[prop] = info2;
      normal[normalize(prop)] = prop;
      normal[normalize(info2.attribute)] = prop;
    }
    return new Schema(property, normal, space);
  }
  return create_1;
}
var xlink;
var hasRequiredXlink;
function requireXlink() {
  if (hasRequiredXlink) return xlink;
  hasRequiredXlink = 1;
  var create = requireCreate();
  xlink = create({
    space: "xlink",
    transform: xlinkTransform,
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    }
  });
  function xlinkTransform(_, prop) {
    return "xlink:" + prop.slice(5).toLowerCase();
  }
  return xlink;
}
var xml;
var hasRequiredXml;
function requireXml() {
  if (hasRequiredXml) return xml;
  hasRequiredXml = 1;
  var create = requireCreate();
  xml = create({
    space: "xml",
    transform: xmlTransform,
    properties: {
      xmlLang: null,
      xmlBase: null,
      xmlSpace: null
    }
  });
  function xmlTransform(_, prop) {
    return "xml:" + prop.slice(3).toLowerCase();
  }
  return xml;
}
var caseSensitiveTransform_1;
var hasRequiredCaseSensitiveTransform;
function requireCaseSensitiveTransform() {
  if (hasRequiredCaseSensitiveTransform) return caseSensitiveTransform_1;
  hasRequiredCaseSensitiveTransform = 1;
  caseSensitiveTransform_1 = caseSensitiveTransform;
  function caseSensitiveTransform(attributes, attribute) {
    return attribute in attributes ? attributes[attribute] : attribute;
  }
  return caseSensitiveTransform_1;
}
var caseInsensitiveTransform_1;
var hasRequiredCaseInsensitiveTransform;
function requireCaseInsensitiveTransform() {
  if (hasRequiredCaseInsensitiveTransform) return caseInsensitiveTransform_1;
  hasRequiredCaseInsensitiveTransform = 1;
  var caseSensitiveTransform = requireCaseSensitiveTransform();
  caseInsensitiveTransform_1 = caseInsensitiveTransform;
  function caseInsensitiveTransform(attributes, property) {
    return caseSensitiveTransform(attributes, property.toLowerCase());
  }
  return caseInsensitiveTransform_1;
}
var xmlns;
var hasRequiredXmlns;
function requireXmlns() {
  if (hasRequiredXmlns) return xmlns;
  hasRequiredXmlns = 1;
  var create = requireCreate();
  var caseInsensitiveTransform = requireCaseInsensitiveTransform();
  xmlns = create({
    space: "xmlns",
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    transform: caseInsensitiveTransform,
    properties: {
      xmlns: null,
      xmlnsXLink: null
    }
  });
  return xmlns;
}
var aria;
var hasRequiredAria;
function requireAria() {
  if (hasRequiredAria) return aria;
  hasRequiredAria = 1;
  var types2 = requireTypes();
  var create = requireCreate();
  var booleanish = types2.booleanish;
  var number = types2.number;
  var spaceSeparated = types2.spaceSeparated;
  aria = create({
    transform: ariaTransform,
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: booleanish,
      ariaAutoComplete: null,
      ariaBusy: booleanish,
      ariaChecked: booleanish,
      ariaColCount: number,
      ariaColIndex: number,
      ariaColSpan: number,
      ariaControls: spaceSeparated,
      ariaCurrent: null,
      ariaDescribedBy: spaceSeparated,
      ariaDetails: null,
      ariaDisabled: booleanish,
      ariaDropEffect: spaceSeparated,
      ariaErrorMessage: null,
      ariaExpanded: booleanish,
      ariaFlowTo: spaceSeparated,
      ariaGrabbed: booleanish,
      ariaHasPopup: null,
      ariaHidden: booleanish,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: spaceSeparated,
      ariaLevel: number,
      ariaLive: null,
      ariaModal: booleanish,
      ariaMultiLine: booleanish,
      ariaMultiSelectable: booleanish,
      ariaOrientation: null,
      ariaOwns: spaceSeparated,
      ariaPlaceholder: null,
      ariaPosInSet: number,
      ariaPressed: booleanish,
      ariaReadOnly: booleanish,
      ariaRelevant: null,
      ariaRequired: booleanish,
      ariaRoleDescription: spaceSeparated,
      ariaRowCount: number,
      ariaRowIndex: number,
      ariaRowSpan: number,
      ariaSelected: booleanish,
      ariaSetSize: number,
      ariaSort: null,
      ariaValueMax: number,
      ariaValueMin: number,
      ariaValueNow: number,
      ariaValueText: null,
      role: null
    }
  });
  function ariaTransform(_, prop) {
    return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
  }
  return aria;
}
var html;
var hasRequiredHtml$2;
function requireHtml$2() {
  if (hasRequiredHtml$2) return html;
  hasRequiredHtml$2 = 1;
  var types2 = requireTypes();
  var create = requireCreate();
  var caseInsensitiveTransform = requireCaseInsensitiveTransform();
  var boolean = types2.boolean;
  var overloadedBoolean = types2.overloadedBoolean;
  var booleanish = types2.booleanish;
  var number = types2.number;
  var spaceSeparated = types2.spaceSeparated;
  var commaSeparated = types2.commaSeparated;
  html = create({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    transform: caseInsensitiveTransform,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      // Standard Properties.
      abbr: null,
      accept: commaSeparated,
      acceptCharset: spaceSeparated,
      accessKey: spaceSeparated,
      action: null,
      allow: null,
      allowFullScreen: boolean,
      allowPaymentRequest: boolean,
      allowUserMedia: boolean,
      alt: null,
      as: null,
      async: boolean,
      autoCapitalize: null,
      autoComplete: spaceSeparated,
      autoFocus: boolean,
      autoPlay: boolean,
      capture: boolean,
      charSet: null,
      checked: boolean,
      cite: null,
      className: spaceSeparated,
      cols: number,
      colSpan: null,
      content: null,
      contentEditable: booleanish,
      controls: boolean,
      controlsList: spaceSeparated,
      coords: number | commaSeparated,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: boolean,
      defer: boolean,
      dir: null,
      dirName: null,
      disabled: boolean,
      download: overloadedBoolean,
      draggable: booleanish,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: boolean,
      formTarget: null,
      headers: spaceSeparated,
      height: number,
      hidden: boolean,
      high: number,
      href: null,
      hrefLang: null,
      htmlFor: spaceSeparated,
      httpEquiv: spaceSeparated,
      id: null,
      imageSizes: null,
      imageSrcSet: commaSeparated,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: boolean,
      itemId: null,
      itemProp: spaceSeparated,
      itemRef: spaceSeparated,
      itemScope: boolean,
      itemType: spaceSeparated,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: boolean,
      low: number,
      manifest: null,
      max: null,
      maxLength: number,
      media: null,
      method: null,
      min: null,
      minLength: number,
      multiple: boolean,
      muted: boolean,
      name: null,
      nonce: null,
      noModule: boolean,
      noValidate: boolean,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextMenu: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: boolean,
      optimum: number,
      pattern: null,
      ping: spaceSeparated,
      placeholder: null,
      playsInline: boolean,
      poster: null,
      preload: null,
      readOnly: boolean,
      referrerPolicy: null,
      rel: spaceSeparated,
      required: boolean,
      reversed: boolean,
      rows: number,
      rowSpan: number,
      sandbox: spaceSeparated,
      scope: null,
      scoped: boolean,
      seamless: boolean,
      selected: boolean,
      shape: null,
      size: number,
      sizes: null,
      slot: null,
      span: number,
      spellCheck: booleanish,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: commaSeparated,
      start: number,
      step: null,
      style: null,
      tabIndex: number,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: boolean,
      useMap: null,
      value: booleanish,
      width: number,
      wrap: null,
      // Legacy.
      // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
      align: null,
      // Several. Use CSS `text-align` instead,
      aLink: null,
      // `<body>`. Use CSS `a:active {color}` instead
      archive: spaceSeparated,
      // `<object>`. List of URIs to archives
      axis: null,
      // `<td>` and `<th>`. Use `scope` on `<th>`
      background: null,
      // `<body>`. Use CSS `background-image` instead
      bgColor: null,
      // `<body>` and table elements. Use CSS `background-color` instead
      border: number,
      // `<table>`. Use CSS `border-width` instead,
      borderColor: null,
      // `<table>`. Use CSS `border-color` instead,
      bottomMargin: number,
      // `<body>`
      cellPadding: null,
      // `<table>`
      cellSpacing: null,
      // `<table>`
      char: null,
      // Several table elements. When `align=char`, sets the character to align on
      charOff: null,
      // Several table elements. When `char`, offsets the alignment
      classId: null,
      // `<object>`
      clear: null,
      // `<br>`. Use CSS `clear` instead
      code: null,
      // `<object>`
      codeBase: null,
      // `<object>`
      codeType: null,
      // `<object>`
      color: null,
      // `<font>` and `<hr>`. Use CSS instead
      compact: boolean,
      // Lists. Use CSS to reduce space between items instead
      declare: boolean,
      // `<object>`
      event: null,
      // `<script>`
      face: null,
      // `<font>`. Use CSS instead
      frame: null,
      // `<table>`
      frameBorder: null,
      // `<iframe>`. Use CSS `border` instead
      hSpace: number,
      // `<img>` and `<object>`
      leftMargin: number,
      // `<body>`
      link: null,
      // `<body>`. Use CSS `a:link {color: *}` instead
      longDesc: null,
      // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
      lowSrc: null,
      // `<img>`. Use a `<picture>`
      marginHeight: number,
      // `<body>`
      marginWidth: number,
      // `<body>`
      noResize: boolean,
      // `<frame>`
      noHref: boolean,
      // `<area>`. Use no href instead of an explicit `nohref`
      noShade: boolean,
      // `<hr>`. Use background-color and height instead of borders
      noWrap: boolean,
      // `<td>` and `<th>`
      object: null,
      // `<applet>`
      profile: null,
      // `<head>`
      prompt: null,
      // `<isindex>`
      rev: null,
      // `<link>`
      rightMargin: number,
      // `<body>`
      rules: null,
      // `<table>`
      scheme: null,
      // `<meta>`
      scrolling: booleanish,
      // `<frame>`. Use overflow in the child context
      standby: null,
      // `<object>`
      summary: null,
      // `<table>`
      text: null,
      // `<body>`. Use CSS `color` instead
      topMargin: number,
      // `<body>`
      valueType: null,
      // `<param>`
      version: null,
      // `<html>`. Use a doctype.
      vAlign: null,
      // Several. Use CSS `vertical-align` instead
      vLink: null,
      // `<body>`. Use CSS `a:visited {color}` instead
      vSpace: number,
      // `<img>` and `<object>`
      // Non-standard Properties.
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: boolean,
      disableRemotePlayback: boolean,
      prefix: null,
      property: null,
      results: number,
      security: null,
      unselectable: null
    }
  });
  return html;
}
var html_1$1;
var hasRequiredHtml$1;
function requireHtml$1() {
  if (hasRequiredHtml$1) return html_1$1;
  hasRequiredHtml$1 = 1;
  var merge = requireMerge();
  var xlink2 = requireXlink();
  var xml2 = requireXml();
  var xmlns2 = requireXmlns();
  var aria2 = requireAria();
  var html2 = requireHtml$2();
  html_1$1 = merge([xml2, xlink2, xmlns2, aria2, html2]);
  return html_1$1;
}
var find_1;
var hasRequiredFind;
function requireFind() {
  if (hasRequiredFind) return find_1;
  hasRequiredFind = 1;
  var normalize = requireNormalize();
  var DefinedInfo = requireDefinedInfo();
  var Info = requireInfo();
  var data = "data";
  find_1 = find;
  var valid = /^data[-\w.:]+$/i;
  var dash = /-[a-z]/g;
  var cap = /[A-Z]/g;
  function find(schema2, value) {
    var normal = normalize(value);
    var prop = value;
    var Type = Info;
    if (normal in schema2.normal) {
      return schema2.property[schema2.normal[normal]];
    }
    if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
      if (value.charAt(4) === "-") {
        prop = datasetToProperty(value);
      } else {
        value = datasetToAttribute(value);
      }
      Type = DefinedInfo;
    }
    return new Type(prop, value);
  }
  function datasetToProperty(attribute) {
    var value = attribute.slice(5).replace(dash, camelcase);
    return data + value.charAt(0).toUpperCase() + value.slice(1);
  }
  function datasetToAttribute(property) {
    var value = property.slice(4);
    if (dash.test(value)) {
      return property;
    }
    value = value.replace(cap, kebab);
    if (value.charAt(0) !== "-") {
      value = "-" + value;
    }
    return data + value;
  }
  function kebab($0) {
    return "-" + $0.toLowerCase();
  }
  function camelcase($0) {
    return $0.charAt(1).toUpperCase();
  }
  return find_1;
}
var hastUtilParseSelector;
var hasRequiredHastUtilParseSelector;
function requireHastUtilParseSelector() {
  if (hasRequiredHastUtilParseSelector) return hastUtilParseSelector;
  hasRequiredHastUtilParseSelector = 1;
  hastUtilParseSelector = parse;
  var search = /[#.]/g;
  function parse(selector, defaultTagName) {
    var value = selector || "";
    var name = defaultTagName || "div";
    var props = {};
    var start = 0;
    var subvalue;
    var previous;
    var match;
    while (start < value.length) {
      search.lastIndex = start;
      match = search.exec(value);
      subvalue = value.slice(start, match ? match.index : value.length);
      if (subvalue) {
        if (!previous) {
          name = subvalue;
        } else if (previous === "#") {
          props.id = subvalue;
        } else if (props.className) {
          props.className.push(subvalue);
        } else {
          props.className = [subvalue];
        }
        start += subvalue.length;
      }
      if (match) {
        previous = match[0];
        start++;
      }
    }
    return { type: "element", tagName: name, properties: props, children: [] };
  }
  return hastUtilParseSelector;
}
var spaceSeparatedTokens = {};
var hasRequiredSpaceSeparatedTokens;
function requireSpaceSeparatedTokens() {
  if (hasRequiredSpaceSeparatedTokens) return spaceSeparatedTokens;
  hasRequiredSpaceSeparatedTokens = 1;
  spaceSeparatedTokens.parse = parse;
  spaceSeparatedTokens.stringify = stringify;
  var empty = "";
  var space = " ";
  var whiteSpace = /[ \t\n\r\f]+/g;
  function parse(value) {
    var input = String(value || empty).trim();
    return input === empty ? [] : input.split(whiteSpace);
  }
  function stringify(values) {
    return values.join(space).trim();
  }
  return spaceSeparatedTokens;
}
var commaSeparatedTokens = {};
var hasRequiredCommaSeparatedTokens;
function requireCommaSeparatedTokens() {
  if (hasRequiredCommaSeparatedTokens) return commaSeparatedTokens;
  hasRequiredCommaSeparatedTokens = 1;
  commaSeparatedTokens.parse = parse;
  commaSeparatedTokens.stringify = stringify;
  var comma = ",";
  var space = " ";
  var empty = "";
  function parse(value) {
    var values = [];
    var input = String(value || empty);
    var index = input.indexOf(comma);
    var lastIndex = 0;
    var end = false;
    var val;
    while (!end) {
      if (index === -1) {
        index = input.length;
        end = true;
      }
      val = input.slice(lastIndex, index).trim();
      if (val || !end) {
        values.push(val);
      }
      lastIndex = index + 1;
      index = input.indexOf(comma, lastIndex);
    }
    return values;
  }
  function stringify(values, options) {
    var settings = options || {};
    var left = settings.padLeft === false ? empty : space;
    var right = settings.padRight ? space : empty;
    if (values[values.length - 1] === empty) {
      values = values.concat(empty);
    }
    return values.join(right + comma + left).trim();
  }
  return commaSeparatedTokens;
}
var factory_1;
var hasRequiredFactory;
function requireFactory() {
  if (hasRequiredFactory) return factory_1;
  hasRequiredFactory = 1;
  var find = requireFind();
  var normalize = requireNormalize();
  var parseSelector = requireHastUtilParseSelector();
  var spaces = requireSpaceSeparatedTokens().parse;
  var commas = requireCommaSeparatedTokens().parse;
  factory_1 = factory;
  var own = {}.hasOwnProperty;
  function factory(schema2, defaultTagName, caseSensitive) {
    var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null;
    return h;
    function h(selector, properties) {
      var node = parseSelector(selector, defaultTagName);
      var children = Array.prototype.slice.call(arguments, 2);
      var name = node.tagName.toLowerCase();
      var property;
      node.tagName = adjust && own.call(adjust, name) ? adjust[name] : name;
      if (properties && isChildren(properties, node)) {
        children.unshift(properties);
        properties = null;
      }
      if (properties) {
        for (property in properties) {
          addProperty(node.properties, property, properties[property]);
        }
      }
      addChild(node.children, children);
      if (node.tagName === "template") {
        node.content = { type: "root", children: node.children };
        node.children = [];
      }
      return node;
    }
    function addProperty(properties, key, value) {
      var info2;
      var property;
      var result;
      if (value === null || value === void 0 || value !== value) {
        return;
      }
      info2 = find(schema2, key);
      property = info2.property;
      result = value;
      if (typeof result === "string") {
        if (info2.spaceSeparated) {
          result = spaces(result);
        } else if (info2.commaSeparated) {
          result = commas(result);
        } else if (info2.commaOrSpaceSeparated) {
          result = spaces(commas(result).join(" "));
        }
      }
      if (property === "style" && typeof value !== "string") {
        result = style(result);
      }
      if (property === "className" && properties.className) {
        result = properties.className.concat(result);
      }
      properties[property] = parsePrimitives(info2, property, result);
    }
  }
  function isChildren(value, node) {
    return typeof value === "string" || "length" in value || isNode(node.tagName, value);
  }
  function isNode(tagName, value) {
    var type = value.type;
    if (tagName === "input" || !type || typeof type !== "string") {
      return false;
    }
    if (typeof value.children === "object" && "length" in value.children) {
      return true;
    }
    type = type.toLowerCase();
    if (tagName === "button") {
      return type !== "menu" && type !== "submit" && type !== "reset" && type !== "button";
    }
    return "value" in value;
  }
  function addChild(nodes, value) {
    var index;
    var length;
    if (typeof value === "string" || typeof value === "number") {
      nodes.push({ type: "text", value: String(value) });
      return;
    }
    if (typeof value === "object" && "length" in value) {
      index = -1;
      length = value.length;
      while (++index < length) {
        addChild(nodes, value[index]);
      }
      return;
    }
    if (typeof value !== "object" || !("type" in value)) {
      throw new Error("Expected node, nodes, or string, got `" + value + "`");
    }
    nodes.push(value);
  }
  function parsePrimitives(info2, name, value) {
    var index;
    var length;
    var result;
    if (typeof value !== "object" || !("length" in value)) {
      return parsePrimitive(info2, name, value);
    }
    length = value.length;
    index = -1;
    result = [];
    while (++index < length) {
      result[index] = parsePrimitive(info2, name, value[index]);
    }
    return result;
  }
  function parsePrimitive(info2, name, value) {
    var result = value;
    if (info2.number || info2.positiveNumber) {
      if (!isNaN(result) && result !== "") {
        result = Number(result);
      }
    } else if (info2.boolean || info2.overloadedBoolean) {
      if (typeof result === "string" && (result === "" || normalize(value) === normalize(name))) {
        result = true;
      }
    }
    return result;
  }
  function style(value) {
    var result = [];
    var key;
    for (key in value) {
      result.push([key, value[key]].join(": "));
    }
    return result.join("; ");
  }
  function createAdjustMap(values) {
    var length = values.length;
    var index = -1;
    var result = {};
    var value;
    while (++index < length) {
      value = values[index];
      result[value.toLowerCase()] = value;
    }
    return result;
  }
  return factory_1;
}
var html_1;
var hasRequiredHtml;
function requireHtml() {
  if (hasRequiredHtml) return html_1;
  hasRequiredHtml = 1;
  var schema2 = requireHtml$1();
  var factory = requireFactory();
  var html2 = factory(schema2, "div");
  html2.displayName = "html";
  html_1 = html2;
  return html_1;
}
var hastscript;
var hasRequiredHastscript;
function requireHastscript() {
  if (hasRequiredHastscript) return hastscript;
  hasRequiredHastscript = 1;
  hastscript = requireHtml();
  return hastscript;
}
const AElig = "Æ";
const AMP = "&";
const Aacute = "Á";
const Acirc = "Â";
const Agrave = "À";
const Aring = "Å";
const Atilde = "Ã";
const Auml = "Ä";
const COPY = "©";
const Ccedil = "Ç";
const ETH = "Ð";
const Eacute = "É";
const Ecirc = "Ê";
const Egrave = "È";
const Euml = "Ë";
const GT = ">";
const Iacute = "Í";
const Icirc = "Î";
const Igrave = "Ì";
const Iuml = "Ï";
const LT = "<";
const Ntilde = "Ñ";
const Oacute = "Ó";
const Ocirc = "Ô";
const Ograve = "Ò";
const Oslash = "Ø";
const Otilde = "Õ";
const Ouml = "Ö";
const QUOT = '"';
const REG = "®";
const THORN = "Þ";
const Uacute = "Ú";
const Ucirc = "Û";
const Ugrave = "Ù";
const Uuml = "Ü";
const Yacute = "Ý";
const aacute = "á";
const acirc = "â";
const acute = "´";
const aelig = "æ";
const agrave = "à";
const amp = "&";
const aring = "å";
const atilde = "ã";
const auml = "ä";
const brvbar = "¦";
const ccedil = "ç";
const cedil = "¸";
const cent = "¢";
const copy = "©";
const curren = "¤";
const deg = "°";
const divide = "÷";
const eacute = "é";
const ecirc = "ê";
const egrave = "è";
const eth = "ð";
const euml = "ë";
const frac12 = "½";
const frac14 = "¼";
const frac34 = "¾";
const gt = ">";
const iacute = "í";
const icirc = "î";
const iexcl = "¡";
const igrave = "ì";
const iquest = "¿";
const iuml = "ï";
const laquo = "«";
const lt = "<";
const macr = "¯";
const micro = "µ";
const middot = "·";
const nbsp = " ";
const not = "¬";
const ntilde = "ñ";
const oacute = "ó";
const ocirc = "ô";
const ograve = "ò";
const ordf = "ª";
const ordm = "º";
const oslash = "ø";
const otilde = "õ";
const ouml = "ö";
const para = "¶";
const plusmn = "±";
const pound = "£";
const quot = '"';
const raquo = "»";
const reg = "®";
const sect = "§";
const shy = "­";
const sup1 = "¹";
const sup2 = "²";
const sup3 = "³";
const szlig = "ß";
const thorn = "þ";
const times = "×";
const uacute = "ú";
const ucirc = "û";
const ugrave = "ù";
const uml = "¨";
const uuml = "ü";
const yacute = "ý";
const yen = "¥";
const yuml = "ÿ";
const require$$0 = {
  AElig,
  AMP,
  Aacute,
  Acirc,
  Agrave,
  Aring,
  Atilde,
  Auml,
  COPY,
  Ccedil,
  ETH,
  Eacute,
  Ecirc,
  Egrave,
  Euml,
  GT,
  Iacute,
  Icirc,
  Igrave,
  Iuml,
  LT,
  Ntilde,
  Oacute,
  Ocirc,
  Ograve,
  Oslash,
  Otilde,
  Ouml,
  QUOT,
  REG,
  THORN,
  Uacute,
  Ucirc,
  Ugrave,
  Uuml,
  Yacute,
  aacute,
  acirc,
  acute,
  aelig,
  agrave,
  amp,
  aring,
  atilde,
  auml,
  brvbar,
  ccedil,
  cedil,
  cent,
  copy,
  curren,
  deg,
  divide,
  eacute,
  ecirc,
  egrave,
  eth,
  euml,
  frac12,
  frac14,
  frac34,
  gt,
  iacute,
  icirc,
  iexcl,
  igrave,
  iquest,
  iuml,
  laquo,
  lt,
  macr,
  micro,
  middot,
  nbsp,
  not,
  ntilde,
  oacute,
  ocirc,
  ograve,
  ordf,
  ordm,
  oslash,
  otilde,
  ouml,
  para,
  plusmn,
  pound,
  quot,
  raquo,
  reg,
  sect,
  shy,
  sup1,
  sup2,
  sup3,
  szlig,
  thorn,
  times,
  uacute,
  ucirc,
  ugrave,
  uml,
  uuml,
  yacute,
  yen,
  yuml
};
const require$$1 = {
  "0": "�",
  "128": "€",
  "130": "‚",
  "131": "ƒ",
  "132": "„",
  "133": "…",
  "134": "†",
  "135": "‡",
  "136": "ˆ",
  "137": "‰",
  "138": "Š",
  "139": "‹",
  "140": "Œ",
  "142": "Ž",
  "145": "‘",
  "146": "’",
  "147": "“",
  "148": "”",
  "149": "•",
  "150": "–",
  "151": "—",
  "152": "˜",
  "153": "™",
  "154": "š",
  "155": "›",
  "156": "œ",
  "158": "ž",
  "159": "Ÿ"
};
var isDecimal;
var hasRequiredIsDecimal;
function requireIsDecimal() {
  if (hasRequiredIsDecimal) return isDecimal;
  hasRequiredIsDecimal = 1;
  isDecimal = decimal;
  function decimal(character) {
    var code = typeof character === "string" ? character.charCodeAt(0) : character;
    return code >= 48 && code <= 57;
  }
  return isDecimal;
}
var isHexadecimal;
var hasRequiredIsHexadecimal;
function requireIsHexadecimal() {
  if (hasRequiredIsHexadecimal) return isHexadecimal;
  hasRequiredIsHexadecimal = 1;
  isHexadecimal = hexadecimal;
  function hexadecimal(character) {
    var code = typeof character === "string" ? character.charCodeAt(0) : character;
    return code >= 97 && code <= 102 || code >= 65 && code <= 70 || code >= 48 && code <= 57;
  }
  return isHexadecimal;
}
var isAlphabetical;
var hasRequiredIsAlphabetical;
function requireIsAlphabetical() {
  if (hasRequiredIsAlphabetical) return isAlphabetical;
  hasRequiredIsAlphabetical = 1;
  isAlphabetical = alphabetical;
  function alphabetical(character) {
    var code = typeof character === "string" ? character.charCodeAt(0) : character;
    return code >= 97 && code <= 122 || code >= 65 && code <= 90;
  }
  return isAlphabetical;
}
var isAlphanumerical;
var hasRequiredIsAlphanumerical;
function requireIsAlphanumerical() {
  if (hasRequiredIsAlphanumerical) return isAlphanumerical;
  hasRequiredIsAlphanumerical = 1;
  var alphabetical = requireIsAlphabetical();
  var decimal = requireIsDecimal();
  isAlphanumerical = alphanumerical;
  function alphanumerical(character) {
    return alphabetical(character) || decimal(character);
  }
  return isAlphanumerical;
}
var decodeEntity_browser;
var hasRequiredDecodeEntity_browser;
function requireDecodeEntity_browser() {
  if (hasRequiredDecodeEntity_browser) return decodeEntity_browser;
  hasRequiredDecodeEntity_browser = 1;
  var el;
  var semicolon = 59;
  decodeEntity_browser = decodeEntity;
  function decodeEntity(characters) {
    var entity = "&" + characters + ";";
    var char;
    el = el || document.createElement("i");
    el.innerHTML = entity;
    char = el.textContent;
    if (char.charCodeAt(char.length - 1) === semicolon && characters !== "semi") {
      return false;
    }
    return char === entity ? false : char;
  }
  return decodeEntity_browser;
}
var parseEntities_1;
var hasRequiredParseEntities;
function requireParseEntities() {
  if (hasRequiredParseEntities) return parseEntities_1;
  hasRequiredParseEntities = 1;
  var legacy = require$$0;
  var invalid = require$$1;
  var decimal = requireIsDecimal();
  var hexadecimal = requireIsHexadecimal();
  var alphanumerical = requireIsAlphanumerical();
  var decodeEntity = requireDecodeEntity_browser();
  parseEntities_1 = parseEntities;
  var own = {}.hasOwnProperty;
  var fromCharCode = String.fromCharCode;
  var noop = Function.prototype;
  var defaults = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: false,
    nonTerminated: true
  };
  var tab = 9;
  var lineFeed = 10;
  var formFeed = 12;
  var space = 32;
  var ampersand = 38;
  var semicolon = 59;
  var lessThan = 60;
  var equalsTo = 61;
  var numberSign = 35;
  var uppercaseX = 88;
  var lowercaseX = 120;
  var replacementCharacter = 65533;
  var name = "named";
  var hexa = "hexadecimal";
  var deci = "decimal";
  var bases = {};
  bases[hexa] = 16;
  bases[deci] = 10;
  var tests = {};
  tests[name] = alphanumerical;
  tests[deci] = decimal;
  tests[hexa] = hexadecimal;
  var namedNotTerminated = 1;
  var numericNotTerminated = 2;
  var namedEmpty = 3;
  var numericEmpty = 4;
  var namedUnknown = 5;
  var numericDisallowed = 6;
  var numericProhibited = 7;
  var messages = {};
  messages[namedNotTerminated] = "Named character references must be terminated by a semicolon";
  messages[numericNotTerminated] = "Numeric character references must be terminated by a semicolon";
  messages[namedEmpty] = "Named character references cannot be empty";
  messages[numericEmpty] = "Numeric character references cannot be empty";
  messages[namedUnknown] = "Named character references must be known";
  messages[numericDisallowed] = "Numeric character references cannot be disallowed";
  messages[numericProhibited] = "Numeric character references cannot be outside the permissible Unicode range";
  function parseEntities(value, options) {
    var settings = {};
    var option;
    var key;
    if (!options) {
      options = {};
    }
    for (key in defaults) {
      option = options[key];
      settings[key] = option === null || option === void 0 ? defaults[key] : option;
    }
    if (settings.position.indent || settings.position.start) {
      settings.indent = settings.position.indent || [];
      settings.position = settings.position.start;
    }
    return parse(value, settings);
  }
  function parse(value, settings) {
    var additional = settings.additional;
    var nonTerminated = settings.nonTerminated;
    var handleText = settings.text;
    var handleReference = settings.reference;
    var handleWarning = settings.warning;
    var textContext = settings.textContext;
    var referenceContext = settings.referenceContext;
    var warningContext = settings.warningContext;
    var pos = settings.position;
    var indent = settings.indent || [];
    var length = value.length;
    var index = 0;
    var lines = -1;
    var column = pos.column || 1;
    var line = pos.line || 1;
    var queue = "";
    var result = [];
    var entityCharacters;
    var namedEntity;
    var terminated;
    var characters;
    var character;
    var reference;
    var following;
    var warning;
    var reason;
    var output;
    var entity;
    var begin;
    var start;
    var type;
    var test;
    var prev;
    var next;
    var diff;
    var end;
    if (typeof additional === "string") {
      additional = additional.charCodeAt(0);
    }
    prev = now();
    warning = handleWarning ? parseError : noop;
    index--;
    length++;
    while (++index < length) {
      if (character === lineFeed) {
        column = indent[lines] || 1;
      }
      character = value.charCodeAt(index);
      if (character === ampersand) {
        following = value.charCodeAt(index + 1);
        if (following === tab || following === lineFeed || following === formFeed || following === space || following === ampersand || following === lessThan || following !== following || additional && following === additional) {
          queue += fromCharCode(character);
          column++;
          continue;
        }
        start = index + 1;
        begin = start;
        end = start;
        if (following === numberSign) {
          end = ++begin;
          following = value.charCodeAt(end);
          if (following === uppercaseX || following === lowercaseX) {
            type = hexa;
            end = ++begin;
          } else {
            type = deci;
          }
        } else {
          type = name;
        }
        entityCharacters = "";
        entity = "";
        characters = "";
        test = tests[type];
        end--;
        while (++end < length) {
          following = value.charCodeAt(end);
          if (!test(following)) {
            break;
          }
          characters += fromCharCode(following);
          if (type === name && own.call(legacy, characters)) {
            entityCharacters = characters;
            entity = legacy[characters];
          }
        }
        terminated = value.charCodeAt(end) === semicolon;
        if (terminated) {
          end++;
          namedEntity = type === name ? decodeEntity(characters) : false;
          if (namedEntity) {
            entityCharacters = characters;
            entity = namedEntity;
          }
        }
        diff = 1 + end - start;
        if (!terminated && !nonTerminated) ;
        else if (!characters) {
          if (type !== name) {
            warning(numericEmpty, diff);
          }
        } else if (type === name) {
          if (terminated && !entity) {
            warning(namedUnknown, 1);
          } else {
            if (entityCharacters !== characters) {
              end = begin + entityCharacters.length;
              diff = 1 + end - begin;
              terminated = false;
            }
            if (!terminated) {
              reason = entityCharacters ? namedNotTerminated : namedEmpty;
              if (settings.attribute) {
                following = value.charCodeAt(end);
                if (following === equalsTo) {
                  warning(reason, diff);
                  entity = null;
                } else if (alphanumerical(following)) {
                  entity = null;
                } else {
                  warning(reason, diff);
                }
              } else {
                warning(reason, diff);
              }
            }
          }
          reference = entity;
        } else {
          if (!terminated) {
            warning(numericNotTerminated, diff);
          }
          reference = parseInt(characters, bases[type]);
          if (prohibited(reference)) {
            warning(numericProhibited, diff);
            reference = fromCharCode(replacementCharacter);
          } else if (reference in invalid) {
            warning(numericDisallowed, diff);
            reference = invalid[reference];
          } else {
            output = "";
            if (disallowed(reference)) {
              warning(numericDisallowed, diff);
            }
            if (reference > 65535) {
              reference -= 65536;
              output += fromCharCode(reference >>> (10 & 1023) | 55296);
              reference = 56320 | reference & 1023;
            }
            reference = output + fromCharCode(reference);
          }
        }
        if (reference) {
          flush();
          prev = now();
          index = end - 1;
          column += end - start + 1;
          result.push(reference);
          next = now();
          next.offset++;
          if (handleReference) {
            handleReference.call(
              referenceContext,
              reference,
              { start: prev, end: next },
              value.slice(start - 1, end)
            );
          }
          prev = next;
        } else {
          characters = value.slice(start - 1, end);
          queue += characters;
          column += characters.length;
          index = end - 1;
        }
      } else {
        if (character === 10) {
          line++;
          lines++;
          column = 0;
        }
        if (character === character) {
          queue += fromCharCode(character);
          column++;
        } else {
          flush();
        }
      }
    }
    return result.join("");
    function now() {
      return {
        line,
        column,
        offset: index + (pos.offset || 0)
      };
    }
    function parseError(code, offset) {
      var position = now();
      position.column += offset;
      position.offset += offset;
      handleWarning.call(warningContext, messages[code], position, code);
    }
    function flush() {
      if (queue) {
        result.push(queue);
        if (handleText) {
          handleText.call(textContext, queue, { start: prev, end: now() });
        }
        queue = "";
      }
    }
  }
  function prohibited(code) {
    return code >= 55296 && code <= 57343 || code > 1114111;
  }
  function disallowed(code) {
    return code >= 1 && code <= 8 || code === 11 || code >= 13 && code <= 31 || code >= 127 && code <= 159 || code >= 64976 && code <= 65007 || (code & 65535) === 65535 || (code & 65535) === 65534;
  }
  return parseEntities_1;
}
var prismCore = { exports: {} };
var hasRequiredPrismCore;
function requirePrismCore() {
  if (hasRequiredPrismCore) return prismCore.exports;
  hasRequiredPrismCore = 1;
  (function(module) {
    var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     *
     * @license MIT <https://opensource.org/licenses/MIT>
     * @author Lea Verou <https://lea.verou.me>
     * @namespace
     * @public
     */
    var Prism = (function(_self2) {
      var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
      var uniqueId = 0;
      var plainTextGrammar = {};
      var _ = {
        /**
         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
         * additional languages or plugins yourself.
         *
         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
         *
         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.manual = true;
         * // add a new <script> to load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        manual: _self2.Prism && _self2.Prism.manual,
        /**
         * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
         * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
         * own worker, you don't want it to do this.
         *
         * By setting this value to `true`, Prism will not add its own listeners to the worker.
         *
         * You obviously have to change this value before Prism executes. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.disableWorkerMessageHandler = true;
         * // Load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function encode(tokens) {
            if (tokens instanceof Token) {
              return new Token(tokens.type, encode(tokens.content), tokens.alias);
            } else if (Array.isArray(tokens)) {
              return tokens.map(encode);
            } else {
              return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            }
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function(o) {
            return Object.prototype.toString.call(o).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(obj) {
            if (!obj["__id"]) {
              Object.defineProperty(obj, "__id", { value: ++uniqueId });
            }
            return obj["__id"];
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function deepClone(o, visited) {
            visited = visited || {};
            var clone;
            var id;
            switch (_.util.type(o)) {
              case "Object":
                id = _.util.objId(o);
                if (visited[id]) {
                  return visited[id];
                }
                clone = /** @type {Record<string, any>} */
                {};
                visited[id] = clone;
                for (var key in o) {
                  if (o.hasOwnProperty(key)) {
                    clone[key] = deepClone(o[key], visited);
                  }
                }
                return (
                  /** @type {any} */
                  clone
                );
              case "Array":
                id = _.util.objId(o);
                if (visited[id]) {
                  return visited[id];
                }
                clone = [];
                visited[id] = clone;
                /** @type {Array} */
                /** @type {any} */
                o.forEach(function(v, i) {
                  clone[i] = deepClone(v, visited);
                });
                return (
                  /** @type {any} */
                  clone
                );
              default:
                return o;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function(element) {
            while (element) {
              var m = lang.exec(element.className);
              if (m) {
                return m[1].toLowerCase();
              }
              element = element.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function(element, language) {
            element.className = element.className.replace(RegExp(lang, "gi"), "");
            element.classList.add("language-" + language);
          },
          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function() {
            if (typeof document === "undefined") {
              return null;
            }
            if ("currentScript" in document && 1 < 2) {
              return (
                /** @type {any} */
                document.currentScript
              );
            }
            try {
              throw new Error();
            } catch (err) {
              var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
              if (src) {
                var scripts = document.getElementsByTagName("script");
                for (var i in scripts) {
                  if (scripts[i].src == src) {
                    return scripts[i];
                  }
                }
              }
              return null;
            }
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function(element, className, defaultActivation) {
            var no = "no-" + className;
            while (element) {
              var classList = element.classList;
              if (classList.contains(className)) {
                return true;
              }
              if (classList.contains(no)) {
                return false;
              }
              element = element.parentElement;
            }
            return !!defaultActivation;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: plainTextGrammar,
          plaintext: plainTextGrammar,
          text: plainTextGrammar,
          txt: plainTextGrammar,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function(id, redef) {
            var lang2 = _.util.clone(_.languages[id]);
            for (var key in redef) {
              lang2[key] = redef[key];
            }
            return lang2;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function(inside, before, insert, root) {
            root = root || /** @type {any} */
            _.languages;
            var grammar = root[inside];
            var ret = {};
            for (var token in grammar) {
              if (grammar.hasOwnProperty(token)) {
                if (token == before) {
                  for (var newToken in insert) {
                    if (insert.hasOwnProperty(newToken)) {
                      ret[newToken] = insert[newToken];
                    }
                  }
                }
                if (!insert.hasOwnProperty(token)) {
                  ret[token] = grammar[token];
                }
              }
            }
            var old = root[inside];
            root[inside] = ret;
            _.languages.DFS(_.languages, function(key, value) {
              if (value === old && key != inside) {
                this[key] = ret;
              }
            });
            return ret;
          },
          // Traverse a language definition with Depth First Search
          DFS: function DFS(o, callback, type, visited) {
            visited = visited || {};
            var objId = _.util.objId;
            for (var i in o) {
              if (o.hasOwnProperty(i)) {
                callback.call(o, i, o[i], type || i);
                var property = o[i];
                var propertyType = _.util.type(property);
                if (propertyType === "Object" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, null, visited);
                } else if (propertyType === "Array" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, i, visited);
                }
              }
            }
          }
        },
        plugins: {},
        /**
         * This is the most high-level function in Prism’s API.
         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
         * each one of them.
         *
         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
         *
         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
         * @memberof Prism
         * @public
         */
        highlightAll: function(async, callback) {
          _.highlightAllUnder(document, async, callback);
        },
        /**
         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
         * {@link Prism.highlightElement} on each one of them.
         *
         * The following hooks will be run:
         * 1. `before-highlightall`
         * 2. `before-all-elements-highlight`
         * 3. All hooks of {@link Prism.highlightElement} for each element.
         *
         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
         * @memberof Prism
         * @public
         */
        highlightAllUnder: function(container, async, callback) {
          var env = {
            callback,
            container,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          _.hooks.run("before-highlightall", env);
          env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
          _.hooks.run("before-all-elements-highlight", env);
          for (var i = 0, element; element = env.elements[i++]; ) {
            _.highlightElement(element, async === true, env.callback);
          }
        },
        /**
         * Highlights the code inside a single element.
         *
         * The following hooks will be run:
         * 1. `before-sanity-check`
         * 2. `before-highlight`
         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
         * 4. `before-insert`
         * 5. `after-highlight`
         * 6. `complete`
         *
         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
         * the element's language.
         *
         * @param {Element} element The element containing the code.
         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
         *
         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
         * asynchronous highlighting to work. You can build your own bundle on the
         * [Download page](https://prismjs.com/download.html).
         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
         * @memberof Prism
         * @public
         */
        highlightElement: function(element, async, callback) {
          var language = _.util.getLanguage(element);
          var grammar = _.languages[language];
          _.util.setLanguage(element, language);
          var parent = element.parentElement;
          if (parent && parent.nodeName.toLowerCase() === "pre") {
            _.util.setLanguage(parent, language);
          }
          var code = element.textContent;
          var env = {
            element,
            language,
            grammar,
            code
          };
          function insertHighlightedCode(highlightedCode) {
            env.highlightedCode = highlightedCode;
            _.hooks.run("before-insert", env);
            env.element.innerHTML = env.highlightedCode;
            _.hooks.run("after-highlight", env);
            _.hooks.run("complete", env);
            callback && callback.call(env.element);
          }
          _.hooks.run("before-sanity-check", env);
          parent = env.element.parentElement;
          if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
            parent.setAttribute("tabindex", "0");
          }
          if (!env.code) {
            _.hooks.run("complete", env);
            callback && callback.call(env.element);
            return;
          }
          _.hooks.run("before-highlight", env);
          if (!env.grammar) {
            insertHighlightedCode(_.util.encode(env.code));
            return;
          }
          if (async && _self2.Worker) {
            var worker = new Worker(_.filename);
            worker.onmessage = function(evt) {
              insertHighlightedCode(evt.data);
            };
            worker.postMessage(JSON.stringify({
              language: env.language,
              code: env.code,
              immediateClose: true
            }));
          } else {
            insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
          }
        },
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function(text, grammar, language) {
          var env = {
            code: text,
            grammar,
            language
          };
          _.hooks.run("before-tokenize", env);
          if (!env.grammar) {
            throw new Error('The language "' + env.language + '" has no grammar.');
          }
          env.tokens = _.tokenize(env.code, env.grammar);
          _.hooks.run("after-tokenize", env);
          return Token.stringify(_.util.encode(env.tokens), env.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function(text, grammar) {
          var rest = grammar.rest;
          if (rest) {
            for (var token in rest) {
              grammar[token] = rest[token];
            }
            delete grammar.rest;
          }
          var tokenList = new LinkedList();
          addAfter(tokenList, tokenList.head, text);
          matchGrammar(text, tokenList, grammar, tokenList.head, 0);
          return toArray(tokenList);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function(name, callback) {
            var hooks = _.hooks.all;
            hooks[name] = hooks[name] || [];
            hooks[name].push(callback);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function(name, env) {
            var callbacks = _.hooks.all[name];
            if (!callbacks || !callbacks.length) {
              return;
            }
            for (var i = 0, callback; callback = callbacks[i++]; ) {
              callback(env);
            }
          }
        },
        Token
      };
      _self2.Prism = _;
      function Token(type, content, alias, matchedStr) {
        this.type = type;
        this.content = content;
        this.alias = alias;
        this.length = (matchedStr || "").length | 0;
      }
      Token.stringify = function stringify(o, language) {
        if (typeof o == "string") {
          return o;
        }
        if (Array.isArray(o)) {
          var s = "";
          o.forEach(function(e) {
            s += stringify(e, language);
          });
          return s;
        }
        var env = {
          type: o.type,
          content: stringify(o.content, language),
          tag: "span",
          classes: ["token", o.type],
          attributes: {},
          language
        };
        var aliases = o.alias;
        if (aliases) {
          if (Array.isArray(aliases)) {
            Array.prototype.push.apply(env.classes, aliases);
          } else {
            env.classes.push(aliases);
          }
        }
        _.hooks.run("wrap", env);
        var attributes = "";
        for (var name in env.attributes) {
          attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
        }
        return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
      };
      function matchPattern(pattern, pos, text, lookbehind) {
        pattern.lastIndex = pos;
        var match = pattern.exec(text);
        if (match && lookbehind && match[1]) {
          var lookbehindLength = match[1].length;
          match.index += lookbehindLength;
          match[0] = match[0].slice(lookbehindLength);
        }
        return match;
      }
      function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
        for (var token in grammar) {
          if (!grammar.hasOwnProperty(token) || !grammar[token]) {
            continue;
          }
          var patterns = grammar[token];
          patterns = Array.isArray(patterns) ? patterns : [patterns];
          for (var j = 0; j < patterns.length; ++j) {
            if (rematch && rematch.cause == token + "," + j) {
              return;
            }
            var patternObj = patterns[j];
            var inside = patternObj.inside;
            var lookbehind = !!patternObj.lookbehind;
            var greedy = !!patternObj.greedy;
            var alias = patternObj.alias;
            if (greedy && !patternObj.pattern.global) {
              var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
              patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
            }
            var pattern = patternObj.pattern || patternObj;
            for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
              if (rematch && pos >= rematch.reach) {
                break;
              }
              var str = currentNode.value;
              if (tokenList.length > text.length) {
                return;
              }
              if (str instanceof Token) {
                continue;
              }
              var removeCount = 1;
              var match;
              if (greedy) {
                match = matchPattern(pattern, pos, text, lookbehind);
                if (!match || match.index >= text.length) {
                  break;
                }
                var from = match.index;
                var to = match.index + match[0].length;
                var p = pos;
                p += currentNode.value.length;
                while (from >= p) {
                  currentNode = currentNode.next;
                  p += currentNode.value.length;
                }
                p -= currentNode.value.length;
                pos = p;
                if (currentNode.value instanceof Token) {
                  continue;
                }
                for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                  removeCount++;
                  p += k.value.length;
                }
                removeCount--;
                str = text.slice(pos, p);
                match.index -= pos;
              } else {
                match = matchPattern(pattern, 0, str, lookbehind);
                if (!match) {
                  continue;
                }
              }
              var from = match.index;
              var matchStr = match[0];
              var before = str.slice(0, from);
              var after = str.slice(from + matchStr.length);
              var reach = pos + str.length;
              if (rematch && reach > rematch.reach) {
                rematch.reach = reach;
              }
              var removeFrom = currentNode.prev;
              if (before) {
                removeFrom = addAfter(tokenList, removeFrom, before);
                pos += before.length;
              }
              removeRange(tokenList, removeFrom, removeCount);
              var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
              currentNode = addAfter(tokenList, removeFrom, wrapped);
              if (after) {
                addAfter(tokenList, currentNode, after);
              }
              if (removeCount > 1) {
                var nestedRematch = {
                  cause: token + "," + j,
                  reach
                };
                matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                if (rematch && nestedRematch.reach > rematch.reach) {
                  rematch.reach = nestedRematch.reach;
                }
              }
            }
          }
        }
      }
      function LinkedList() {
        var head = { value: null, prev: null, next: null };
        var tail = { value: null, prev: head, next: null };
        head.next = tail;
        this.head = head;
        this.tail = tail;
        this.length = 0;
      }
      function addAfter(list, node, value) {
        var next = node.next;
        var newNode = { value, prev: node, next };
        node.next = newNode;
        next.prev = newNode;
        list.length++;
        return newNode;
      }
      function removeRange(list, node, count) {
        var next = node.next;
        for (var i = 0; i < count && next !== list.tail; i++) {
          next = next.next;
        }
        node.next = next;
        next.prev = node;
        list.length -= i;
      }
      function toArray(list) {
        var array = [];
        var node = list.head.next;
        while (node !== list.tail) {
          array.push(node.value);
          node = node.next;
        }
        return array;
      }
      if (!_self2.document) {
        if (!_self2.addEventListener) {
          return _;
        }
        if (!_.disableWorkerMessageHandler) {
          _self2.addEventListener("message", function(evt) {
            var message = JSON.parse(evt.data);
            var lang2 = message.language;
            var code = message.code;
            var immediateClose = message.immediateClose;
            _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
            if (immediateClose) {
              _self2.close();
            }
          }, false);
        }
        return _;
      }
      var script = _.util.currentScript();
      if (script) {
        _.filename = script.src;
        if (script.hasAttribute("data-manual")) {
          _.manual = true;
        }
      }
      function highlightAutomaticallyCallback() {
        if (!_.manual) {
          _.highlightAll();
        }
      }
      if (!_.manual) {
        var readyState = document.readyState;
        if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
          document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
        } else {
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(highlightAutomaticallyCallback);
          } else {
            window.setTimeout(highlightAutomaticallyCallback, 16);
          }
        }
      }
      return _;
    })(_self);
    if (module.exports) {
      module.exports = Prism;
    }
    if (typeof commonjsGlobal !== "undefined") {
      commonjsGlobal.Prism = Prism;
    }
  })(prismCore);
  return prismCore.exports;
}
var core$1;
var hasRequiredCore;
function requireCore() {
  if (hasRequiredCore) return core$1;
  hasRequiredCore = 1;
  var ctx = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof commonjsGlobal === "object" ? commonjsGlobal : {};
  var restore = capture();
  ctx.Prism = { manual: true, disableWorkerMessageHandler: true };
  var h = requireHastscript();
  var decode = requireParseEntities();
  var Prism = requirePrismCore();
  var markup = requireMarkup();
  var css = requireCss();
  var clike = requireClike();
  var js = requireJavascript();
  restore();
  var own = {}.hasOwnProperty;
  function Refractor() {
  }
  Refractor.prototype = Prism;
  var refract = new Refractor();
  core$1 = refract;
  refract.highlight = highlight;
  refract.register = register;
  refract.alias = alias;
  refract.registered = registered;
  refract.listLanguages = listLanguages;
  register(markup);
  register(css);
  register(clike);
  register(js);
  refract.util.encode = encode;
  refract.Token.stringify = stringify;
  function register(grammar) {
    if (typeof grammar !== "function" || !grammar.displayName) {
      throw new Error("Expected `function` for `grammar`, got `" + grammar + "`");
    }
    if (refract.languages[grammar.displayName] === void 0) {
      grammar(refract);
    }
  }
  function alias(name, alias2) {
    var languages = refract.languages;
    var map = name;
    var key;
    var list;
    var length;
    var index;
    if (alias2) {
      map = {};
      map[name] = alias2;
    }
    for (key in map) {
      list = map[key];
      list = typeof list === "string" ? [list] : list;
      length = list.length;
      index = -1;
      while (++index < length) {
        languages[list[index]] = languages[key];
      }
    }
  }
  function highlight(value, name) {
    var sup = Prism.highlight;
    var grammar;
    if (typeof value !== "string") {
      throw new Error("Expected `string` for `value`, got `" + value + "`");
    }
    if (refract.util.type(name) === "Object") {
      grammar = name;
      name = null;
    } else {
      if (typeof name !== "string") {
        throw new Error("Expected `string` for `name`, got `" + name + "`");
      }
      if (own.call(refract.languages, name)) {
        grammar = refract.languages[name];
      } else {
        throw new Error("Unknown language: `" + name + "` is not registered");
      }
    }
    return sup.call(this, value, grammar, name);
  }
  function registered(language) {
    if (typeof language !== "string") {
      throw new Error("Expected `string` for `language`, got `" + language + "`");
    }
    return own.call(refract.languages, language);
  }
  function listLanguages() {
    var languages = refract.languages;
    var list = [];
    var language;
    for (language in languages) {
      if (own.call(languages, language) && typeof languages[language] === "object") {
        list.push(language);
      }
    }
    return list;
  }
  function stringify(value, language, parent) {
    var env;
    if (typeof value === "string") {
      return { type: "text", value };
    }
    if (refract.util.type(value) === "Array") {
      return stringifyAll(value, language);
    }
    env = {
      type: value.type,
      content: refract.Token.stringify(value.content, language, parent),
      tag: "span",
      classes: ["token", value.type],
      attributes: {},
      language,
      parent
    };
    if (value.alias) {
      env.classes = env.classes.concat(value.alias);
    }
    refract.hooks.run("wrap", env);
    return h(
      env.tag + "." + env.classes.join("."),
      attributes(env.attributes),
      env.content
    );
  }
  function stringifyAll(values, language) {
    var result = [];
    var length = values.length;
    var index = -1;
    var value;
    while (++index < length) {
      value = values[index];
      if (value !== "" && value !== null && value !== void 0) {
        result.push(value);
      }
    }
    index = -1;
    length = result.length;
    while (++index < length) {
      value = result[index];
      result[index] = refract.Token.stringify(value, language, result);
    }
    return result;
  }
  function encode(tokens) {
    return tokens;
  }
  function attributes(attrs) {
    var key;
    for (key in attrs) {
      attrs[key] = decode(attrs[key]);
    }
    return attrs;
  }
  function capture() {
    var defined = "Prism" in ctx;
    var current = defined ? ctx.Prism : void 0;
    return restore2;
    function restore2() {
      if (defined) {
        ctx.Prism = current;
      } else {
        delete ctx.Prism;
      }
      defined = void 0;
      current = void 0;
    }
  }
  return core$1;
}
var coreExports = requireCore();
const refractor = /* @__PURE__ */ getDefaultExportFromCjs(coreExports);
const core = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: refractor
}, [coreExports]);
export {
  core as c
};
