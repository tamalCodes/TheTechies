"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { navbarItems } from "data/NavbarItems";
import { AiOutlineRight } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <nav className="pt-4  absolute z-10 w-full flex">
        <div className="flex items-center justify-between mx-auto w-full px-8 desktop:px-[120px]">
          <Link href="/">
            <h1 className="font-montserrat text-[1.5rem] font-extrabold text-blue m-0">
              tekHub
            </h1>
          </Link>

          <div className="desktop:flex items-center gap-6 hidden">
            {navbarItems?.map((item, index) => {
              return (
                <Link
                  href={item?.link}
                  className="font-poppins font-[600] text-[15px] no-underline pt-[5px] text-black"
                  key={index}
                >
                  {item?.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button className=" hidden desktop:flex items-center justify-center gap-2 px-[14px] py-[8px] rounded-[6px] bg-blue text-white">
              <span className="text-[15px] font-poppins leading-none">
                Sign Up
              </span>
              <AiOutlineRight className="text-[15px]" />
            </button>

            <div className="bg-[#ffffff3c] px-[20px] py-[8px] rounded-[20px] desktop:hidden ">
              <GiHamburgerMenu className="w-[24px] font-[500] h-[24px] text-blue" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
