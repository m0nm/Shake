import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

import heroImage from "../public/asset/hero/hero-25.png";
import blob1 from "../public/asset/blobs/blob1.svg";
import blob2 from "../public/asset/blobs/blob2.svg";
import blob3 from "../public/asset/blobs/blob3.svg";

function Header() {
  return (
    <header className="bg-pinky relative min-h-screen wave pb-24">
      <div>
        {/* blobs */}
        <div className="absolute pointer-events-none top-1 z-10">
          <Image src={blob1} alt="" />
        </div>

        <div className="absolute pointer-events-none z-10 top-0 md:-right-10">
          <Image src={blob3} alt="" />
        </div>

        <div className="absolute pointer-events-none z-10 bottom-1/4 left-1/4">
          <Image src={blob2} alt="" />
        </div>
      </div>

      {/* content and image */}
      <div className="w-full min-h-screen grid grid-cols-6 items-center p-8">
        {/* text */}
        <div className="relative z-20 col-span-6 md:col-span-4 grid md:block place-items-center">
          <Slide triggerOnce cascade damping={0.7}>
            <h1 className="text-5xl md:text-6xl font-bold ">
              Homemade Milkshakes
            </h1>

            <h1 className="text-5xl md:text-6xl font-bold mt-3">
              Created With{" "}
              <span className="text-primary font-extrabold">Love</span> &{" "}
              <span className="text-primary font-extrabold">Joy</span>
            </h1>

            <button className="btn btn-primary btn-lg rounded-full px-10 mt-16 mb-12 md:mb-0">
              Shop Now
            </button>
          </Slide>
        </div>

        {/* image */}
        <div className="relative z-20 col-span-6 md:col-span-2 grid">
          <div className="grid place-items-center rounded-full bg-[#FFA5BA] w-[480px] h-[480px]">
            <div className="-mt-24 scale-95 pointer-events-none">
              <Image src={heroImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
