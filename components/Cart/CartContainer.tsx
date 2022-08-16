import Image from "next/image";
import React from "react";

import { EmptyCart } from "./EmptyCart";
import arrow from "../../public/asset/icons/arrow-left.svg";

type ICart = {
  showCart: boolean;
  handleShowCart: (value: boolean) => void;
};

function CartContainer({ handleShowCart, showCart }: ICart) {
  return (
    <div className="h-full fixed top-0 right-0 z-50 shadow-lg grid justify-end">
      <ul className="relative h-full p-4 w-80 bg-white overflow-y-auto">
        {/* back arrow */}
        <div
          onClick={() => handleShowCart(false)}
          className="float-left cursor-pointer"
        >
          <Image src={arrow} alt="back" width={24} height={24} />
        </div>
        {/* cart empty bg */}
        <EmptyCart />
      </ul>
    </div>
  );
}

export default CartContainer;
