import React from "react";
import { ICartItem } from "./CartItem";

export const CartCheckout = ({ cart }: { cart: ICartItem[] }) => {
  const deliveryCost = 2;

  const subtotal = cart.reduce((acc, item) => {
    acc = acc + item.price * item.quantity;
    return acc;
  }, 0);

  const total = subtotal + deliveryCost;

  return (
    <div className="h-1/2 bg-cart">
      <div className="h-full bg-cartItem px-2 pt-5 rounded-t-2xl">
        <div className="mb-12 px-2">
          {/* subtotal */}
          <div className="w-full h-8 flex items-center justify-between">
            <span className="text-slate-400 text-lg font-semibold">
              SubTotal
            </span>
            <span className="text-slate-400 text-lg font-semibold">
              ${subtotal}
            </span>
          </div>

          {/* delivery cost */}
          <div className="w-full h-8 flex items-center justify-between mt-2">
            <span className="text-slate-400 text-lg font-semibold">
              Delivery
            </span>
            <span className="text-slate-400 text-lg font-semibold">
              ${deliveryCost}
            </span>
          </div>
        </div>

        <div className="px-2">
          {/* total */}
          <div className="w-full h-8 flex items-center justify-between mt-3">
            <h1 className="text-white text-xl font-semibold">Total</h1>
            <span className="text-white text-xl font-semibold">${total}</span>
          </div>

          <button className="btn btn-primary w-full mt-4">Checkout</button>
        </div>
      </div>
    </div>
  );
};
