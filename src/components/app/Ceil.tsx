import clsx from "clsx";
import { ReactNode } from "react";

export interface CeilProps {
  readonly children?: ReactNode;
  readonly className?: string;
}

export const Ceil = (props: CeilProps) => {
  const { children, className } = props;

  return (
    <div className="w-full">
      <div
        className={clsx(
          "h-8",
          "w-full",
          "border-b",
          "border-gray-300",
          "bg-white"
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");`,
        }}
      />

      <div className="relative">{children}</div>
    </div>
  );
};
