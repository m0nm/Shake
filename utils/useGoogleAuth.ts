import Router from "next/router";

import { useAuthSignInWithPopup } from "@react-query-firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../pages/_app";

export const useGoogleAuth = () => {
  const mutation = useAuthSignInWithPopup(auth, {
    onSuccess: () => Router.reload(),
  });

  const handleGoogleAuth = () => {
    mutation.mutate({
      provider: new GoogleAuthProvider(),
    });
  };

  return { handleGoogleAuth };
};
