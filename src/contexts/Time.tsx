import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import { useRafLoop } from "react-use";

export interface Time {
  /** time in milliseconds */
  readonly time: number;
  readonly reset: () => void;
}

const TimeImpl = createContext<Time>({
  time: 0,
  reset: () => void {},
});

// ---

export interface TimeProviderProps {
  readonly children: ReactNode;
}

export const TimeProvider = (props: TimeProviderProps) => {
  const { children } = props;
  const [time, setValue] = useState(0);
  const [base, setBase] = useState(0);

  useRafLoop((t) => {
    setValue(t / 1000 - base);
  });

  const reset = useCallback(() => {
    setBase(performance.now() / 1000);
  }, [setBase]);

  return (
    <TimeImpl.Provider value={{ time, reset }}>{children}</TimeImpl.Provider>
  );
};

// ---

export type UseTimeResult = [time: number, reset: () => void];

export const useTime = (): UseTimeResult => {
  const time = useContext(TimeImpl);
  return [time.time, time.reset];
};
