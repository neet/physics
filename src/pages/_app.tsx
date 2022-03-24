import "../styles.css";
import "katex/dist/katex.min.css";

import { AppProps } from "next/app";
import { GravitationalFieldProvider } from "../contexts/GravitationalField";
import { TimeProvider } from "../contexts/Time";

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;

  return (
    <TimeProvider>
      <GravitationalFieldProvider acceleration={100}>
        <Component {...pageProps} />
      </GravitationalFieldProvider>
    </TimeProvider>
  );
};

export default App;
