# jscad-fiber

[View examples](https://tscircuit.github.io/jscad-fiber/) &middot; [jscad](https://github.com/jscad/OpenJSCAD.org) &middot; [tscircuit](https://github.com/tscircuit/tscircuit) &middot; [jscad-electronics](https://github.com/tscircuit/jscad-electronics)

This package allows you to create 3D CAD objects with React and JSCAD.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Common Props](#common-props)
- [Components](#components)
  - [Basic Shapes](#basic-shapes)
  - [Boolean Operations](#boolean-operations)
  - [Transformations](#transformations)
  - [Extrusions](#extrusions)
- [Example Wrapper](#example-wrapper)
- [Why?](#why)
- [Contributing](#contributing)

![Example CAD Model](https://github.com/user-attachments/assets/a17e5e04-ba88-4b9b-9308-58121779463e)



## Installation

```bash
npm install jscad-fiber @jscad/modeling three @react-three/fiber
```

## Usage

Create JSCAD components with React:

```tsx
import { JsCadView } from "jscad-fiber"
import { Cube, Sphere, Subtract } from "jscad-fiber"

export default () => (
  <JsCadView>
    <Subtract>
      <Cube size={10} />
      <Sphere radius={6.8} />
    </Subtract>
  </JsCadView>
)
```

## Common Props

All components support these common props:

| Prop | Type | Description |
|------|------|-------------|
| `color` | `string \| [number,number,number]` | CSS color string or RGB array |
| `center` | `[number,number,number] \| {x,y,z}` | Position in 3D space |
| `offset` | `[number,number,number] \| {x,y,z}` | Alternative to center |

## Components

### Basic Shapes

#### Cube

| Prop | Type | Description |
|------|------|-------------|
| `size` | `number \| [number,number,number]` | Single number for all dimensions or [width, height, depth] |

```tsx
<Cube size={10} /> // Single number for all dimensions
<Cube size={[width, height, depth]} /> // Array for different dimensions
```

#### Sphere

| Prop | Type | Description |
|------|------|-------------|
| `radius` | `number` | Sphere radius |
| `segments` | `number` | Optional detail level (default: 32) |

```tsx
<Sphere radius={10} segments={32} />
```

#### Cylinder

| Prop | Type | Description |
|------|------|-------------|
| `radius` | `number` | Cylinder radius |
| `height` | `number` | Cylinder height |

```tsx
<Cylinder radius={5} height={10} />
```

#### Torus

| Prop | Type | Description |
|------|------|-------------|
| `innerRadius` | `number` | Inner ring radius |
| `outerRadius` | `number` | Outer ring radius |
| `innerSegments` | `number` | Optional inner detail level (default: 32) |
| `outerSegments` | `number` | Optional outer detail level (default: 32) |

```tsx
<Torus 
  innerRadius={10}
  outerRadius={15}
  innerSegments={32}
  outerSegments={32}
/>
```

### Boolean Operations

#### Subtract

| Prop | Type | Description |
|------|------|-------------|
| `children` | `React.ReactNode[]` | First child is base shape, others are subtracted |

```tsx
<Subtract>
  <Cube size={10} /> {/* Base shape */}
  <Sphere radius={6} /> {/* Subtracted from base */}
</Subtract>
```

#### Union

| Prop | Type | Description |
|------|------|-------------|
| `children` | `React.ReactNode[]` | Shapes to combine |

```tsx
<Union>
  <Cube size={10} />
  <Sphere radius={6} center={[0,0,10]} />
</Union>
```

#### Hull

| Prop | Type | Description |
|------|------|-------------|
| `children` | `React.ReactNode[]` | Shapes to create hull from |

```tsx
<Hull>
  <Cube size={10} />
  <Sphere radius={6} center={[0,0,10]} />
</Hull>
```

### Transformations

#### Translate

| Prop | Type | Description |
|------|------|-------------|
| `offset` | `[number,number,number]` | Translation in [x,y,z] |

```tsx
<Translate offset={[x,y,z]}>
  <Cube size={10} />
</Translate>
```

#### Rotate

| Prop | Type | Description |
|------|------|-------------|
| `angles` | `[number,number,number]` | Rotation angles in radians [x,y,z] |

```tsx
<Rotate angles={[x,y,z]}>
  <Cube size={10} />
</Rotate>
```

### Extrusions

#### ExtrudeLinear

| Prop | Type | Description |
|------|------|-------------|
| `height` | `number` | Extrusion height |
| `twistAngle` | `number` | Optional twist during extrusion |

```tsx
<ExtrudeLinear height={10}>
  <Polygon points={[[0,0], [10,0], [5,10]]} />
</ExtrudeLinear>
```

#### ExtrudeRotate

| Prop | Type | Description |
|------|------|-------------|
| `angle` | `number` | Rotation angle in radians |
| `segments` | `number` | Optional number of segments |

```tsx
<ExtrudeRotate angle={Math.PI * 2}>
  <Polygon points={[[0,0], [10,0], [5,10]]} />
</ExtrudeRotate>
```

## Component Props Reference

| Component | Props | Description |
|-----------|-------|-------------|
| Cube | `size: number \| [number,number,number]` | Size in each dimension |
| Sphere | `radius: number`, `segments?: number` | Radius and detail level |
| Cylinder | `radius: number`, `height: number` | Basic cylinder dimensions |
| Torus | `innerRadius: number`, `outerRadius: number`, `segments?: number` | Ring dimensions |
| ExtrudeLinear | `height: number`, `twistAngle?: number` | Linear extrusion with optional twist |
| ExtrudeRotate | `angle: number`, `segments?: number` | Rotational sweep |
| Polygon | `points: [number,number][]` | 2D points array |
| Translate | `offset: [number,number,number]` | 3D translation |
| Rotate | `angles: [number,number,number]` | Rotation angles in radians |
| Hull | `children: React.ReactNode` | Convex hull of children |
| Union | `children: React.ReactNode` | Boolean union of children |
| Subtract | `children: React.ReactNode` | Boolean subtraction |

## Why?
![Example Circuit](https://raw.githubusercontent.com/tscircuit/docs/cc50157788914f060f0169b92b994deff754877b/images/pushbutton-led-circuit/3d.png)

JSCAD allows you to create detailed 3D objects using boolean operations. This
is how modern CAD tools create precise 3D models. jscad-fiber is used to
create the 3D electronics library for [tscircuit](https://github.com/tscircuit/tscircuit) called
[jscad-electronics](https://github.com/tscircuit/jscad-electronics)
## Example Wrapper

The library includes an `ExampleWrapper` component that provides a convenient way to display both the rendered 3D object and its source code:
![ExampleWrapper](https://github.com/user-attachments/assets/c3a44096-b26b-4774-ba3f-b34f89e46639)
```tsx
import { ExampleWrapper } from "jscad-fiber"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView>
      <Sphere radius={10} color="orange" />
    </JsCadView>
  </ExampleWrapper>
)
```

This wrapper:
- Shows the rendered 3D object
- Provides a "Show Code" button that reveals the source code
- Automatically syntax highlights the code
- Makes examples more interactive and educational

## Contributing

See the [`examples` directory](./examples) for more usage examples.

Pull requests welcome! Please check existing issues or create a new one to discuss major changes.

## Headless plans and named reference rectangles

`jscad-fiber/headless` compiles pure JSX components to serializable JSCAD operation
JSON without importing the viewer, Three.js, or the modeling kernel. It supports
synchronous function components, fragments, arrays, and null children. Hooks,
async components, and raw `Custom` geometry are not supported by this compiler.
The lowercase `jscad` namespace exposes the planner-supported component subset;
the existing capitalized components remain available.

```tsx
import { jscad, renderToJscadPlan } from "jscad-fiber/headless"

function Spacer() {
  return <>
    <jscad.extrudeLinear height={4}>
      <jscad.rectangle size={[42, 42]} />
    </jscad.extrudeLinear>
    <jscad.rotate angles={[0, Math.PI, 0]}>
      <jscad.rectangle name="motor" size={[42, 42]} reference />
    </jscad.rotate>
    <jscad.translate offset={[0, 0, 4]}>
      <jscad.rectangle name="board" size={[42, 42]} reference />
    </jscad.translate>
  </>
}

const plan = renderToJscadPlan(<Spacer />)
const json = JSON.stringify(plan)
```

A reference rectangle describes an attachment plane. It starts in local XY with
normal +Z and in-plane X direction +X; its center is the attachment point.
Ordinary transforms position and orient it alongside the solid. `name` must be
nonblank and unique within the part. `reference` excludes the rectangle from
native geometry rendering, so it cannot add material to a print.

The compiler preserves reference rectangles as standard polygon operations with
`name` and `reference` metadata. Consumers must extract references before sending
a plan to a geometry interpreter or exporter. Use `resolveReferencePlanes` from
a version of `jscad-planner` that provides named-reference extraction; older
interpreters do not understand the metadata. The returned `geometry` plan can be
executed by existing interpreters, while `referencePlanes` provides each name,
origin, normal, and in-plane X axis. Metadata lives in the planner/fiber layer;
no changes to `@jscad/modeling` are needed.

See [the motor spacer example](./examples/motor-spacer.tsx) for a 4 mm plate,
four hollow posts on 31 mm centers, 3.2 mm M3 clearance holes, a 30 mm center
opening, and named `motor` and `board` reference planes. Dimensions in that
example are millimeters.

## Native models with named extrusion outlines

Name the ends of an extrusion directly in normal construction JSX:

```tsx
import modeling from "@jscad/modeling"
import {
  ExtrudeLinear, Rectangle, Subtract, Translate, renderToJscadModel,
} from "jscad-fiber/model"

function Tube() {
  return <Subtract>
    <ExtrudeLinear height={80}
      topOutlineName="outer_top" bottomOutlineName="outer_bottom">
      <Rectangle size={[40, 20]} />
    </ExtrudeLinear>
    <ExtrudeLinear height={80}
      topOutlineName="inner_top" bottomOutlineName="inner_bottom">
      <Rectangle size={[34, 14]} />
    </ExtrudeLinear>
  </Subtract>
}

const model = renderToJscadModel(
  <Translate offset={[10, 20, 30]}><Tube /></Translate>,
  modeling,
)
const top = model.referenceFeatures.outer_top
// top.geometry is the actual native closed profile; its width is 40 mm.
// top.matrix places it at the outer extrusion's end in model coordinates.
```

`topOutlineName` and `bottomOutlineName` refer to the complete native input
profile. Bottom means the authored start at local Z=0; top means the extrusion
endpoint at local Z=`height`, including the full final `twistAngle` in radians.
These names retain start/end meaning for negative heights and after rotation.
The existing `center`/`offset` wrapper and ancestor `Translate`/`Rotate` operations
compose into each feature's placement. `ExtrudeLinear` forwards `twistAngle` and
`twistSteps` to the same kernel that creates the solid. There is no separate
extrusion scale or start option; transforms already present in the native
profile are retained.

The outlines are construction features of that extrusion before later booleans.
In the tube example, the outer and inner extrusion profiles are independently
named before subtraction. Names do not promise automatic topology tracking after
later cuts, and do not come from mesh indices or inferred dimension presets.

`renderToJscadModel(element, kernel)` returns
`{ geometries, referenceFeatures }`. Each feature contains
`{ geometry, matrix }`: the actual native profile plus a 16-number,
column-major local-to-model matrix. Read points through the native JSCAD reader
first, then apply the matrix to every point. This preserves closed and curved
profiles, pending native profile transforms, and profiles rotated outside XY.
The caller applies any later CAD instance placement.

Names must be nonblank and unique within one model evaluation; top and bottom
share the namespace with other named features. Names are preserved as authored.
Separate CAD part instances can each define `outer_top`. Named extrusions
require one evaluated geometric profile; use an explicit profile boolean when
appropriate rather than supplying multiple independent profiles under one name.
A `Geom2` with holes retains every contour, and a closed `Path2` retains its
closure. Readers may reject multi-contour outlines when a single edge is
required; they must not silently select one loop or flatten holes into a fake
connected path.

When either outline name is supplied, height and optional twist angle must be
finite, and optional twist steps must be a positive integer. An empty
construction-only input produces no solid or phantom outlines. Outline naming
does not add material to the extrusion.

The viewer-free `jscad-fiber/model` entry exports the renderer, components and
`NativeGeometry`, `JscadReferenceFeature`, and `JscadModel` types. It requires
a caller-supplied modeling kernel and evaluates pure synchronous components
without hooks. It imports no viewer or Three.js.

`renderToJscadPlan` preserves `topOutlineName`/`bottomOutlineName` as metadata
on the standard serializable `extrudeLinear` operation, alongside its ordinary
options and profile. Existing interpreters continue to execute the same solid;
native outline extraction is provided by `renderToJscadModel`, not by the plan
interpreter. No native geometry is serialized into Circuit JSON.

Existing named `Rectangle` reference planes are collected in the same native
feature collection. Lower-level native integrations can still use `Custom`
with `Geom2`, `Path2` or `Geom3`, `name`, and `reference`; reference nodes
are omitted before CSG and normal rendering, while named ordinary nodes remain
geometry. Raw native `Custom` values remain unsupported by the serializable
plan compiler.

See the [rectangular tube construction and visual snapshots](https://github.com/tscircuit/jscad-electronics/pull/504)
and the [dimension drawing exporter](https://github.com/tscircuit/circuit-json-to-drawing/pull/3).
