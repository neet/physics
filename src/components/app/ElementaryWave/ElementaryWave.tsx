import { useState, useCallback, useEffect, memo } from "react";
import clsx from "clsx";
import { ElementaryWave as ElementaryWaveModel } from "../../../utils/elementaryWave";
import { useTimeoutFn } from "react-use";

const RAINBOW = [
  "#CC99FF",
  "#A9D1F7",
  "#B4F0A7",
  "#FFFFBF",
  "#FFDFBE",
  "#FFB1B0",
];

export interface ElementaryWaveProps {
  readonly elementaryWave: ElementaryWaveModel;
  readonly ratio?: number;
  readonly interval?: number;
  readonly onUpdate?: (newState: ElementaryWaveModel) => void;
}

const ElementaryWavePure = (props: ElementaryWaveProps) => {
  const { ratio = 2, interval = 1000, onUpdate } = props;

  const [elementaryWave, setElementaryWave] = useState(props.elementaryWave);

  const color = RAINBOW[elementaryWave.generation % RAINBOW.length];

  const kill = useCallback(() => {
    setElementaryWave((e) => e.kill());
  }, [setElementaryWave]);

  const updateChild = useCallback(
    (c) => {
      setElementaryWave((e) => e.replace(c.id, c));
    },
    [setElementaryWave]
  );

  useTimeoutFn(() => {
    setElementaryWave((e) => e.produce(ratio));
  }, interval);

  useEffect(() => {
    console.log("react received", elementaryWave.children);
    onUpdate?.(elementaryWave);
  }, [elementaryWave]);

  return (
    <>
      <div
        onClick={kill}
        className={clsx("absolute", "border", "rounded-full")}
        style={{
          top: elementaryWave.position.x,
          left: elementaryWave.position.y,
          width: elementaryWave.radius * 2,
          height: elementaryWave.radius * 2,
          borderColor: color,
        }}
      />

      {elementaryWave.children.map((e) => (
        <ElementaryWave
          key={e.id}
          elementaryWave={e}
          interval={interval}
          ratio={ratio}
          onUpdate={updateChild}
        />
      ))}
    </>
  );
};

export const ElementaryWave = memo(ElementaryWavePure);
