import Router from "next/router";
import Image from "next/image";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/form_validation_schema";
import { styleInput } from "../../utils/form_input_classnames";

import { useAuthCreateUserWithEmailAndPassword } from "@react-query-firebase/auth";
import { auth } from "../../pages/_app";
import { useGoogleAuth } from "../../utils/form_google_auth";

import { SpinnerLoader } from "../SpinnerLoader";
import { toast } from "react-toastify";

import google from "../../public/asset/auth/google.svg";
import close from "../../public/asset/auth/close.svg";

type IForm = {
  handleDisplay: (value: "login" | "register" | "forget") => void;
  closeModal: () => void;
};

type IFields = {
  email: string;
  password: string;
  cpassword: string;
};

export const RegisterForm = ({ handleDisplay, closeModal }: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFields>({ resolver: yupResolver(registerSchema) });

  // email password register
  const mutation = useAuthCreateUserWithEmailAndPassword(auth, {
    onSuccess: () => {
      toast.success("Welcome to the family :)", {});
      Router.reload();
    },

    onError: (error) => {
      const message = error.message;

      if (message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Email already exist!");
      } else {
        console.log("error: ", error);
        toast.error("Something went wrong, Please try again");
      }
    },
  });

  // google auth
  const { handleGoogleAuth } = useGoogleAuth();

  // form submit
  const useSubmit: SubmitHandler<IFields> = ({ email, password }) => {
    mutation.mutate({
      email,
      password,
    });
  };

  return (
    <div className="relative w-full md:w-1/2 h-full p-3 md:p-8 grid place-items-center">
      {/* form loading after submit */}
      {mutation.isLoading && <SpinnerLoader overlay />}

      {/* close */}
      <div
        onClick={() => closeModal()}
        className="absolute top-4 left-4 cursor-pointer"
      >
        <Image src={close} alt="back" width={32} height={32} />
      </div>

      <h1 className="font-extrabold text-2xl md:text-3xl">
        Sign up a new account
      </h1>

      {/* google auth */}
      <button
        onClick={handleGoogleAuth}
        className="w-full rounded-lg px-4 py-1 shadow-md flex justify-center items-center text-black"
      >
        <Image src={google} alt="" width={18} height={18} />
        <span className="ml-3">Sign up with Google</span>
      </button>

      <p className="text-slate-400">Or continue with</p>

      {/* fields */}
      <form onSubmit={handleSubmit(useSubmit)} className="w-full">
        {/* email */}
        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="text-neutral text-sm">
            Email address
          </label>

          <p className="text-error text-sm">{errors.email?.message}</p>

          <input
            className={styleInput(errors.email)}
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email")}
          />
        </div>

        {/* password */}
        <div className="flex flex-col mb-3">
          <label htmlFor="password" className="text-neutral text-sm">
            Password
          </label>

          <p className="text-error text-sm">{errors.password?.message}</p>

          <input
            className={styleInput(errors.password)}
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("password")}
          />
        </div>

        {/* password confirm*/}
        <div className="flex flex-col mb-3">
          <label htmlFor="passwordConfirm" className="text-neutral text-sm">
            Confirm your password
          </label>

          <p className="text-error text-sm">{errors.cpassword?.message}</p>

          <input
            className={styleInput(errors.cpassword)}
            type="password"
            id="passwordConfirm"
            placeholder="Confirm your password"
            {...register("cpassword")}
          />
        </div>

        {/* submit */}
        <button className="btn btn-primary text-white w-full fw-semibold">
          Sign Up
        </button>
      </form>

      <p className="cursor-pointer" onClick={() => handleDisplay("login")}>
        Already a member? Sign In
      </p>
    </div>
  );
};
