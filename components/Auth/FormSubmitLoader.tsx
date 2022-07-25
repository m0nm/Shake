import React from "react";

export const FormSubmitLoader = () => {
  return (
    <div className="absolute z-40 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.12)] grid place-items-center">
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
