import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../public/logo.png";

function Navbar() {
  return (
    <div className="navbar bg-transparent container mx-auto pt-4">
      <div className="navbar-start">
        <Image src={logo} alt="shake logo" width={86} height={40} />
      </div>
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

      <div className="navbar-end">
        <a className="btn btn-outline btn-primary rounded-3xl px-8">Sign In</a>
      </div>
    </div>
  );
}

export default Navbar;
