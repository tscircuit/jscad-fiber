import { g as getDefaultExportFromCjs } from "./index-D_RCwIU6.js";
import { r as requireC } from "./c-BM9zQzkN.js";
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
var hlsl_1;
var hasRequiredHlsl;
function requireHlsl() {
  if (hasRequiredHlsl) return hlsl_1;
  hasRequiredHlsl = 1;
  var refractorC = requireC();
  hlsl_1 = hlsl2;
  hlsl2.displayName = "hlsl";
  hlsl2.aliases = [];
  function hlsl2(Prism) {
    Prism.register(refractorC);
    Prism.languages.hlsl = Prism.languages.extend("c", {
      // Regarding keywords and class names:
      // The list of all keywords was split into 'keyword' and 'class-name' tokens based on whether they are capitalized.
      // https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-keywords
      // https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-reserved-words
      "class-name": [
        Prism.languages.c["class-name"],
        /\b(?:AppendStructuredBuffer|BlendState|Buffer|ByteAddressBuffer|CompileShader|ComputeShader|ConsumeStructuredBuffer|DepthStencilState|DepthStencilView|DomainShader|GeometryShader|Hullshader|InputPatch|LineStream|OutputPatch|PixelShader|PointStream|RWBuffer|RWByteAddressBuffer|RWStructuredBuffer|RWTexture(?:1D|1DArray|2D|2DArray|3D)|RasterizerState|RenderTargetView|SamplerComparisonState|SamplerState|StructuredBuffer|Texture(?:1D|1DArray|2D|2DArray|2DMS|2DMSArray|3D|Cube|CubeArray)|TriangleStream|VertexShader)\b/
      ],
      keyword: [
        // HLSL keyword
        /\b(?:asm|asm_fragment|auto|break|case|catch|cbuffer|centroid|char|class|column_major|compile|compile_fragment|const|const_cast|continue|default|delete|discard|do|dynamic_cast|else|enum|explicit|export|extern|for|friend|fxgroup|goto|groupshared|if|in|inline|inout|interface|line|lineadj|linear|long|matrix|mutable|namespace|new|nointerpolation|noperspective|operator|out|packoffset|pass|pixelfragment|point|precise|private|protected|public|register|reinterpret_cast|return|row_major|sample|sampler|shared|short|signed|sizeof|snorm|stateblock|stateblock_state|static|static_cast|string|struct|switch|tbuffer|technique|technique10|technique11|template|texture|this|throw|triangle|triangleadj|try|typedef|typename|uniform|union|unorm|unsigned|using|vector|vertexfragment|virtual|void|volatile|while)\b/,
        // scalar, vector, and matrix types
        /\b(?:bool|double|dword|float|half|int|min(?:10float|12int|16(?:float|int|uint))|uint)(?:[1-4](?:x[1-4])?)?\b/
      ],
      // https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-grammar#floating-point-numbers
      number: /(?:(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?|\b0x[\da-fA-F]+)[fFhHlLuU]?\b/,
      boolean: /\b(?:false|true)\b/
    });
  }
  return hlsl_1;
}
var hlslExports = requireHlsl();
const hlsl = /* @__PURE__ */ getDefaultExportFromCjs(hlslExports);
const hlsl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: hlsl
}, [hlslExports]);
export {
  hlsl$1 as h
};
