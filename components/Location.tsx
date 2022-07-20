import Image from "next/image";
import React from "react";

import map from "../public/asset/locate-us/location.png";
import store1 from "../public/asset/locate-us/store-1.jpg";
import store2 from "../public/asset/locate-us/store-2.jpg";
import store3 from "../public/asset/locate-us/store-3.jpg";
import store4 from "../public/asset/locate-us/store-4.jpg";

function LocateUs() {
  return (
    <section className="p-3 md:p-10 mt-20 w-full min-h-screen flex flex-col md:flex-row justify-center items-center gap-14">
      <div className="w-full md:w-1/2 h-full">
        <h1 className="font-semibold text-4xl">Locate Us</h1>

        <p className="text-lg text-slate-500 my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita
          eligendi saepe repudiandae alias minima mollitia, praesentium
          similique eveniet eaque unde iste molestiae temporibus, cum neque
          aperiam quod? Culpa facere omnis suscipit?
        </p>

        <div className="h-1/2 w-full">
          <div className="h-[180px] w-full grid grid-cols-4 gap-4">
            <div className="col-span-2 relative card">
              <Image src={store1} alt="" layout="fill" />
            </div>

            <div className="col-span-2 relative card">
              <Image src={store2} alt="" layout="fill" />
            </div>
          </div>

          <div className="h-[150px] w-ful grid grid-cols-6 gap-4 mt-8">
            <div className="col-span-2 relative card">
              <Image src={store4} alt="" layout="fill" />
            </div>

            <div className="col-span-4 relative card">
              <Image src={store3} alt="" layout="fill" />
            </div>
          </div>
        </div>
      </div>

      {/* map */}
      <div className="relative w-full md:w-1/2 h-[80vh]">
        <Image src={map} alt="" layout="fill" />
      </div>
    </section>
  );
}

export default LocateUs;
