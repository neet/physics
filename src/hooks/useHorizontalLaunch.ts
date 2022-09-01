import { useFreeFall } from "./useFreeFall";
import { useLinearMotion } from "./useLinearMotion";

export type UseHorizontalLaunchResult = [x: number, y: number, vy: number];

export const useHorizontalLaunch = (vx0: number): UseHorizontalLaunchResult => {
  const x = useLinearMotion(vx0);
  const [y, vy] = useFreeFall();
  return [x, y, vy];
};
