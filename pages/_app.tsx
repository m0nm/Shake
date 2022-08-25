import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/custom.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { initFirebase } from "../config/initFirebase";
import { getAuth } from "firebase/auth";

import Toasts from "../components/Toasts/Toasts";
import { useEffect, useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";

// firebase
export const firebase = initFirebase();
export const auth = getAuth(firebase);

function MyApp({ Component, pageProps }: AppProps) {
  // react query
  const queryClient = new QueryClient();

  // load page
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* notification */}
        <Toasts />

        {loaded ? <Component {...pageProps} /> : <LoadingScreen />}
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
