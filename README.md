# jscad-fiber

[View examples](https://tscircuit.github.io/jscad-fiber/) &middot; [jscad](https://github.com/jscad/OpenJSCAD.org) &middot; [tscircuit](https://github.com/tscircuit/tscircuit)

This package allows you to create 3d CAD objects with React and jscad.

![image](https://github.com/user-attachments/assets/3fe8f88f-38e5-4720-93f0-243005c40e7c)

## Usage

> [!NOTE]
> Go to the [`examples` directory](./examples) to see examples of usage.

Create JSCad components with React.

```tsx
import { JSCad3dView } from "jscad-fiber/viewer"

export default () => (
  <JSCad3dView>
    <union>
      <substract from={<cube size={10} />}>
        <sphere radius={6.8} />
      </subtract>
      <intersect>
        <cube size={7} />
        <sphere radius={4} />
      </intersect>
    </union>
  </JSCad3dView/>
)
```

## Why?

jscad allows you to create detailed 3d objects using boolean operations. This
is how modern CAD tools create precise 3d models. jscad-fiber is used to
create the 3d electronics library for [tscircuit](https://github.com/tscircuit/tscircuit) called
[jscad-electronics](https://github.com/tscircuit/jscad-electronics)
