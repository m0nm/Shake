import Image from "next/image";
import React from "react";

import { useAuthUser } from "@react-query-firebase/auth";
import { auth } from "../../pages/_app";

import { ICartItem } from "../Cart/CartItem";
import { displayToast } from "../Toasts/toastStore";

export type IProductCard = {
  name: string;
  description: string;
  image: string;
  price: number;
};

export const ProductCard = (props: IProductCard) => {
  // auth user
  const user = useAuthUser(["user"], auth);

  const addToCart = (product: IProductCard) => {
    // check if user logged in
    if (!user.data) {
      displayToast("error", "Please login first");
      return;
    }

    if (typeof window !== undefined) {
      const cart: ICartItem[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      // check if item already in cart and increase its quantity
      const itemExistIndex = cart.findIndex(
        (item) => item.name === product.name
      );
      if (itemExistIndex > -1) {
        cart[itemExistIndex].quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
        // to render the cart changes
        window.dispatchEvent(new Event("storage"));

        return displayToast("success", "added to cart");
      }

      // else add new item to cart
      const newItem = { ...product, quantity: 1 };
      const newCart = [...cart, newItem];
      localStorage.setItem("cart", JSON.stringify(newCart));

      // to render the cart changes
      window.dispatchEvent(new Event("storage"));

      return displayToast("success", "added to cart");
    }
  };

  return (
    <div className="card card-compact shadow-md bg-transparent border">
      <figure className="relative w-full h-[270px]">
        <Image src={props.image} alt={props.name} layout="fill" quality={100} />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-left text-base inline align-top h-9">
          {props.name}
        </h2>
        <p className="truncate mt-2">{props.description}</p>

        <div className="card-actions items-center justify-between mt-4">
          <span className="text-2xl font-bold">${props.price}</span>

          <button
            onClick={() => addToCart(props)}
            className="btn btn-primary text-white rounded-xl px-4 py-1"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
