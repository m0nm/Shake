import Image from "next/image";
import React from "react";

import { useAuthSignOut } from "@react-query-firebase/auth";
import { auth } from "../../pages/_app";

import cart from "../../public/asset/navbar/cart.svg";
import logout from "../../public/asset/navbar/logout.png";

type Image = {
  src: string;
  height: number;
  width: number;
  alt?: string;
};

export const Avatar = ({ avatar }: { avatar: Image }) => {
  // sign out
  const mutation = useAuthSignOut(auth);

  const handleSignOut = () => mutation.mutate();

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} className="grid place-items-center cursor-pointer">
        <Image src={avatar} alt="" width="38" height="38" />
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow rounded-box w-52 bg-white"
      >
        <li className="flex flex-row gap-3 items-center p-3 w-full cursor-pointer">
          <Image src={cart} alt="" width={24} height={24} />
          Cart
        </li>

        <li
          onClick={handleSignOut}
          className="flex flex-row gap-3 items-center p-3 w-full cursor-pointer"
        >
          <Image src={logout} alt="" width={24} height={24} />
          Logout
        </li>
      </ul>
    </div>
  );
};
