"use client";

import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Landing = () => {
  return (
    <div className="relative px-8 flex flex-col tab:items-center">
      <h1 className="font-montserrat font-bold text-black leading-none text-[45px] tab:text-[60px] tab:font-extrabold  tab:text-center desktop:text-[62px] desktop:w-[60%] ">
        We are the{" "}
        <span className="text-blue leading-none">best tech community</span> to
        ever {window.innerWidth > 1300 && <br />}exist.
      </h1>

      <div className="flex items-center gap-2 mt-10 mb-10 desktop:mb-6">
        <div className="relative flex w-[109px] h-[33px]">
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e9bae6101650903.5f2369bc9baf7.jpg"
            width={400}
            height={400}
            alt="Hello world"
            className="avatar left-0 z-[4]"
          />
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/baa20698931623.5ee79b6a8ec2b.jpg"
            width={400}
            height={400}
            alt="Hello world"
            className="avatar left-12 z-[2] "
          />
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/06fbe298931623.5ee79b6a90221.jpg"
            width={400}
            height={400}
            alt="Hello world"
            className="avatar left-6 z-[3]"
          />
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/d07bca98931623.5ee79b6a8fa55.jpg"
            width={400}
            height={400}
            alt="Hello world"
            className="avatar  left-[75px]"
          />
        </div>

        <div className=" h-[46px] border-l-[3px] border-l-blue border-solid;"></div>

        <div className="flex flex-col font-poppins text-black">
          <span className="font-bold opacity-85 text-[16px] tab:text-19px]">
            1000+
          </span>
          <span className="text-[16px] tab:text-[17px] m-0 leading-none font-medium opacity-85">
            Techies connected
          </span>
          <span className="text-[16px] tab:text-[17px] m-0 leading-none font-medium opacity-85">
            by TekHub
          </span>
        </div>
      </div>

      <p className="font-poppins text-black  leading-tight text-[17px] tab:text-[19px] font-normal mb-9 tab:w-[70%] tab:text-center desktop:w-[40%]">
        A place to find the best tech resources, groups and tech enthusiasts.{" "}
        {/* <br className="hidden desktop:block" /> */}
        Build projects, collaborate, host events and much more.
      </p>

      <button className=" flex items-center justify-center gap-2 py-3 rounded-[30px] bg-blue text-white w-[200px] tab:w-auto tab:px-5">
        <span className="hidden tab:block text-[18px] font-poppins leading-none">
          Sign Up, Join the community today
        </span>

        <span className=" tab:hidden text-[15px] font-poppins leading-none font-medium">
          Sign Up Today
        </span>
        <AiOutlineRight className="text-[18px] font-bold" />
      </button>
    </div>
  );
};

export default Landing;
