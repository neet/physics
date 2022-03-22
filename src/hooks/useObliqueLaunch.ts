import { useGravitationalAcceleration } from "../contexts/GravitationalField";
import { useAcceleration } from "./useAcceleration";
import { useLinearMotion } from "./useLinearMotion";

export const useObliqueLaunch = (norm: number, angle: number) => {
  const vx0 = norm * Math.cos(angle);
  const vy0 = norm * Math.sin(angle);

  const x = useLinearMotion(vx0);
  const [g] = useGravitationalAcceleration();
  const [y, vy] = useAcceleration(vy0, -g)

  return [x, y, vx0, vy, vx0, vy0];
};
