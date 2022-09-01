import { useGravitationalAcceleration } from "../contexts/GravitationalField";
import { useAcceleration } from "./useAcceleration";

export type UseFreeFallResult = [y: number, vy: number];

export const useFreeFall = (y0 = 0): UseFreeFallResult => {
  const [g] = useGravitationalAcceleration();
  const [y, vy] = useAcceleration(0, g, y0);

  return [y, vy];
};
