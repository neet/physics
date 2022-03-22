import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default App;
