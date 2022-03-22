import { useTime } from "../contexts/Time";

export const useAcceleration = (v0: number, a: number, x0 = 0) => {
  const [t] = useTime();
  const v = v0 + a * t;
  const x = x0 + v0 * t + 0.5 * a * t ** 2;
  return [x, v];
};
