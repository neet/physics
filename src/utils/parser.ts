interface Base<T> {
  readonly type: T;
}

export type Tex = Base<"tex"> & {
  readonly value: string;
};

export type PlainText = Base<"plaintext"> & {
  readonly value: string;
};

export type Token = PlainText | Tex;

const TEX_PATTEN = /\$([^$]+?)\$/g;

export const parseDecoratedText = (
  input: string,
  tokens: Token[] = []
): Token[] => {
  const result = TEX_PATTEN.exec(input);

  if (result == null) {
    return tokens.concat({
      type: "plaintext",
      value: input,
    });
  }

  const [match, tex] = result;
  const index = result.index;

  return parseDecoratedText(
    input.substring(index + match.length),
    index === 0
      ? tokens.concat({
          type: "tex",
          value: tex,
        })
      : tokens.concat(
          {
            type: "plaintext",
            value: input.substring(0, index),
          },
          {
            type: "tex",
            value: tex,
          }
        )
  );
};
