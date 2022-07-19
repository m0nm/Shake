import Image from "next/image";
import React from "react";

import image1 from "../public/asset/aboutus-1.jpg";
import image2 from "../public/asset/aboutus-2.jpg";
import image3 from "../public/asset/aboutus-3.jpg";
import image4 from "../public/asset/aboutus-4.jpg";

import light from "../public/asset/light-blob.svg";
import light2 from "../public/asset/light-blob-2.svg";

function AboutUs() {
  return (
    <section className="relative min-h-screen grid place-items-center overflow-y-hidden">
      {/* subtle light effect */}
      <div className="absolute top-8 -left-2 scale-95 pointer-events-none">
        <Image src={light} alt="" />
      </div>

      <div className="absolute bottom-8 -right-2 scale-95 pointer-events-none">
        <Image src={light2} alt="" />
      </div>

      <div className="w-full flex flex-col md:flex-row px-12">
        {/* images */}

        {/* content */}
        <div className="w-1/2">
          <h3 className="text-4xl font-semibold">About Us</h3>
          <p className="text-slate-600 leading-relaxed my-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quia ex pariatur amet maiores? Dolorum iste architecto iusto odio
            ipsum consectetur corrupti, quisquam dolor recusandae alias, fuga
            blanditiis pariatur, dolorem dicta inventore!
          </p>

          <p className="text-slate-600 leading-relaxed mb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quia ex pariatur amet maiores? Dolorum iste architecto iusto odio
            ipsum consectetur corrupti, quisquam dolor recusandae alias, fuga
            blanditiis pariatur, dolorem dicta inventore!
          </p>

          <button className="btn btn-primary rounded-full px-8 text-white font-medium">
            Discover Our Social Media!
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
