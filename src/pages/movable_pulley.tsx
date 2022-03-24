import clsx from "clsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Ceil } from "../components/app/Ceil";
import { Obj } from "../components/app/Obj";
import { Arrow } from "../components/ui/Arrow";
import { Decoration } from "../components/ui/Decoration";
import { Line } from "../components/ui/Line";
import { useGravitationalAcceleration } from "../contexts/GravitationalField";
import { useTime } from "../contexts/Time";
import { useAcceleration } from "../hooks/useAcceleration";

const RECT_HEIGHT = 30;

const MOVABLE_PULLEY_SIZE = 100;
const FIXED_PULLEY_SIZE = 100;

const MAX_STRING_LENGTH = 500;

const TO_CEIL = 50;

const initialMovablePulleyToCeil = TO_CEIL + MOVABLE_PULLEY_SIZE / 2;
// 紐の長さ - 動滑車から天井への最短距離
const freeRange = MAX_STRING_LENGTH - initialMovablePulleyToCeil;

const deriveLsFromY1 = (y1: number) => {
  // 物体から動滑車への距離
  const objectToMovablePulley = Math.min(Math.max(y1, 0), freeRange);

  const rest = freeRange - objectToMovablePulley;

  return {
    objectToMovablePulley,
    movablePulleyToCeil: rest / 2 + initialMovablePulleyToCeil,
    movablePulleyToFixedPulley: rest / 2,
  };
};

interface FormValue {
  g: number;
  objectMass: number;
  pulleyMass: number;
}

const MovablePulley = () => {
  const { register, watch } = useForm<FormValue>({
    defaultValues: {
      objectMass: 10,
      pulleyMass: 20,
    },
  });

  const { objectMass, pulleyMass } = watch();

  const [initialObjectPos] = useState(100);

  const [, reset] = useTime();

  useEffect(() => {
    reset();
  }, [objectMass, pulleyMass]);

  const [g, setG] = useGravitationalAcceleration();

  // prettier-ignore
  const a = (
    (2 * (pulleyMass - 2 * objectMass) * g)
    / //-----------------------
    (4 * objectMass + pulleyMass)
  );

  const [y1_] = useAcceleration(0, -a, initialObjectPos);

  const y1 = Math.max(y1_, -500);
  const params = deriveLsFromY1(y1);
  const movablePulleyY = (MAX_STRING_LENGTH - params.objectToMovablePulley) / 2;

  return (
    <div>
      <form className="absolute bottom-0 right-0 border border-gray-500 p-8">
        <label className="block">
          <Decoration>{"$g$"}</Decoration>
          <input
            type="number"
            className="border-b border-gray-300 text-right"
            value={g}
            onChange={(e) => setG(Number(e.target.value))}
          />
          <Decoration>{"$\\text{px}/\\text{s}^2$"}</Decoration>
        </label>

        <label className="block">
          <Decoration>{"$m$"}</Decoration>
          <input
            {...register("objectMass")}
            type="number"
            className="border-b border-gray-300 text-right"
          />
          <Decoration>{"$\\text{g}$"}</Decoration>
        </label>

        <label className="block">
          <Decoration>{"$M$"}</Decoration>
          <input
            {...register("pulleyMass")}
            type="number"
            className="border-b border-gray-300 text-right"
          />

          <Decoration>{"$\\text{g}$"}</Decoration>
        </label>
      </form>

      <Ceil>
        <Line x={100} height={TO_CEIL} />
        <Obj
          x={50}
          y={TO_CEIL}
          width={FIXED_PULLEY_SIZE}
          height={FIXED_PULLEY_SIZE}
          shape="circle"
        />

        <div
          className="absolute"
          style={{ marginTop: TO_CEIL + FIXED_PULLEY_SIZE / 2 }}
        >
          {/* FIXED PULLEY */}
          <Line x={50} height={params.objectToMovablePulley} />

          <Obj
            height={RECT_HEIGHT}
            width={30}
            x={35}
            y={params.objectToMovablePulley}
            weightLabel="m"
            mass={objectMass}
            showWeight
          />

          {/* movable -> fixed */}
          <Line
            x={50 + MOVABLE_PULLEY_SIZE}
            height={params.movablePulleyToFixedPulley}
          />
        </div>

        <Obj
          x={50 + MOVABLE_PULLEY_SIZE}
          y={movablePulleyY}
          width={MOVABLE_PULLEY_SIZE}
          height={MOVABLE_PULLEY_SIZE}
          mass={pulleyMass}
          weightLabel="M"
          shape="circle"
          showWeight
        />

        {/* movable -> ceil */}
        <Line
          x={50 + MOVABLE_PULLEY_SIZE + FIXED_PULLEY_SIZE}
          height={params.movablePulleyToCeil}
        />
      </Ceil>
    </div>
  );
};

export default MovablePulley;
