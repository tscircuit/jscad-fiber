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
