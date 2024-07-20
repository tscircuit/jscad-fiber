# 🧊 jscad-fiber

[View examples](https://tscircuit.github.io/jscad-fiber/)

This package allows you to create 3d CAD objects with React and jscad.

## Usage

> [!NOTE]
> Go to the `examples` directory to see examples of usage.

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
