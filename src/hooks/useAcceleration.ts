/* eslint-disable @typescript-eslint/no-magic-numbers */
import { useTime } from "../contexts/Time";

export type UseAccelerationResult = [x: number, y: number];

export const useAcceleration = (
  v0: number,
  a: number,
  x0 = 0
): UseAccelerationResult => {
  const [t] = useTime();
  const v = v0 + a * t;
  const x = x0 + v0 * t + 0.5 * a * t ** 2;
  return [x, v];
};
