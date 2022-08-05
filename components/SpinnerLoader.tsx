import React from "react";

export const SpinnerLoader = ({ overlay }: { overlay?: boolean }) => {
  return (
    <div
      className={`absolute z-40 top-0 left-0 w-full h-full grid place-items-center ${
        overlay ? "bg-overlay" : "bg-transparent"
      } `}
    >
      {/* spinner */}
      <div className="loadingio-spinner-ripple-ws3exx9ngs">
        <div className="ldio-8zy9x4p1een">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
