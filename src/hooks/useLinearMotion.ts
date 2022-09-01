import { useTime } from "../contexts/Time";

// 等速直線運動
export const useLinearMotion = (v: number): number => {
  const [t] = useTime();
  const x = v * t;
  return x;
};
