import Image from "next/image";
import React from "react";
import { Slide } from "react-awesome-reveal";

import image1 from "../../public/asset/about-us/aboutus-1.jpg";
import image2 from "../../public/asset/about-us/aboutus-2.jpg";
import image3 from "../../public/asset/about-us/aboutus-3.jpg";
import image4 from "../../public/asset/about-us/aboutus-4.jpg";

import light from "../../public/asset/blobs/light-blob.svg";

function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative min-h-screen grid place-items-center mt-20 overflow-y-hidden"
    >
      {/* subtle light effect */}
      <div className="absolute top-8 -left-24 scale-95 pointer-events-none">
        <Image src={light} alt="" />
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row gap-6 px-1 md:px-12">
        {/* content */}
        <div className="md:w-1/2 text-center md:text-left mt-24">
          <Slide triggerOnce direction="left" delay={70} fraction={0.2}>
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
          </Slide>
        </div>

        {/* images */}
        <div className="relative md:w-1/2 h-[640px] grid grid-cols-4 gap-4">
          {/* background square */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 w-4/5 h-[320px] -z-10 bg-pinky"></div>

          <div className="col-span-2 grid grid-rows-6 gap-2">
            <div className="card relative row-span-2 shadow-xl hover:scale-105 transition-all duration-500">
              <figure className="relative w-full h-full">
                <Image src={image4} alt="" layout="fill" />
              </figure>
            </div>

            <div className="card relative row-span-4 shadow-xl hover:scale-105 transition-all duration-500">
              <figure className="relative w-full h-full">
                <Image src={image1} alt="" layout="fill" />
              </figure>
            </div>
          </div>

          <div className="col-span-2 grid grid-rows-6 gap-2">
            <div className="card relative row-span-4 shadow-xl hover:scale-105 transition-all duration-500">
              <figure className="relative w-full h-full">
                <Image src={image3} alt="" layout="fill" />
              </figure>
            </div>
            <div className="card relative row-span-2 shadow-xl hover:scale-105 transition-all duration-500">
              <figure className="relative w-full h-full">
                <Image src={image2} alt="" layout="fill" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
