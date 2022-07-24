import "../styles/globals.css";
import "../styles/custom.css";
import type { AppProps } from "next/app";

import { initFirebase } from "../config/initFirebase";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {initFirebase()}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
