import clsx from "clsx";

export interface CircleProps {
  readonly x?: number;
  readonly y?: number;
  readonly size?: number;
  readonly className?: string;
}

export const Circle = (props: CircleProps) => {
  const { x = 0, y = 0, size, className } = props;

  return (
    <div
      className={clsx(
        "absolute",
        "rounded-full",
        "border",
        "border-gray-500",
        "shadow-sm",
        className
      )}
      style={{
        width: size,
        height: size,
        transform: `translate(${x}px, ${y}px)`,
      }}
    />
  );
};
