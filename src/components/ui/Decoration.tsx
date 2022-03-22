import TeX from "@matejmazur/react-katex";
import { useMemo } from "react";

import { parseDecoratedText } from "../../utils/parser";

export interface DecorationProps {
  readonly children: string;
}

export const Decoration = (props: DecorationProps): JSX.Element => {
  const { children } = props;
  const ast = useMemo(() => parseDecoratedText(children), [children]);

  return (
    <>
      {ast.map((node, i) => {
        if (node.type === "plaintext") {
          return <span key={i}>{node.value}</span>;
        }

        if (node.type === "tex") {
          return <TeX key={i} math={node.value} />;
        }

        throw new Error("Unexpected node type");
      })}
    </>
  );
};
