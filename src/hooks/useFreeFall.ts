import { useGravitationalAcceleration } from "../contexts/GravitationalField";
import { useAcceleration } from "./useAcceleration";

export const useFreeFall = (y0 = 0) => {
  const [g] = useGravitationalAcceleration();
  const [y, vy] = useAcceleration(0, g, y0);

  return [y, vy];
};
