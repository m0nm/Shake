import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { CartItem, ICartItem } from "./CartItem";
import { EmptyCart } from "./EmptyCart";
import { CartCheckout } from "./CartCheckout";
import { Scrollbars } from "react-custom-scrollbars";

export const Cart = () => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  useEffect(() => {
    function populateCart() {
      const storageCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart((prev) => storageCart);
    }

    populateCart();

    window.addEventListener("storage", populateCart);

    return () => {
      window.removeEventListener("storage", populateCart);
    };
  }, []);

  return (
    <div className="relative h-screen">
      {!cart.length ? (
        <EmptyCart />
      ) : (
        <div className="h-full">
          <div className="h-1/2 bg-cart px-2 py-4 rounded-t-2xl">
            <Scrollbars autoHide>
              {cart.map((item) => {
                return <CartItem key={uuidv4()} item={item} />;
              })}
            </Scrollbars>
          </div>
          <CartCheckout cart={cart} />
        </div>
      )}
    </div>
  );
};
