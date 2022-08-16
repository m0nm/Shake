import Image from "next/image";
import React from "react";

import { useAuthSignOut } from "@react-query-firebase/auth";
import { auth } from "../../pages/_app";

import cart from "../../public/asset/navbar/cart.svg";
import logout from "../../public/asset/navbar/logout.png";

type IAvatar = {
  avatar: {
    src: string;
    height: number;
    width: number;
    alt?: string;
  };

  handleShowCart: (value: boolean) => void;
};

export const Avatar = ({ avatar, handleShowCart }: IAvatar) => {
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
        <li onClick={() => handleShowCart(true)}>
          <span>
            <Image src={cart} alt="" width={24} height={24} />
            Cart
          </span>
        </li>

        <li onClick={handleSignOut}>
          <span>
            <Image src={logout} alt="" width={24} height={24} />
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
};
