// src/code/designCode.ts

export const designCodeArray = `
import { JsCadFixture } from "../lib/components/jscad-fixture"
import { Colorize, Cuboid, Sphere, Subtract } from "../lib/jscad-fns"

export default () => (
  <JsCadFixture zAxisUp showGrid>
    <Subtract>
      <Cuboid size={[10, 5, 2]} />
      {[-4, -2, 0, 2, 4].map((value, index) => (
        <Cuboid key={index} center={[value, 0, 0]} size={[1, 1, 4]} />
      ))}
    </Subtract>
  </JsCadFixture>
);
`;



// Circle design code
export const designCodeCircle = `
import { Circle } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";

export default () => (
  <JsCadFixture>
    <Circle radius={10} />
  </JsCadFixture>
);
`;


export const designCodeColorizeCube = `
import { Colorize, Cube } from "../lib/jscad-fns";
import { JsCadFixture } from "../lib/components/jscad-fixture";

export default () => (
  <JsCadFixture>
    <Colorize color={"red"}>
      <Cube size={10} />
    </Colorize>
  </JsCadFixture>
);
`;

//cone
export const designCodeCone = `
import { CylinderElliptic } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <CylinderElliptic
      height={5}
      startRadius={[2, 2]}
      endRadius={[0, 0]}
      segments={32}
      startAngle={0}
      endAngle={Math.PI * 2}
      color="green"
      center={[0, 5, 5]}
    />
  </JsCadFixture>
);
`;


//cube

export const designCodeCube = `
import { Cube } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture>
    <Cube size={10} color="orange" center={[0, 0, 10]} />
  </JsCadFixture>
);
`;

//cuboid

export const designCodeCuboid = `
import { Cuboid } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture zAxisUp showGrid>
    <Cuboid color="blue" offset={{ x: 0, y: 0, z: 0 }} size={[15, 10, 10]} />
  </JsCadFixture>
);
`;

//custom

export const designCodeCustom = `
import { booleans, primitives } from "@jscad/modeling"
import { Custom } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

const cube = primitives.cube({ size: 10 })
const sphere = primitives.sphere({ radius: 6, segments: 32 })

const intersected = booleans.subtract(cube, sphere)

export default () => (
  <JsCadFixture>
    <Custom geometry={intersected} />
  </JsCadFixture>
)

;
`;


//custom-sphere

export const designCodeCustomSphere = `
import { Sphere } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <Sphere radius={10} segments={64} />
  </JsCadFixture>
)
;
`;

//custom-torus

export const designCodeCustomTorus = `
import { Torus } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <Torus
      innerRadius={15}
      outerRadius={20}
      innerSegments={64}
      outerSegments={96}
      innerRotation={Math.PI}
      outerRotation={Math.PI / 2}
      startAngle={0}
    />
  </JsCadFixture>
)
;
`;


//cylinder

export const designCodeCylinder = `
import { Cylinder } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture showGrid zAxisUp>
    <Cylinder
      radius={5}
      height={10}
      color="#F7E8AA"
      center={[-20, 0, 0]}
      rotation={["90deg", 0, 0]}
    />
    <Cylinder radius={5} height={10} color="#F7E8AA" center={[20, 0, 0]} />
  </JsCadFixture>
);
`;

//ellipsoid

export const designCodeEllipsoid = `
import { Ellipsoid } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <Ellipsoid radius={[15, 10, 10]} color="brown" center={[0, 0, 10]} />
  </JsCadFixture>
);
`;

//ExtrudeFromSlices

