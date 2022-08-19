import Image from "next/image";
import React from "react";
import { IProductCard } from "../Products/ProductCard";

import plusIcon from "../../public/asset/icons/plus-icon.svg";
import minusIcon from "../../public/asset/icons/minus-icon.svg";

export interface ICartItem extends IProductCard {
  quantity: number;
}

export const CartItem = ({ item }: { item: ICartItem }) => {
  // increase item quantity
  const increaseQuantity = () => {
    if (typeof window !== undefined) {
      const cart: ICartItem[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      item.quantity++;

      const updatedCart = cart.map((cartItem) => {
        return cartItem.name === item.name ? item : cartItem;
      });

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // to render the cart changes
      window.dispatchEvent(new Event("storage"));
    }
  };

  // decrease item quantity
  const decreaseQuantity = () => {
    if (typeof window !== undefined) {
      const cart: ICartItem[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      item.quantity--;
      // to remove item if it below 1
      if (item.quantity < 1) {
        const newCart = cart.filter((cartItem) => cartItem.name !== item.name);
        localStorage.setItem("cart", JSON.stringify(newCart));
        // to render the cart changes
        window.dispatchEvent(new Event("storage"));
        return;
      }

      const updatedCart = cart.map((cartItem) => {
        return cartItem.name === item.name ? item : cartItem;
      });

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // to render the cart changes
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <li className="grid grid-cols-8 gap-2 items-center h-20 bg-cartItem text-white mt-4 shadow-md rounded">
      {/* item image */}
      <div className="col-span-2 relative h-full rounded">
        <Image src={item.image} alt="" layout="fill" objectFit="cover" />
      </div>

      {/* item name and price */}
      <div className="col-span-4">
        <h1 className="w-4/5 text-sm font-medium truncate mb-1">{item.name}</h1>
        <small className="text-md">${item.price}</small>
      </div>

      {/* item quantity */}
      <div className="col-span-1 flex items-center">
        {/* decrease */}
        <button
          onClick={decreaseQuantity}
          className="btn btn-xs bg-cart border-0"
        >
          <Image src={minusIcon} alt="" width={8} height={8} />
        </button>

        <span className="mx-2">{item.quantity}</span>

        {/* increase */}
        <button
          onClick={increaseQuantity}
          className="btn btn-xs bg-cart border-0"
        >
          <Image src={plusIcon} alt="" width={8} height={8} />
        </button>
      </div>
    </li>
  );
};
