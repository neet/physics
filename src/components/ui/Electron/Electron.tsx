import clsx from "clsx";

export interface ElectronProps {
  readonly valence?: number;
  readonly className?: string;
}

export const Electron = (props: ElectronProps) => {
  const { valence = -1, className } = props;

  return (
    <div
      className={clsx(
        "flex",
        "items-center",
        "justify-center",
        "w-4",
        "h-4",
        valence < 0 ? "bg-blue-500" : "bg-red-500",
        "rounded-full",
        className
      )}
    >
      <span
        className={clsx("text-sm", "leading-none", "text-center", "text-white")}
      >
        {valence.toString().replace(/^-1$/, "-").replace(/^1$/, "+")}
      </span>
    </div>
  );
};
