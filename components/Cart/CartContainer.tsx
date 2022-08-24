import Image from "next/image";
import React from "react";
import { Cart } from "./Cart";
import arrow from "../../public/asset/icons/arrow-left.svg";

type ICartContainer = {
  showCart: boolean;
  handleShowCart: (value: boolean) => void;
};

export const clearCart = () => {
  if (typeof window !== undefined)
    localStorage.setItem("cart", JSON.stringify([]));

  // to render the cart changes
  window.dispatchEvent(new Event("storage"));
};

function CartContainer({ handleShowCart, showCart }: ICartContainer) {
  return (
    <div
      className={`h-full fixed top-0 right-0 z-40 shadow-lg grid justify-end ease-in-out duration-300 ${
        showCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="h-full p-2 w-80 md:w-96 bg-white">
        <div className="flex justify-between items-center py-4">
          {/* back arrow */}
          <span
            onClick={() => handleShowCart(false)}
            className="cursor-pointer"
          >
            <Image src={arrow} alt="back" width={24} height={24} />
          </span>

          <h5 className="font-medium">Your Cart</h5>

          <button
            onClick={clearCart}
            className="btn btn-xs text-slate-500 hover:text-slate-600 bg-transparent hover:bg-slate-100 border-0"
          >
            clear all
          </button>
        </div>

        <Cart />
      </ul>
    </div>
  );
}

export default CartContainer;
