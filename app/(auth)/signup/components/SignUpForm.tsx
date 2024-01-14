"use client";

import Side from "@/public/assets/auth/side.png";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
  return (
    <>
      <div className="formbg relative p-6 w-[850px]">
        <div className="flex gap-4 rounded-[12px] justify-around items-center ">
          <div className="">
            <h1 className="font-poppins text-[1.8rem] font-bold text-black">
              Sign Up
            </h1>
            <form action="submit" className="flex flex-col gap-5 mt-4">
              <div>
                <label htmlFor="fullname" className="auth_label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="John Doe"
                  className="auth_input"
                />
              </div>

              <div>
                <label htmlFor="email" className="auth_label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="johndoe@email.com"
                  className="auth_input"
                />
              </div>

              <div>
                <label htmlFor="password" className="auth_label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*********"
                  className="auth_input"
                />
              </div>
            </form>

            <button className=" bg-black rounded-[8px] text-[16px] px-8 py-2 text-white font-poppins tracking-[1px] font-medium mt-8 w-full">
              Sign Up
            </button>

            <div className="flex gap-3 items-center mt-1">
              <hr className="w-full" />
              <span className="font-poppins font-semibold opacity-50 text-[16px]">
                OR
              </span>
              <hr className="w-full" />
            </div>

            <button className=" rounded-[8px] text-[16px] px-8 py-2 font-poppins tracking-[1px] font-medium mt-1 w-full border-solid border-[1px] border-black text-black flex items-center justify-center gap-2">
              <FcGoogle className="text-[21px]" /> Continue with Google
            </button>

            <div className="font-poppins flex gap-3 items-center justify-center mt-7 text-[16px]">
              <Link href={"/signin"}>
                <span className="underline">
                  Already have an account? Sign in
                </span>
              </Link>
            </div>
          </div>

          <div>
            <Image src={Side} width={400} height={400} alt="side" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