export const designCodeExtrudeFromSlices = `
import { ExtrudeFromSlices } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"
import jscad from "@jscad/modeling"

const { bezier } = jscad.curves
const { circle, line, polygon, rectangle, roundedRectangle, star } =
  jscad.primitives
const { extrudeLinear, extrudeRotate, extrudeFromSlices, slice } =
  jscad.extrusions
const { mat4 } = jscad.maths

const baseSlice = slice.fromPoints([
  [2, 2],
  [-2, 2],
  [-2, -2],
  [2, -2],
])

const xCurve = bezier.create([1, 1.8, 0.4, 1])
const yCurve = bezier.create([1, 1.8, 0.5])

export default () => (
  <JsCadFixture zAxisUp showGrid>
    <ExtrudeFromSlices
      numberOfSlices={10}
      capStart={true}
      capEnd={true}
      close={true}
      repair={true}
      baseSlice={baseSlice}
      callback={function (progress, count, base) {
        let newslice = slice.transform(
          mat4.fromTranslation(mat4.create(), [0, 0, 10 * progress]),
          baseSlice,
        )
        newslice = slice.transform(
          mat4.fromScaling(mat4.create(), [
            bezier.valueAt(progress, xCurve) as any,
            bezier.valueAt(progress, yCurve) as any,
            1,
          ]),
          newslice,
        )

        // Rotate the slice 90 degrees along the path
        const rotationAngle = (Math.PI / 2) * progress // 90 degrees in radians
        newslice = slice.transform(
          mat4.fromXRotation(mat4.create(), rotationAngle),
          newslice,
        )

        return newslice
      }}
    />
  </JsCadFixture>
);
`;

//extrude-helical

//add code here


//extrude-linear

export const designCodeExtrudeLinear = `
import { JsCadFixture } from "../lib/components/jscad-fixture"
import { ExtrudeLinear } from "../lib/jscad-fns"
import { Polygon } from "../lib/jscad-fns/polygon"

export default () => (
  <JsCadFixture>
    <ExtrudeLinear height={2} color="lightgreen" center={[0, 0, 4]}>
      <Polygon
        points={[
          [-2, -1],
          [2, -1],
          [2.5, 2],
          [1, 1],
          [0, 2],
          [-1, 1],
          [-2, 2],
        ]}
      />
    </ExtrudeLinear>
  </JsCadFixture>
)
;
`;

//ExtrudeRectangular

export const designCodeExtrudeRectangular = `
import { JsCadFixture } from "../lib/components/jscad-fixture"
import { ExtrudeRectangular } from "../lib/jscad-fns"
import { Polygon } from "../lib/jscad-fns/polygon"

export default () => (
  <JsCadFixture>
    <ExtrudeRectangular
      size={10}
      height={2}
      color="lightgreen"
      center={[0, -10, 0]}
    >
      <Polygon
        points={[
          [-2, -1],
          [2, -1],
          [2.5, 2],
          [1, 1],
          [0, 2],
          [-1, 1],
          [-2, 2],
        ]}
      />
    </ExtrudeRectangular>
  </JsCadFixture>
)

;
`;

//ExtrudeRotate

//code here


//HighGeodesicsphere

export const designCodeHighGeodesicsphere = `
import { GeodesicSphere } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <GeodesicSphere
      radius={10}
      frequency={12}
      color="violet"
      center={[10, 5, 0]}
    />
  </JsCadFixture>
)
;
`;

// hull

export const designCodeHull = `
import { Cuboid, Ellipsoid, Hull, Translate } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture>
    <Hull color="lightblue" center={[0, -5, -10]}>
      <Cuboid size={[10, 10, 10]} />
      <Ellipsoid radius={[10, 10, 10]} center={[0, 0, 15]} />
    </Hull>
  </JsCadFixture>
)
;
`;


//hull-chain

export const designCodeHullChain = `
import { Cuboid, Ellipsoid, HullChain } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture>
    <HullChain color="lightgreen" center={[0, 0, -10]}>
      <Cuboid size={[10, 10, 10]} />
      <Ellipsoid radius={[10, 10, 12]} center={[0, 0, 10]} />
      <Cuboid size={[10, 10, 10]} center={[0, 0, 20]} />
    </HullChain>
  </JsCadFixture>
)

;
`;

//GeodesicSphere

export const designCodeGeodesicSphere = `
import { GeodesicSphere } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <GeodesicSphere radius={10} frequency={6} />
  </JsCadFixture>
);
`;

//CylinderElliptic

export const designCodeCylinderElliptic = `
import { CylinderElliptic } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <CylinderElliptic
      height={6}
      startRadius={[1, 2]}
      endRadius={[1, 2]}
      segments={64}
      startAngle={0}
      endAngle={Math.PI / 2}
    />
  </JsCadFixture>
)
;
`;

//polygon

