import Image from "next/image";
import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";

import speciality1 from "../public/asset/specialities/speciality-1.png";
import speciality2 from "../public/asset/specialities/speciality-2.png";
import speciality3 from "../public/asset/specialities/speciality-3.png";

function Specialities() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target?.getBoundingClientRect();

    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });

    target.style.setProperty("--mouse-x", `${mousePos.x}px`);
    target.style.setProperty("--mouse-y", `${mousePos.y}px`);
  };

  return (
    <section
      id="specialities"
      className="relative px-2 md:px-12 min-h-screen mt-32 "
    >
      <Slide triggerOnce direction="up" damping={0.7}>
        <div className="py-4 h-[260px] w-full text-center">
          <h3 className="text-4xl font-bold">
            Customers Love Our Specialities
          </h3>
        </div>
      </Slide>

      {/* cards */}
      <Fade triggerOnce delay={100}>
        <div className="w-full grid grid-cols-6 place-items-center gap-8">
          {/* card 1 */}
          <Tilt
            perspective={1150}
            tiltMaxAngleX={12}
            tiltMaxAngleY={14}
            transitionSpeed={1500}
            scale={1.033}
            className="col-span-6 md:col-span-2 mb-24 md:mb-0"
          >
            <div
              onMouseMove={handleMouseMove}
              className="relative h-[380px] speciality-card"
            >
              <div className="absolute -top-20 z-10">
                <div className="w-40 h-40 rounded-full bg-[#FF8BA0]">
                  <Image src={speciality1} alt="" />
                </div>
              </div>

              <div className="card w-full mx-auto md:mx-0 h-full grid place-items-center border-t-0 bg-[#FF8BA0] shadow-xl">
                <div className="card-body mt-10 items-center text-white">
                  <h2 className="card-title text-center text-2xl font-medium">
                    Thick Shakes
                  </h2>
                  <p className="text-center font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime iste animi aliquid quos doloremque?
                  </p>
                </div>
              </div>
            </div>
          </Tilt>

          {/* card 2 */}
          <Tilt
            perspective={1150}
            tiltMaxAngleX={12}
            tiltMaxAngleY={14}
            transitionSpeed={1500}
            scale={1.033}
            className="col-span-6 md:col-span-2 mb-24 md:mb-0"
          >
            <div
              onMouseMove={handleMouseMove}
              className="relative h-[380px] speciality-card"
            >
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-10">
                <div className="w-40 h-40 rounded-full bg-[#6FC9E7] grid place-items-center">
                  <Image src={speciality2} alt="" className="scale-75" />
                </div>
              </div>

              <div className="card w-full mx-auto md:mx-0 h-full grid place-items-center border-t-0 bg-[#6FC9E7] shadow-xl">
                <div className="card-body  mt-10 items-center text-white">
                  <h2 className="card-title text-center text-2xl font-medium">
                    Fresh Taste
                  </h2>
                  <p className="text-center font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime iste animi aliquid quos doloremque?
                  </p>
                </div>
              </div>
            </div>
          </Tilt>

          {/* card 3 */}
          <Tilt
            perspective={1150}
            tiltMaxAngleX={12}
            tiltMaxAngleY={14}
            transitionSpeed={1500}
            scale={1.033}
            className="col-span-6 md:col-span-2 mb-24 md:mb-0"
          >
            <div
              onMouseMove={handleMouseMove}
              className="relative h-[380px] speciality-card"
            >
              <div className="absolute -top-20 right-0 z-10">
                <div className="w-40 h-40 rounded-full bg-[#553631] grid place-items-center">
                  <Image src={speciality3} alt="" className="scale-50" />
                </div>
              </div>

              <div className="card w-full mx-auto md:mx-0 h-full grid place-items-center border-t-0 bg-[#553631] shadow-xl">
                <div className="card-body  mt-10 items-center text-white">
                  <h2 className="card-title text-center text-2xl font-medium">
                    Joy Spark
                  </h2>
                  <p className="text-center font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime iste animi aliquid quos doloremque?
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </Fade>
    </section>
  );
}

export default Specialities;
