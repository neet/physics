import { nonNull } from "../../utils/nonNull";
import type { RootState } from "../store";
import type { Wave } from "./wave";

export const selectWave = (state: RootState, id: string): Wave | undefined => {
  return state.waves[id];
};

export const selectWaveOrThrow = nonNull(selectWave);

export const selectWaves = (
  state: RootState,
  ids: readonly string[]
): Wave[] => {
  return ids.map((id) => selectWaveOrThrow(state, id));
};

export const selectChildren = (state: RootState, id: string): Wave[] => {
  const { children } = selectWaveOrThrow(state, id);
  return selectWaves(state, children);
};
