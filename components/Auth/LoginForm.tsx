import Router from "next/router";
import Image from "next/image";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/form_validation_schema";
import { styleInput } from "../../utils/form_input_classnames";

import { useAuthSignInWithEmailAndPassword } from "@react-query-firebase/auth";
import { auth } from "../../pages/_app";
import { useGoogleAuth } from "../../utils/form_google_auth";

import { toast } from "react-toastify";
import { SpinnerLoader } from "../SpinnerLoader";

import google from "../../public/asset/auth/google.svg";
import close from "../../public/asset/auth/close.svg";

type IForm = {
  handleDisplay: (value: "login" | "register" | "forget") => void;
  closeModal: () => void;
};

type IFields = {
  email: string;
  password: string;
};

export const LoginForm = ({ handleDisplay, closeModal }: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFields>({ resolver: yupResolver(loginSchema) });

  // email and password login
  const mutation = useAuthSignInWithEmailAndPassword(auth, {
    onSuccess: () => {
      toast.success("Welcome back!", {});
      Router.reload();
    },

    onError: (error) => {
      const { message } = error;

      switch (message) {
        case "Firebase: Error (auth/user-not-found).":
          toast.error("User not found!");
          break;

        case "Firebase: Error (auth/wrong-password).":
          toast.error("Invalid credentials!");
          break;

        default:
          toast.error("Something went wrong, Please try again");
          break;
      }
    },
  });

  // google auth
  const { handleGoogleAuth } = useGoogleAuth();

  // submit handler
  const useSubmit: SubmitHandler<IFields> = ({ email, password }) => {
    mutation.mutate({
      email,
      password,
    });
  };

  return (
    <div className="relative w-full md:w-1/2 h-full p-3 md:p-8 grid place-items-center">
      {/* form submit loading */}
      {mutation.isLoading && <SpinnerLoader overlay />}

      {/* close */}
      <div
        onClick={() => closeModal()}
        className="absolute top-4 left-4 cursor-pointer"
      >
        <Image src={close} alt="back" width={32} height={32} />
      </div>

      <h1 className="font-extrabold text-2xl md:text-3xl">
        Sign in to your account
      </h1>

      {/* google auth */}
      <button
        onClick={handleGoogleAuth}
        className="w-full rounded-lg px-4 py-1 shadow-md flex justify-center items-center text-black"
      >
        <Image src={google} alt="" width={18} height={18} />
        <span className="ml-3">Sign in with Google</span>
      </button>

      <p className="text-slate-400">Or continue with</p>

      {/* fields */}
      <form onSubmit={handleSubmit(useSubmit)} className="w-full">
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

        {/* remember me and forgot password */}
        <div className="w-full flex justify-between items-center">
          <div>
            <input type="checkbox" id="" />
            <span className="ml-2 text-md font-light">Remember me</span>
          </div>

          <p
            onClick={() => handleDisplay("forget")}
            className="text-md font-light underline cursor-pointer"
          >
            Forget your password?
          </p>
        </div>

        {/* submit */}
        <button className="btn btn-primary text-white w-full fw-semibold mt-3">
          Sign In
        </button>
      </form>

      <p className="cursor-pointer" onClick={() => handleDisplay("register")}>
        Not a member? Sign Up
      </p>
    </div>
  );
};
