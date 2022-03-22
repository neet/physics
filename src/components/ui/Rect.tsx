import clsx from "clsx";
import { ReactNode } from "react";

export interface RectProps {
  readonly className?: string;
  readonly children?: ReactNode;
  readonly x?: number;
  readonly y?: number;
  readonly height?: number;
}

export const Rect = (props: RectProps) => {
  const { className, children, height, x = 0, y = 0 } = props;

  return (
    <div
      className={clsx(
        "absolute",
        "top-0",
        "left-0",
        "w-16",
        "h-16",
        "border",
        "border-gray-500",
        "shadow-sm",
        className
      )}
      style={{
        height,
        transform: `translate(${x}px, ${-y}px)`,
      }}
    >
      {children}
    </div>
  );
};
