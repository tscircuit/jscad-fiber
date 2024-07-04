# jscad-fiber

Create JSCad components with React.
intersect(
    sphere({ radius: 4 }),
    cube({ size: 7 })
  )
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
