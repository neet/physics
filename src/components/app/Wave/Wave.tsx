import clsx from "clsx";
import { memo } from "react";

import { useWave } from "../../../hooks/wave";

const RAINBOW = [
  "#CC99FF",
  "#A9D1F7",
  "#B4F0A7",
  "#FFFFBF",
  "#FFDFBE",
  "#FFB1B0",
];

export interface WaveProps {
  readonly waveId: string;
}

const WavePure = (props: WaveProps): JSX.Element | null => {
  const { waveId } = props;

  const { wave, kill } = useWave(waveId);

  if (wave.dead) {
    return null;
  }

  const color = RAINBOW[wave.generation % RAINBOW.length];
  return (
    <button
      onClick={kill}
      className={clsx("absolute", "border", "rounded-full")}
      style={{
        top: wave.x,
        left: wave.y,
        width: wave.radius * 2,
        height: wave.radius * 2,
        borderColor: color,
      }}
    />
  );
};

export const Wave = memo(WavePure);
