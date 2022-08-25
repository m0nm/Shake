import Image from "next/image";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { firebase } from "../../pages/_app";
import { collection, getFirestore, query, where } from "firebase/firestore";

import { ProductCard } from "./ProductCard";

import light from "../../public/asset/blobs/light-blob.svg";
import light2 from "../../public/asset/blobs/light-blob-2.svg";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { SpinnerLoader } from "../SpinnerLoader";
import { Fade } from "react-awesome-reveal";

// init firestore
const firestore = getFirestore(firebase);

// categories
const categories = ["Strawberry", "Chocolate", "Vanilla", "Tea"];

// tab styles
const activeStyle =
  "rounded-3xl px-7 py-1.5 text-primary font-medium text-md bg-[#FFECF0] border-0";

const defaultStyle =
  "rounded-3xl px-7 py-1.5 text-gray-600 font-medium textmdg border border-red-200";

function Products() {
  const [active, setActive] = useState("Strawberry");

  // products data
  const ref = query(
    collection(firestore, "menu"),
    where("category", "==", active.toLowerCase())
  );
  const menu = useFirestoreQueryData(["menu"], ref);

  // fetch by category
  const handleClick = (tab: string) => {
    setActive(tab);
  };

  useEffect(() => {
    menu.refetch();
  }, [active]);

  return (
    <section id="products" className="relative min-h-screen">
      {/* subtle light effect */}
      <div className="absolute -top-24 -left-[24%] scale-95 pointer-events-none">
        <Image src={light} alt="" />
      </div>

      <div className="absolute -bottom-24 -right-10 pointer-events-none">
        <Image src={light2} alt="" />
      </div>

      {/* content */}
      <div className="container mx-auto py-8 mt-24 text-center">
        <h1 className="font-bold text-4xl">
          Are You Ready To Taste Our Flavors?
        </h1>

        <p className="text-gray-400 text-md mt-4 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum
          sed ut.
        </p>

        {/* categories */}
        <div className="flex items-center justify-center flex-wrap gap-6 mb-16">
          {categories.map((category: string) => (
            <button
              key={uuidv4()}
              onClick={() => handleClick(category)}
              className={category === active ? activeStyle : defaultStyle}
            >
              {category}
            </button>
          ))}
        </div>

        {/* products */}
        <div className="container md:px-8 grid place-items-center">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2">
            {/* loading products */}
            {menu.isLoading && <SpinnerLoader />}
            <Fade triggerOnce cascade damping={0.55}>
              {menu.isSuccess &&
                menu.data.map((item) => {
                  return (
                    <ProductCard
                      key={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  );
                })}
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
