import clsx from "clsx";
import { useState } from "react";
import { Ceil } from "../components/app/Ceil";
import { Circle } from "../components/ui/Circle";
import { Line } from "../components/ui/Line";
import { Rect } from "../components/ui/Rect";
import { useGravitationalAcceleration } from "../contexts/GravitationalField";
import { useAcceleration } from "../hooks/useAcceleration";

const RECT_HEIGHT = 30;
const RECT_INIT_POS = 200;

const MOVABLE_PULLEY_SIZE = 100;
const FIXED_PULLEY_SIZE = 100;

const MovablePulley = () => {
  const [m1, setM1] = useState(10);
  const [m2, setM2] = useState(10);

  const [g] = useGravitationalAcceleration();
  const [y1_] = useAcceleration(
    0,
    ((2 * (m1 - 2 * m2)) / (4 * m2 + m1)) * g,
    -RECT_INIT_POS
  );

  const y1 = Math.max(y1_, -500);

  return (
    <div>
      <div
        className={clsx("absolute", "border", "border-gray-500", "bg-white")}
      >
        <input
          value={m1}
          placeholder="M1"
          onChange={(e) => setM1(Number(e.target.value))}
        />
        <input
          value={m2}
          placeholder="M2"
          onChange={(e) => setM2(Number(e.target.value))}
        />
      </div>

      <Ceil>
        <Line x={100} height={100} />
        <Circle x={50} y={50} size={MOVABLE_PULLEY_SIZE} />

        <Line x={50 + MOVABLE_PULLEY_SIZE} y={100} height={100 + y1 + RECT_INIT_POS} />

        <Line
          x={50 + MOVABLE_PULLEY_SIZE + FIXED_PULLEY_SIZE}
          y={0}
          height={200}
        />

        <Circle
          x={50 + MOVABLE_PULLEY_SIZE}
          y={150}
          size={FIXED_PULLEY_SIZE}
        />

        <Line x={50} y={100} height={Math.abs(y1) - RECT_INIT_POS + 100} />
        <Rect height={RECT_HEIGHT} y={y1} x={25} />
      </Ceil>
    </div>
  );
};

export default MovablePulley;
