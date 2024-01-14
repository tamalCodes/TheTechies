"use client";

import Link from "next/link";
import Reviews from "./landing/Reviews";

const Landing = () => {
  return (
    <div className="relative px-8 flex flex-col tab:items-center">
      <h1 className="font-black text-black leading-none tracking-tight text-[45px] tab:text-[60px] tab:font-black tab:tracking-normal tab:text-center desktop:text-[62px] desktop:w-[70%]">
        We are the{" "}
        <span className="text-blue leading-none">best tech community</span> to
        ever <br className="hidden md:block" /> exist.
      </h1>

      <p className="font-poppins text-black  leading-tight text-[17px] tab:text-[19px] font-normal mt-9 mb-9 tab:w-[70%] tab:text-center desktop:w-[50%] desktop:text-[16px]">
        A place to find the best tech resources, groups and techies. Build
        projects, collaborate, host events and much more.
      </p>

      <div className="flex flex-col gap-5 tab:flex-row-reverse tab:items-center tab:gap-3">
        <Reviews />

        <div className="hidden h-[46px] border-l-[3px] border-l-blue border-solid tab:block"></div>

        <Link href={"/signup"}>
          <button className=" flex items-center justify-center gap-2 py-3 rounded-[6px] bg-blue text-white w-[200px] tab:w-auto tab:px-7">
            <span className="hidden tab:block text-[16px] font-poppins leading-none font-medium">
              Intrested? Sign Up
            </span>
            <span className="tab:hidden block text-[16px] font-poppins leading-none font-medium">
              Sign Up
            </span>
            {/* <AiOutlineRight className="text-[16px] font-bold" /> */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
