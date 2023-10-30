"use client";

import Image from "next/image";
import Link from "next/link";
import Navbarlogo from "public/assets/horizontallogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { navbarItems } from "data/NavbarItems";
import Button from "./button/Button";
import { AiOutlineRight } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <nav className="pt-[25px] pl-[1.6rem] pr-[2rem] absolute z-10 w-full">
        <div className="navbarmain maxwidth_container">
          <div className="flex items-center gap-[4rem]">
            <Link href="/">
              <Image
                src="./tekhubHorizontalLogo.svg"
                className="w-[100px] md:w-[110px]"
                width={100}
                height={100}
                alt="Navbar Branding image which reads TekHub in a red color font"
              />
            </Link>

            <div className="navitems_parent">
              {navbarItems?.map((item, index) => {
                return (
                  <Link
                    href={item?.link}
                    className="navitems text-white"
                    key={index}
                  >
                    {item?.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="navbardiv_right">
            <button className=" hidden md:flex items-center gap-2 border-solid border-yellow-light border-[1px] px-[25px] py-[6px] rounded-[30px] bg-yellow-light">
              <span className="text-[15px] font-poppins"> Get Started</span>
              <AiOutlineRight className="text-[15px]" />
            </button>

            <div className="bg-[#ffffff3c] px-[20px] py-[8px] rounded-[20px] md:hidden ">
              <GiHamburgerMenu className="w-[24px] font-[500] h-[24px] text-yellow-light" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
