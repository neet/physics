import { batch } from "react-redux";

import type { AppThunk } from "../store";
import { selectWaveOrThrow } from "./waveSelectors";
import { createWave } from "./wavesSlice";

export const produceWave =
  (waveId: string, count = 2): AppThunk =>
  async (dispatch, getState): Promise<void> => {
    const state = getState();
    const wave = selectWaveOrThrow(state, waveId);
    const root = selectWaveOrThrow(state, wave.rootId);

    const theta = Math.asin(
      Math.hypot(wave.x - root.x, wave.y - root.y) / (wave.y - root.y)
    );

    // g=0のときやばい
    const generation = wave.generation + 1;
    const x = wave.radius * generation * Math.cos(theta);
    const y = wave.radius * generation * Math.sin(theta);

    batch(() => {
      for (let k = 0; k <= count; k++) {
        dispatch(
          createWave({
            wave: {
              id: `${generation}-${k}`,
              rootId: wave.rootId,
              parentId: wave.id,
              generation,
              radius: wave.radius,
              x,
              y,
              dead: false,
              children: [],
            },
          })
        );
      }
    });

    await Promise.resolve();
  };
