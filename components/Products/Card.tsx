import Image from "next/image";
import React from "react";

type ICard = {
  name: string;
  description: string;
  image: string;
  price: number;
};

export const Card = (props: ICard) => {
  return (
    <div className="card card-compact w-[320px] shadow-md bg-transparent border">
      <figure className="relative w-full h-[270px]">
        <Image src={props.image} alt={props.name} layout="fill" quality={100} />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-left text-base">{props.name}</h2>
        <p className="truncate">{props.description}</p>
        <div className="card-actions items-center justify-between mt-6">
          <span className="text-2xl font-bold">${props.price}</span>
          <button className="btn btn-primary text-white rounded-xl px-4 py-1">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
