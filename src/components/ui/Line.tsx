import clsx from "clsx";

export interface LineProps {
  readonly x?: number;
  readonly y?: number;
  readonly height?: number;
}

export const Line = (props: LineProps) => {
  const { x = 0, y = 0, height = 10 } = props;

  return (
    <div
      className={clsx(
        "absolute",
        "top-0",
        "left-0",
        "w-[1px]",
        "bg-gray-500",
        "shadow-sm"
      )}
      style={{
        height,
        transform: `translate(${x}px, ${y}px)`,
      }}
    />
  );
};
