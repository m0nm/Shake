import Image from "next/image";
import React, { ReactNode } from "react";
import { Slide } from "react-awesome-reveal";

import image from "../../public/asset/auth/auth-form-image.jpg";
import ClientOnlyPortal from "../ClientPortal";

function AuthModal({ children }: { children: ReactNode }) {
  return (
    <ClientOnlyPortal selector="#modal">
      <div className="fixed top-0 left-0 z-40 w-screen min-h-screen bg-[rgba(0,0,0,0.3)] grid place-items-center">
        <Slide direction="up" className="w-full md:w-4/5 h-[90%]">
          <div className="w-full h-full flex bg-white rounded-lg">
            {/* content */}
            <div className="w-full md:w-1/2">{children}</div>

            {/* image */}
            <div className="hidden md:block w-1/2 h-full relative">
              <Image src={image} alt="" layout="fill" />
            </div>
          </div>
        </Slide>
      </div>
    </ClientOnlyPortal>
  );
}

export default AuthModal;
