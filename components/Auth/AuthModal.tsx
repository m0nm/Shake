import Image from "next/image";
import React, { ReactNode, useState } from "react";

import { LoginForm } from "./LoginForm";

import image from "../../public/asset/auth/auth-form-image.jpg";

function AuthModal({ children }: { children: ReactNode }) {
  return (
    <div className="fixed top-0 left-0 z-30 w-screen min-h-screen bg-zinc-600 grid place-items-center">
      <div className="w-full md:w-4/5 h-[90%] flex bg-white rounded-lg">
        {/* content */}
        {children}

        {/* image */}
        <div className="hidden md:block w-1/2 h-full relative">
          <Image src={image} alt="" layout="fill" />
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
