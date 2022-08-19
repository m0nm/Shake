import Image from "next/image";
import milkshake from "../../public/asset/icons/milkshake (2).png";

export const EmptyCart = () => (
  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center pointer-events-none">
    <Image src={milkshake} alt="" width={120} height={120} />

    <h3 className="mt-2">Your cart is empty</h3>
  </div>
);
