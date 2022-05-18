export const useSimpleHarmonicMotion = (
  omega: number,
  amp: number,
  phi: number,
  t: number
) => {
  const x = amp * Math.sin(omega * t + phi);
  // ↓ dx/dt
  const v = omega * amp * Math.cos(omega * t + phi);
  // ↓ d^2x/dt^2
  const a = -1 * omega ** 2 * amp * Math.sin(omega * t + phi);

  return [x, v, a];
};
