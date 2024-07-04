# jscad-fiber

Create JSCad components with React.
intersect(
    sphere({ radius: 4 }),
    cube({ size: 7 })
  )
```tsx
import { JSCad3dView } from "jscad-fiber"

export default () => (
  <union>
    <substract
      base={<cube size={10} />}
    >
      <sphere radius={6.8} />
    </subtract>
    <intersect>
      <cube size={7} />
      <sphere radius={4} />
    </intersect>
  </union>
)

```
