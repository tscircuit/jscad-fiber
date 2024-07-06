# jscad-fiber


## Usage

> [!WARNING]
> This library is in beta and this may not work yet, go into the
> `examples` directory to see examples of usage.

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
