import { useCallback, useMemo } from "react";
import { shallowEqual } from "react-redux";

import { killWave } from "../features/waves";
import { produceWave } from "../features/waves/produce";
import type { Wave } from "../features/waves/wave";
import { selectWaveOrThrow } from "../features/waves/waveSelectors";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

export interface UseWaveResult {
  readonly wave: Wave;
  readonly kill: () => void;
}

export const useWave = (id: string): UseWaveResult => {
  const dispatch = useAppDispatch();
  const wave = useAppSelector((s) => selectWaveOrThrow(s, id), shallowEqual);

  const kill = useCallback(() => {
    dispatch(killWave({ id }));
  }, [id, dispatch]);

  // const produce = useCallback(() => {
  //   dispatch(produceWave(wave.id));
  // }, [id, dispatch]);

  return useMemo(() => ({ wave, kill }), [kill, wave]);
};
