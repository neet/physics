/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { castDraft } from "immer";

import type { Wave } from "./wave";

export type WavesState = Readonly<Record<string, Wave | undefined>>;

const w1: Wave = {
  id: "1",
  rootId: "1",

  generation: 0,
  radius: 8,

  x: 0,
  y: 0,

  dead: false,
  children: [],
};

export const initialState: WavesState = { w1: w1 };

export const wavesSlice = createSlice({
  name: "wavesSlice",
  initialState,
  reducers: {
    createWave(state, action: Readonly<PayloadAction<{ wave: Wave }>>): void {
      const { wave } = action.payload;
      state[wave.id] = castDraft(wave);
    },

    killWave(state, action: Readonly<PayloadAction<{ id: string }>>): void {
      const { id } = action.payload;
      const wave = state[id];
      if (wave == null) {
        throw new Error(`No wave found with id ${id}`);
      }

      wave.dead = true;
    },
  },
});

export default wavesSlice.reducer;
export const { killWave, createWave } = wavesSlice.actions;
