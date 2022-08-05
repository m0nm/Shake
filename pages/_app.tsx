import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/custom.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { initFirebase } from "../config/initFirebase";
import { getAuth } from "firebase/auth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={1000}
          hideProgressBar
          closeOnClick={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          icon={false}
          style={{ zIndex: 100 }}
        />

        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
