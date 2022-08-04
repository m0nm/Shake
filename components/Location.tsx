import Image from "next/image";
import React from "react";

import store1 from "../public/asset/locate-us/store-1.jpg";
import store2 from "../public/asset/locate-us/store-2.jpg";
import store3 from "../public/asset/locate-us/store-3.jpg";
import store4 from "../public/asset/locate-us/store-4.jpg";

function LocateUs() {
  return (
    <section className="p-3 md:p-10 mt-20 w-full min-h-screen flex flex-col md:flex-row justify-center items-center gap-14 bg-[#FFEDF1]">
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d788.0115706958757!2d144.96913985972114!3d-37.81238488777274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642c8ffed79cf%3A0x7922ae29d1d13255!2sLove%20In%20Life%20Limos!5e0!3m2!1sen!2sdz!4v1658679275007!5m2!1sen!2sdz"
          width="600"
          height="450"
          style={{ border: 0, height: "100%" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default LocateUs;
