import Image from "next/image";
import React, { FormEvent, useRef } from "react";

import { useAuthSendPasswordResetEmail } from "@react-query-firebase/auth";
import { auth } from "../../pages/_app";

import arrowLeft from "../../public/asset/auth/arrow-left.svg";
import { SpinnerLoader } from "../SpinnerLoader";
import { toast } from "react-toastify";

type IForm = {
  handleDisplay: (value: "login" | "register" | "forget") => void;
};

export const ForgetPasswordForm = ({ handleDisplay }: IForm) => {
  // email input value
  const ref = useRef<HTMLInputElement>(null);

  const mutation = useAuthSendPasswordResetEmail(auth, {
    onSuccess: () => {
      toast.success("A reset link has been sent, Check your email");
    },

    onError: (error) => {
      if (error.message === "Firebase: Error (auth/user-not-found).")
        toast.error("User not found!");
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const email = ref.current?.value || "";

    mutation.mutate({ email });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full md:w-1/2 h-full p-3 md:p-8 grid place-items-center"
    >
      {mutation.isLoading && <SpinnerLoader />}

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
            ref={ref}
            className="px-2.5 py-1 mt-2 font-medium rounded border-2 border-slate-200 focus:border-slate-400 outline-none"
            type="email"
            required
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
