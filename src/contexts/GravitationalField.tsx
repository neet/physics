import { createContext, ReactNode, useContext, useState } from "react";

export interface GravitationalField {
  readonly setAcceleration: (g: number) => void;
  readonly acceleration: number;
}

const GravitationalFieldImpl = createContext<GravitationalField>({
  setAcceleration: () => void {},
  acceleration: 9.8,
});

// ---

export interface GravitationalFieldProviderProps {
  readonly acceleration: number;
  readonly children: ReactNode;
}

export const GravitationalFieldProvider = (
  props: GravitationalFieldProviderProps
) => {
  const { children } = props;

  const [acceleration, setAcceleration] = useState(props.acceleration);

  return (
    <GravitationalFieldImpl.Provider value={{ acceleration, setAcceleration }}>
      {children}
    </GravitationalFieldImpl.Provider>
  );
};

// ---

export const useGravitationalAcceleration = () => {
  const gravitationalField = useContext(GravitationalFieldImpl);

  return [
    gravitationalField.acceleration,
    gravitationalField.setAcceleration,
  ] as const;
};
