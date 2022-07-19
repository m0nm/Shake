import Image from "next/image";
import React from "react";

import speciality1 from "../public/asset/speciality-1.png";
import speciality2 from "../public/asset/speciality-2.png";
import speciality3 from "../public/asset/speciality-3.png";

function Specialities() {
  return (
    <section className="px-2 md:px-10 min-h-screen mt-32 ">
      <div className="py-4 h-[260px] w-full text-center">
        <h3 className="text-4xl font-bold">Customers Love Our Specialities</h3>
      </div>

      {/* cards */}
      <div className="grid grid-cols-6 gap-4">
        {/* card 1 */}
        <div className="relative col-span-6 md:col-span-2 w-fit h-[460px]">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-10">
            <div className="w-40 h-40 rounded-full bg-[#FF8BA0]">
              <Image src={speciality1} alt="" />
            </div>
          </div>

          <div className="card w-[95%] md:w-96 mx-auto md:mx-0 h-3/4 grid place-items-center bg-[#FF8BA0] shadow-xl">
            <div className="card-body mt-10 items-center text-white">
              <h2 className="card-title text-center text-2xl font-medium">
                Thick Shakes
              </h2>
              <p className="text-center font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                iste animi aliquid quos doloremque?
              </p>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="relative col-span-6 md:col-span-2 w-fit h-[460px]">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-10">
            <div className="w-40 h-40 rounded-full bg-[#6FC9E7] grid place-items-center">
              <Image src={speciality2} alt="" className="scale-75" />
            </div>
          </div>

          <div className="card w-[95%] md:w-96 mx-auto md:mx-0 h-3/4 grid place-items-center bg-[#6FC9E7] shadow-xl">
            <div className="card-body  mt-10 items-center text-white">
              <h2 className="card-title text-center text-2xl font-medium">
                Fresh Taste
              </h2>
              <p className="text-center font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                iste animi aliquid quos doloremque?
              </p>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="relative col-span-6 md:col-span-2 w-fit h-[460px]">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-10">
            <div className="w-40 h-40 rounded-full bg-[#553631] grid place-items-center">
              <Image src={speciality3} alt="" className="scale-50" />
            </div>
          </div>

          <div className="card w-[95%] md:w-96 mx-auto md:mx-0 h-3/4 grid place-items-center bg-[#553631] shadow-xl">
            <div className="card-body  mt-10 items-center text-white">
              <h2 className="card-title text-center text-2xl font-medium">
                Joy Spark
              </h2>
              <p className="text-center font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                iste animi aliquid quos doloremque?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialities;
