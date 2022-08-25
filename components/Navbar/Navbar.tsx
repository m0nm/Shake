import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";

import logo from "../../public/logo.png";

type INavbar = {
  children: React.ReactNode;
};

function Navbar({ children }: INavbar) {
  // change navbar bg color on scroll
  const ref = useRef<HTMLDivElement>(null);
  const [switchColor, setSwitchColor] = useState(false);

  useEffect(() => {
    const handleOnScroll = () => {
      const navHeight = ref?.current?.clientHeight as number;

      window.scrollY > navHeight ? setSwitchColor(true) : setSwitchColor(false);
    };

    window.addEventListener("scroll", handleOnScroll);
  }, [switchColor]);

  return (
    <div
      ref={ref}
      className={`navbar sticky z-30 top-0 duration-700 transition-all ${
        switchColor ? " bg-white shadow-md" : "bg-pinky"
      }`}
    >
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
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
        >
          <li className="font-medium link-underline link-underline-black hover:text-primary">
            <Link href="#">Home</Link>
          </li>

          <li className="font-medium link-underline link-underline-black hover:text-primary">
            <Link href="#specialities">Specialities</Link>
          </li>

          <li className="font-medium link-underline link-underline-black hover:text-primary">
            <Link href="#about-us">About Us</Link>
          </li>

          <li className="font-medium link-underline link-underline-black hover:text-primary">
            <Link href="#products">Shakes</Link>
          </li>

          <li className="font-medium link-underline link-underline-black hover:text-primary">
            <Link href="#locate-us">Locate Us</Link>
          </li>
        </ul>
      </div>

      <Fade triggerOnce className="w-full">
        <div className="flex items-center justify-between w-full pr-3 md:px-8">
          {/* logo */}
          <div className="w-fit mx-auto md:mx-0">
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
          <div className="hidden lg:block w-fit mx-auto">
            <ul className="flex gap-12 text-secondary">
              <li className="font-medium link-underline link-underline-black hover:text-primary">
                <Link href="#">Home</Link>
              </li>

              <li className="font-medium link-underline link-underline-black hover:text-primary">
                <Link href="#specialities">Specialities</Link>
              </li>

              <li className="font-medium link-underline link-underline-black hover:text-primary">
                <Link href="#about-us">About Us</Link>
              </li>

              <li className="font-medium link-underline link-underline-black hover:text-primary">
                <Link href="#products">Shakes</Link>
              </li>

              <li className="font-medium link-underline link-underline-black hover:text-primary">
                <Link href="#locate-us">Locate Us</Link>
              </li>
            </ul>
          </div>
          {/* sign in or user */}
          <div>{children}</div>
        </div>
      </Fade>
    </div>
  );
}

export default Navbar;
