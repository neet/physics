import { NextPage } from "next";
import clsx from "clsx";
import { ElementaryWave } from "../components/app/ElementaryWave";
import {
  createVector,
  ElementaryWave as ElementaryWaveModel,
} from "../utils/elementaryWave";

const HuygensFresnelPrinciple: NextPage = () => {
  return (
    <div
      className={clsx(
        "flex",
        "items-center",
        "justify-center",
        "w-full",
        "h-full",
        "bg-black"
      )}
    >
      <div className={clsx("absolute", "w-0", "h-0")}>
        <ElementaryWave
          ratio={2}
          interval={1000}
          elementaryWave={
            new ElementaryWaveModel({
              id: "index",
              radius: 8,
              generation: 0,
              index: 0,
              position: createVector({ x: 0, y: 0 }),
            })
          }
          onUpdate={(k) => console.log(k)}
        />
      </div>
    </div>
  );
};

export default HuygensFresnelPrinciple;
