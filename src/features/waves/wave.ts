export interface Wave {
  readonly id: string;
  readonly rootId: string;
  readonly parentId?: string;

  readonly generation: number;
  readonly radius: number;

  readonly x: number;
  readonly y: number;

  readonly dead: boolean;
  readonly children: readonly string[];
}

export type DenormalizedWave = Wave & {
  readonly children: readonly DenormalizedWave[];
};
