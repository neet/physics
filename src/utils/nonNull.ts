export const nonNull =
  <T extends unknown[], U>(
    f: (...args: T) => U | null | undefined,
    message?: string
  ) =>
  (...args: T): U => {
    const r = f(...args);

    if (r == null) {
      throw new Error(message ?? "Expected non-null but got null");
    }

    return r;
  };