export const designCodePolygon = `
import { JsCadFixture } from "../lib/components/jscad-fixture"
import { Polygon } from "../lib/jscad-fns/polygon"

export default () => (
  <JsCadFixture>
    <Polygon
      points={[
        [-2, -1],
        [2, -1],
        [2.5, 2],
        [1, 1],
        [0, 2],
        [-1, 1],
        [-2, 2],
      ]}
    />
  </JsCadFixture>
)
;
`;

//project

export const designCodeProject = `
import { JsCadFixture } from "../lib/components/jscad-fixture"
import { Project } from "../lib/jscad-fns"
import { Polygon } from "../lib/jscad-fns/polygon"

export default () => (
  <JsCadFixture>
    <Project axis={[0, 0, 1]} origin={[0, 0, 0]}>
      <Polygon
        points={[
          [-2, -1],
          [2, -1],
          [2.5, 2],
          [1, 1],
          [0, 2],
          [-1, 1],
          [-2, 2],
        ]}
      />
    </Project>
  </JsCadFixture>
);
`;


//rectangle

export const designCodeRectangle = `
import { Rectangle } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture>
    <Rectangle size={[10, 20]} />
  </JsCadFixture>
);
`;

//rotate

export const designCodeRotate = `
import { Polygon } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"
import { Rotate } from "../lib/jscad-fns"

export default () => (
  <JsCadFixture>
    <Rotate angles={[0, 0, Math.PI]} color="cyan" center={[0, 0, 10]}>
      <Polygon
        points={[
          [-2, -1],
          [2, -1],
          [2.5, 2],
          [1, 1],
          [0, 2],
          [-1, 1],
          [-2, 2],
        ]}
      />
    </Rotate>
  </JsCadFixture>
);
`;

//RoundedCuboid

export const designCodeRoundedCuboid = `
import { RoundedCuboid } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture>
    <RoundedCuboid
      size={[15, 10, 10]}
      roundRadius={1}
      color="skyblue"
      center={[0, 0, 10]}
    />
  </JsCadFixture>
);
`;

//RoundedCylinder
//from dev

export const designCodeRoundedCylinder = `
import { RoundedCylinder } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <RoundedCylinder
      radius={10}
      height={20}
      roundRadius={5}
      color="#4B0082"
      center={[0, 0, 10]}
    />
  </JsCadFixture>
);
`;

//Sphere

export const designCodeSphere = `
import { Sphere } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <Sphere radius={10} color="orange" />
  </JsCadFixture>
);
`;

//Subtract

export const designCodeSubtract = `
import { Cube, Sphere, Subtract } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture>
    <Subtract>
      <Cube size={10} />
      <Sphere radius={6} />
    </Subtract>
  </JsCadFixture>
);
`;

//torus


export const designCodeTorus = `
import { Torus } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <Torus innerRadius={1} outerRadius={1.2} color="red" center={[0, 10, 0]} />
  </JsCadFixture>
)
;
`;

//Translate

export const designCodeTranslate = `
import { Cuboid } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"
import { Translate } from "../lib/jscad-fns"

export default () => (
  <JsCadFixture>
    <Cuboid size={[20, 10, 10]} />
    <Cuboid center={[0, 0, 15]} size={[15, 10, 15]} color="red" />
    <Translate offset={[0, 0, -15]}>
      <Cuboid size={[15, 10, 15]} color="blue" />
      <Cuboid size={[5, 25, 5]} color="white" />
    </Translate>
    <Translate offset={[0, 15, 0]}>
      <Translate offset={[0, 0, -15]}>
        <Cuboid size={[3, 3, 3]} color="green" />
        <Cuboid size={[4, 2, 4]} color="white" />
        <Cuboid size={[5, 1, 5]} color="red" />
        <Translate offset={[0, 0, -10]}>
          <Cuboid size={[3, 3, 3]} color="blue" />
          <Cuboid size={[4, 2, 4]} color="white" />
          <Cuboid size={[5, 1, 5]} color="red" />
        </Translate>
      </Translate>
    </Translate>
  </JsCadFixture>
)
;
`;

//Twisted-CylinderElliptic

export const designCodeTwistedCylinderElliptic = `
import { CylinderElliptic } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <CylinderElliptic
      height={6}
      startRadius={[1, 1.5]}
      endRadius={[1.5, 1]}
      segments={64}
      startAngle={0}
      endAngle={Math.PI * 2}
    />
  </JsCadFixture>
);
`;