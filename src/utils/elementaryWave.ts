export interface Vector {
  readonly x: number;
  readonly y: number;
}

export interface CreateVectorParams {
  x: number;
  y: number;
}

export const createVector = (params: CreateVectorParams): Vector =>
  Object.freeze({ x: params.x, y: params.y });

// ---

export class ElementaryWaveProps {
  readonly id: string;
  readonly parentId?: string;

  readonly radius: number;
  readonly position: Vector;
  readonly index: number;
  readonly generation: number;

  readonly dead?: boolean;
  readonly children?: readonly ElementaryWave[];
}

export class ElementaryWave {
  constructor(private readonly _props: ElementaryWaveProps) {}

  get id(): string {
    return this._props.id;
  }

  get parentId(): string | null {
    return this._props.parentId ?? null;
  }

  get index(): number {
    return this._props.index;
  }

  get radius(): number {
    return this._props.radius;
  }

  get position(): Vector {
    return this._props.position;
  }

  get generation(): number {
    return this._props.generation;
  }

  get dead(): boolean {
    return this._props.dead ?? false;
  }

  get children(): readonly ElementaryWave[] {
    return this._props.children ?? [];
  }

  kill() {
    return new ElementaryWave({ ...this._props, dead: true });
  }

  produce(count: number): ElementaryWave {
    if (this.dead) {
      return this;
    }

    if (this.generation >= 10) {
      return this;
    }

    const children = Array.from({ length: count }, (_, k) => k).map((k) => {
      const theta = (2 * Math.PI) / (count * (this.generation + 1));
      const x =
        (this.generation + 1) * (this.radius * 0.9) * Math.cos(k * theta);
      const y =
        (this.generation + 1) * (this.radius * 0.9) * Math.sin(k * theta);

      return new ElementaryWave({
        id: `${this.generation}--${k}`,
        parentId: this.id,
        index: k,
        radius: this.radius,
        position: createVector({ x, y }),
        generation: this.generation + 1,
      });
    });

    return new ElementaryWave({ ...this._props, children });
  }

  replace(childId: string, elementaryWave: ElementaryWave) {
    return new ElementaryWave({
      ...this._props,
      children: [...this._props.children]
        .filter((k) => k.id !== childId)
        .concat(elementaryWave),
    });
  }
}
