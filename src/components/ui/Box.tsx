import clsx from "clsx";
import { ReactNode } from "react";

export interface BoxProps {
  readonly className?: string;
  readonly children?: ReactNode;
  readonly x?: number;
  readonly y?: number;
  readonly width?: number;
  readonly height?: number;
  readonly shape?: "rect" | "circle";
}

export const Box = (props: BoxProps) => {
  const {
    className,
    children,
    height,
    width,
    x = 0,
    y = 0,
    shape = "rect",
  } = props;

  return (
    <div
      className={clsx(
        "absolute",
        "top-0",
        "left-0",
        "border",
        "border-gray-500",
        "bg-white",
        "shadow-sm",
        shape === "circle" && "rounded-full",
        className
      )}
      style={{
        height,
        width,
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {children}
    </div>
  );
};
