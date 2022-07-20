import Image from "next/image";
import React, { useState } from "react";

import { LoginForm } from "./LoginForm";

import image from "../../public/asset/auth/auth-form-image.jpg";
import { RegisterForm } from "./RegisterForm";
import { ForgetPasswordForm } from "./ForgetPasswordForm";

function AuthModal() {
  const [display, setDisplay] = useState<"login" | "register" | "forget">(
    "login"
  );

  const handleDisplay = (value: "login" | "register" | "forget") => {
    setDisplay(value);
  };

  return (
    <div className="fixed top-0 left-0 z-30 w-screen min-h-screen bg-zinc-600 grid place-items-center">
      <div className="w-full md:w-4/5 h-[90%] flex bg-white rounded-lg">
        {/* content */}
        {display === "login" ? (
          <LoginForm handleDisplay={handleDisplay} />
        ) : display === "register" ? (
          <RegisterForm handleDisplay={handleDisplay} />
        ) : (
          <ForgetPasswordForm handleDisplay={handleDisplay} />
        )}

        {/* image */}
        <div className="hidden md:block w-1/2 h-full relative">
          <Image src={image} alt="" layout="fill" />
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
