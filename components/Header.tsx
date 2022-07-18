import Image from "next/image";
import React from "react";

import heroImage from "../public/asset/hero-25.png";

function Header() {
  return (
    <header className="relative bg-pinky min-h-screen p-8">
      {/* text */}
      <div className="absolute top-1/4">
        <h1 className="text-6xl font-extrabold ">
          Experience The <span className="text-primary">Best</span>
        </h1>

        <h1 className="text-6xl font-extrabold mt-3">
          Homemade
          <span className="text-primary"> Milkshakes!</span>
        </h1>

        <button className="btn btn-primary btn-lg rounded-full px-10 mt-12">
          Shop Now
        </button>
      </div>

      {/* image */}
      <div className="absolute right-12 top-1/3 rounded-full w-[470px] h-[470px] bg-[#FFA5BA]"></div>

      <div className="w-fit ml-auto -mt-14 mr-16 scale-105">
        <Image src={heroImage} alt="" />
      </div>
    </header>
  );
}

export default Header;
