"use client";

import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

import user1 from "public/assets/landing/user1.jpg";
import user2 from "public/assets/landing/user2.jpg";
import user3 from "public/assets/landing/user3.jpg";
import user4 from "public/assets/landing/user4.jpg";

const Landing = () => {
  return (
    <div className="relative px-8 flex flex-col tab:items-center">
      <h1 className="font-montserrat font-bold text-black leading-none tracking-tight text-[45px] tab:text-[60px] tab:font-extrabold tab:tracking-normal tab:text-center desktop:text-[62px] desktop:w-[70%]">
        We are the{" "}
        <span className="text-blue leading-none">best tech community</span> to
        ever {window.innerWidth > 1300 && <br />}exist.
      </h1>

      <p className="font-poppins text-black  leading-tight text-[17px] tab:text-[19px] font-normal mt-9 mb-9 tab:w-[70%] tab:text-center desktop:w-[50%] desktop:text-[16px]">
        A place to find the best tech resources, groups and tech enthusiasts.{" "}
        Build projects, collaborate, host events and much more.
      </p>

      <div className="flex items-center gap-5">
        <button className=" flex items-center justify-center gap-2 py-3 rounded-[6px] bg-blue text-white w-[200px] tab:w-auto tab:px-7">
          <span className="hidden tab:block text-[16px] font-poppins leading-none font-medium">
            Intrested? Sign Up
          </span>
          <span className="tab:hidden block text-[16px] font-poppins leading-none font-medium">
            Sign Up
          </span>
          <AiOutlineRight className="text-[16px] font-bold" />
        </button>

        <div className=" h-[46px] border-l-[3px] border-l-blue border-solid;"></div>

        <div className="flex flex-col gap-2 ">
          <div className="relative flex w-[109px] h-[33px]">
            <Image
              src={user1}
              width={400}
              height={400}
              alt="Hello world"
              className="avatar left-0 z-[4]"
            />
            <Image
              src={user2}
              width={400}
              height={400}
              alt="Hello world"
              className="avatar left-12 z-[2] "
            />
            <Image
              src={user3}
              width={400}
              height={400}
              alt="Hello world"
              className="avatar left-6 z-[3]"
            />
            <Image
              src={user4}
              width={400}
              height={400}
              alt="Hello world"
              className="avatar  left-[75px]"
            />
          </div>

          <p className="font-poppins text-black text-[14px] m-0 leading-none  opacity-85">
            Trusted by over <span className="font-semibold">1000+</span> techies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
