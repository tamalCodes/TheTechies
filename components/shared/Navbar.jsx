"use client";

import Image from "next/image";
import Link from "next/link";
import Navbarlogo from "public/assets/horizontallogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { navbarItems } from "data/NavbarItems";
import Button from "./button/Button";

function Navbar() {
  return (
    <>
      <nav className="py-[15px] pl-[1.6rem] pr-[2rem]">
        <div className="navbarmain maxwidth_container">
          <Link href="/">
            <Image src={Navbarlogo} className="w-[120px] md:w-[120px]" />
          </Link>

          <div className="navitems_parent">
            {navbarItems?.map((item, index) => {
              return (
                <Link
                  href={item?.link}
                  className="navitems text-gray-2"
                  key={index}
                >
                  {item?.name}
                </Link>
              );
            })}
          </div>

          <div className="navbardiv_right">
            <Button className="hidden md:block solid-btn md:outline-btn px-[13px] py-[6px]">
              Sign In
            </Button>
            <Button className="hidden md:block solid-btn px-[13px] py-[6px]">
              Sign Up
            </Button>
            <p className="md:hidden cursor-pointer text-[20px] font-bold text-[rgb(55,112,255)] font-nunito">
              Sign In
            </p>
            <GiHamburgerMenu className="w-[22px] font-[500] h-[22px] text-blue-2 md:hidden " />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
