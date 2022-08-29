import clsx from "clsx";
import { useMemo } from "react";
import { meter } from "../../../utils/meter";
import { Arrow } from "../Arrow";
import { Electron } from "../Electron";

export interface ElectricalFluxProps {
  readonly valence?: number;
}

export const ElectricalFlux = (props: ElectricalFluxProps) => {
  const { valence } = props;

  const N = valence / meter ** 2;

  const range = useMemo(
    () => Array.from({ length: Math.round(N) }, (_, k) => k),
    [N]
  );
  console.log(Math.round(N));

  return (
    <div
      className={clsx(
        "flex",
        "items-center",
        "justify-center",
        "h-[500px]",
        "w-[500px]"
      )}
    >
      <div className="relative">
        {range.map((k) => (
          <Arrow norm={100} angle={((2 * Math.PI) / N) * k} />
        ))}

        <Electron className="relative" valence={valence} />
      </div>
    </div>
  );
};
