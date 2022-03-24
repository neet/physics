import React from "react";
import { Decoration } from "./Decoration";

export interface ArrowProps {
  readonly x?: number;
  readonly y?: number;
  readonly norm?: number;
  readonly angle?: number;
  readonly style?: React.CSSProperties;
  readonly label?: string;
  readonly showDotAtBeginning?: boolean;
}

export const Arrow = (props: ArrowProps) => {
  const {
    x = 0,
    y = 0,
    norm = 0,
    angle = 0,
    label,
    showDotAtBeginning = false,
  } = props;

  return (
    <div
      className="absolute top-0 left-0 h-[1px] bg-black text-center"
      style={{
        width: norm,
        transformOrigin: "top left",
        transform: `translate(${x}px, ${y}px) rotate(${-angle}rad)`,
      }}
    >
      <div
        className="absolute top-0 right-0 h-[8px] w-[8px] border-t border-r border-black"
        style={{ transform: `translate(0, -4px) rotate(45deg)` }}
      />

      <Decoration>{label}</Decoration>

      {showDotAtBeginning && (
        <div
          className="absolute top-0 left-0 h-[8px] w-[8px] rounded-full bg-black"
          style={{ transform: `translate(0, -4px)` }}
        />
      )}
    </div>
  );
};
