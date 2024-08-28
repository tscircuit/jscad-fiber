import { withColorProp } from "lib/wrappers/with-color-prop";
import { withOffsetProp } from "lib/wrappers/with-offset-prop";
import type { Point3 } from "./translate";

export type RotateProps = {
  rotation?:
    | Point3
    | [string | number, string | number, string | number]
    | string
    | number;
  angles?:
    | Point3
    | [string | number, string | number, string | number]
    | string
    | number;
  children: React.ReactNode;
};

const convertToDegrees = (value: string | number): number => {
  if (typeof value === "string") {
    const numericValue = value.replace(/[^\d.-]/g, "");
    const parsedValue = parseFloat(numericValue);
    if (!isNaN(parsedValue)) {
      return parsedValue;
    }
    throw new Error(`Invalid rotation value: ${value}`);
  }
  return value;
};

const RotateBase = ({ rotation, angles, children }: RotateProps) => {
  let finalRotation: [number, number, number];

  const processRotation = (
    value: RotateProps["rotation"] | RotateProps["angles"]
  ): [number, number, number] => {
    if (typeof value === "string" || typeof value === "number") {
      const angle = convertToDegrees(value);
      return [0, 0, angle];
    } else if (Array.isArray(value)) {
      return value.map(convertToDegrees) as [number, number, number];
    } else if (value && typeof value === "object") {
      return [
        convertToDegrees(value.x),
        convertToDegrees(value.y),
        convertToDegrees(value.z),
      ];
    }
    return [0, 0, 0];
  };

  finalRotation = rotation
    ? processRotation(rotation)
    : processRotation(angles);

  return <rotate angles={finalRotation}>{children}</rotate>;
};

export const Rotate = withOffsetProp(withColorProp(RotateBase));
