import { useGravitationalAcceleration } from "../contexts/GravitationalField";
import { useAcceleration } from "./useAcceleration";
import { useLinearMotion } from "./useLinearMotion";

export type UseObliqueLaunchResult = [
  x: number,
  y: number,
  vy: number,
  vx0: number,
  vy0: number
];

export const useObliqueLaunch = (
  norm: number,
  angle: number
): UseObliqueLaunchResult => {
  const vx0 = norm * Math.cos(angle);
  const vy0 = norm * Math.sin(angle);

  const x = useLinearMotion(vx0);
  const [g] = useGravitationalAcceleration();
  const [y, vy] = useAcceleration(vy0, -g);

  return [x, y, vy, vx0, vy0];
};
