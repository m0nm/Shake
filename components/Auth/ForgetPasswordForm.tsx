import Image from "next/image";
import React from "react";

type IForm = {
  handleDisplay: (value: "login" | "register" | "forget") => void;
};

import arrowLeft from "../../public/asset/auth/arrow-left.svg";

export const ForgetPasswordForm = ({ handleDisplay }: IForm) => {
  return (
    <form className="relative w-full md:w-1/2 h-full p-3 md:p-8 grid place-items-center">
      {/*arrow back  */}
      <div
        onClick={() => handleDisplay("login")}
        className="absolute top-4 left-4 cursor-pointer"
      >
        <Image src={arrowLeft} alt="back" width={32} height={32} />
      </div>

      <div className="w-full">
        <h1 className="font-extrabold text-center text-2xl md:text-3xl mb-4">
          Forgot Your Password?
        </h1>

        <p className="text-lg font-normal text-center mb-10">
          Don&apos;t worry, Enter your email
        </p>

        {/* email and password */}
        {/* email */}
        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="text-neutral text-sm">
            Email address
          </label>
          <input
            className="px-2.5 py-1 mt-2 font-medium rounded border-2 border-slate-200 focus:border-slate-400 outline-none"
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        {/* submit */}
        <button className="btn btn-primary mt-4 text-white w-full fw-semibold">
          Reset Password
        </button>
      </div>
    </form>
  );
};
