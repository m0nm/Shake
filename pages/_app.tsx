import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/custom.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { initFirebase } from "../config/initFirebase";
import { getAuth } from "firebase/auth";

import Toasts from "../components/Toasts/Toasts";

// firebase
export const firebase = initFirebase();
export const auth = getAuth(firebase);

function MyApp({ Component, pageProps }: AppProps) {
  // react query
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* notification */}
        <Toasts />

        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
