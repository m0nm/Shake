import React from "react";
import { SpinnerLoader } from "./SpinnerLoader";

export const LoadingScreen = () => {
  return (
    <div className="absolute top-0 z-50 grid place-items-center w-full h-screen bg-white">
      <SpinnerLoader />
    </div>
  );
};
