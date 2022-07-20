import Image from "next/image";

import google from "../../public/asset/auth/google.svg";
import close from "../../public/asset/auth/close.svg";

type IForm = {
  handleDisplay: (value: "login" | "register" | "forget") => void;
};

export const RegisterForm = ({ handleDisplay }: IForm) => {
  return (
    <form className="relative w-full md:w-1/2 h-full p-3 md:p-8 grid place-items-center">
      {/* close */}
      <div
        onClick={() => handleDisplay("login")}
        className="absolute top-4 left-4 cursor-pointer"
      >
        <Image src={close} alt="back" width={32} height={32} />
      </div>

      <h1 className="font-extrabold text-2xl md:text-3xl">
        Sign up a new account
      </h1>

      <button className="w-full rounded-lg px-4 py-1 shadow-md flex justify-center items-center text-black">
        <Image src={google} alt="" width={18} height={18} />
        <span className="ml-3">Sign up with Google</span>
      </button>

      <p className="text-slate-400">Or continue with</p>

      {/* email and password */}
      <div className="w-full">
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

        {/* password */}
        <div className="flex flex-col mb-3">
          <label htmlFor="password" className="text-neutral text-sm">
            Password
          </label>
          <input
            className="px-2.5 py-1 mt-2 rounded border-2 border-slate-200 focus:border-slate-400 outline-none"
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        {/* password confirm*/}
        <div className="flex flex-col mb-3">
          <label htmlFor="passwordConfirm" className="text-neutral text-sm">
            Confirm your password
          </label>
          <input
            className="px-2.5 py-1 mt-2 rounded border-2 border-slate-200 focus:border-slate-400 outline-none"
            type="password"
            id="passwordConfirm"
            placeholder="Confirm your password"
          />
        </div>
      </div>

      {/* submit */}
      <button className="btn btn-primary text-white w-full fw-semibold">
        Sign Up
      </button>

      <p className="cursor-pointer" onClick={() => handleDisplay("login")}>
        Already a member? Sign In
      </p>
    </form>
  );
};
