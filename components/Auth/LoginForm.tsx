import Image from "next/image";

import google from "../../public/asset/auth/google.svg";

export const LoginForm = () => {
  return (
    <form className="w-full md:w-1/2 h-full p-3 md:p-8 grid place-items-center">
      <h1 className="font-extrabold text-2xl md:text-3xl">
        Sign in to your account
      </h1>

      <button className="rounded-lg px-4 py-1 shadow-md flex items-center text-black">
        <Image src={google} alt="" width={18} height={18} />
        <span className="ml-3">Sign in with Google</span>
      </button>

      <p className="text-slate-400">Or continue with</p>

      {/* email and password */}
      <div className="w-full">
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

        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="text-neutral text-sm">
            Password
          </label>
          <input
            className="px-2.5 py-1 mt-2 rounded border-2 border-slate-200 focus:border-slate-400 outline-none"
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
      </div>

      {/* remember me and forgot password */}
      <div className="w-full flex justify-between items-center">
        <div>
          <input type="checkbox" id="" />
          <span className="ml-2 text-md font-light">Remember me</span>
        </div>

        <a href="" className="text-md font-light underline">
          Forget your password?
        </a>
      </div>

      {/* submit */}
      <button className="btn btn-primary text-white w-full fw-semibold">
        Sign In
      </button>

      <a href="">Not a member? Sign Up</a>
    </form>
  );
};
