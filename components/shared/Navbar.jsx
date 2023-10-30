"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { navbarItems } from "data/NavbarItems";
import { AiOutlineRight } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <nav className="pt-[10px]  absolute z-10 w-full flex">
        <div className="flex items-center justify-between mx-auto gap-[12rem]">
          <Link href="/">
            <h1 className="font-montserrat text-[1.5rem] font-extrabold text-blue m-0">
              tekHub
            </h1>
          </Link>

          <div className="navitems_parent">
            {navbarItems?.map((item, index) => {
              return (
                <Link href={item?.link} className="navitems" key={index}>
                  {item?.name}
                </Link>
              );
            })}
          </div>

          <div className="navbardiv_right">
            <button className=" hidden md:flex items-center justify-center gap-2 px-[14px] py-[8px] rounded-[30px] bg-blue text-white">
              <span className="text-[15px] font-poppins leading-none">
                {" "}
                Sign Up
              </span>
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
