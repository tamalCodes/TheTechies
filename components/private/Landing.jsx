import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <h1 className="font-montserrat text-[63px] font-extrabold text-black w-[50%] text-center leading-none ">
        We are the <span className="text-blue">best tech community</span> to
        ever exist.
      </h1>

      <div className="flex items-center gap-2 mt-[4rem] mb-5">
        <div className="relative flex  w-[109px] h-[33px]">
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

        <div className="h-[46px] border-l-[3px] border-l-blue border-solid;"></div>

        <div className="flex flex-col font-poppins text-black">
          <span className="font-bold opacity-85 text-[20px]">1000+</span>
          <span className="text-[16px] m-0 leading-none font-medium opacity-85">
            Techies connected
          </span>
          <span className="text-[16px] m-0 leading-none font-medium opacity-85">
            by TekHub
          </span>
        </div>
      </div>

      <p className="font-poppins text-black  w-[40%] text-center leading-tight text-[16px] font-normal mb-7">
        A place to find the best tech resources, groups and tech enthusiasts.
        Build projects, collaborate, host events and much more.
      </p>

      <button className=" hidden md:flex items-center justify-center gap-2 px-[18px] py-[14px] rounded-[30px] bg-blue text-white">
        <span className="text-[15px] font-poppins leading-none">
          Sign Up, Join the community today
        </span>
        <AiOutlineRight className="text-[15px] font-bold" />
      </button>
    </div>
  );
};

export default Landing;
