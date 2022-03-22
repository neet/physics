import { useFreeFall } from "./useFreeFall";
import { useLinearMotion } from "./useLinearMotion";

export const useHorizontalLaunch = (vx0: number) => {
  const x = useLinearMotion(vx0);
  const [y, vy] = useFreeFall();
  return [x, y, vy];
};
