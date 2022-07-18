import Image from "next/image";
import React from "react";

import heroImage from "../public/asset/hero-25.png";
import blob1 from "../public/asset/blob1.svg";
import blob2 from "../public/asset/blob2.svg";
import blob3 from "../public/asset/blob3.svg";
import wave from "../public/asset/wave.svg";

function Header() {
  return (
    <header className="bg-pinky relative min-h-screen">
      <div className="flex flex-col md:flex-row items-center gap-8 py-8 px-2 md:px-8">
        {/* blobs */}
        <div className="absolute top-1 -z-10 md:z-10">
          <Image src={blob1} alt="" />
        </div>

        <div className="absolute -z-10 md:z-10 top-0 md:-right-10">
          <Image src={blob3} alt="" />
        </div>

        <div className="absolute -z-10 md:z-10 bottom-1/4 left-1/4">
          <Image src={blob2} alt="" />
        </div>

        {/* text */}
        <div className="grid md:block place-items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold ">
            The <span className="text-primary">Best </span>
            Most <span className="text-primary">Delicious</span>
          </h1>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-3">
            Homemade
            <span className="text-primary"> Milkshakes!</span>
          </h1>
          <button className="btn btn-primary btn-lg rounded-full px-10 mt-12 mb-12 md:mb-0">
            Shop Now
          </button>
        </div>

        {/* image */}
        <div className="relative h-full ">
          <div className="absolute mt-20 rounded-full bg-[#FFA5BA] w-[480px] h-[480px]"></div>

          <div className="-mt-20 ml-10 scale-95">
            <Image src={heroImage} alt="" />
          </div>
        </div>
      </div>

      {/* wave */}
      <div className="w-full">
        <Image src={wave} alt="" />
      </div>
    </header>
  );
}

export default Header;
