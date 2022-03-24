import { useGravitationalAcceleration } from "../../contexts/GravitationalField";
import { Arrow } from "../ui/Arrow";
import { Decoration } from "../ui/Decoration";
import { Box } from "../ui/Box";

export interface ObjProps {
  readonly height?: number;
  readonly width?: number;
  readonly mass?: number;
  readonly x?: number;
  readonly y?: number;
  readonly shape?: "circle" | "rect";

  readonly vLabel?: string;
  readonly weightLabel?: string;

  readonly showWeight?: boolean;
}

export const Obj = (props: ObjProps) => {
  const {
    height = 0,
    width = 0,
    x = 0,
    y = 0,
    mass = 0,
    vLabel = "",
    weightLabel,
    showWeight = false,
    shape,
  } = props;

  return (
    <Box shape={shape} height={height} width={width} x={x} y={y}>
      {weightLabel && <Decoration>{`\$${weightLabel}\$`}</Decoration>}

      {showWeight && (
        <Arrow
          x={width / 2}
          y={height / 2}
          norm={mass * 10 /* /g */}
          angle={Math.PI * (3 / 2)}
          label={`\$${weightLabel}g\$`}
          showDotAtBeginning
        />
      )}
    </Box>
  );
};
