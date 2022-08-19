import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../public/logo.png";

type INavbar = {
  children: React.ReactNode;
};

function Navbar({ children }: INavbar) {
  return (
    <div className="navbar bg-pinky pr-3 md:px-8">
      {/* mobile dropdown */}
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52"
        >
          <li className="font-medium link-underline link-underline-black hover:text-primary">
            <Link href="/">Home</Link>
          </li>

          <li className="font-medium link-underline link-underline-black hover:text-primary">
            <Link href="/">Specialities</Link>
          </li>

          <li className="font-medium link-underline link-underline-black hover:text-primary">
            <Link href="/">About Us</Link>
          </li>

          <li className="font-medium link-underline link-underline-black hover:text-primary">
            <Link href="/">Locate Us</Link>
          </li>
        </ul>
      </div>

      {/* logo */}
      <div className="navbar-start w-fit md:w-1/2 mx-auto md:mx-0">
        <Link href="/">
          <a>
            <Image
              src={logo}
              alt="shake logo"
              className="cursor-pointer"
              width={86}
              height={40}
            />
          </a>
        </Link>
      </div>

      {/* links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-12 text-secondary">
          <li className="font-medium link-underline link-underline-black hover:text-primary">
            <Link href="/">Home</Link>
          </li>

          <li className="font-medium link-underline link-underline-black hover:text-primary">
            <Link href="/">Specialities</Link>
          </li>

          <li className="font-medium link-underline link-underline-black hover:text-primary">
            <Link href="/">About Us</Link>
          </li>

          <li className="font-medium link-underline link-underline-black hover:text-primary">
            <Link href="/">Locate Us</Link>
          </li>
        </ul>
      </div>

      {/* sign in or user */}
      <div className="navbar-end w-fit md:w-1/2">{children}</div>
    </div>
  );
}

export default Navbar;
