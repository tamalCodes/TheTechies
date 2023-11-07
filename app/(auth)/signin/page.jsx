import AuthHeader from "components/shared/auth/AuthHeader";
import Link from "next/link";
import Image from "next/image";
import AuthBanner from "public/assets/auth/AuthBanner.svg";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  return (
    <>
      <div className="px-8 pt-8 w-full tab:flex gap-8">
        <div className="tab:w-[50%] tab:grow tab:px-[2rem]">
          {/* <AuthHeader /> */}

          <h1 className=" mt-8 text-[32px] font-poppins font-extrabold">
            Sign In
          </h1>

          <form action="submit" className="mt-5 mb-7 flex flex-col gap-5">
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

          <button className=" bg-blue rounded-[8px] text-[16px] px-8 py-2 text-white font-poppins tracking-[1px] font-medium mt-2 w-full">
            Sign In
          </button>

          <div className="flex gap-3 items-center mt-3">
            <hr className="w-full" />
            <span className="font-poppins font-semibold opacity-50 text-[16px]">
              OR
            </span>
            <hr className="w-full" />
          </div>

          <button className=" rounded-[8px] text-[16px] px-8 py-2 font-poppins tracking-[1px] font-medium mt-2 w-full border-solid border-[1px] border-black text-black flex items-center justify-center gap-2">
            <FcGoogle className="text-[21px]" /> Continue with Google
          </button>

          <div className="font-poppins flex gap-3 items-center justify-center mt-7 text-[16px]">
            <span>Forgot Password?</span>
            <div className="h-[20px] border-l-[2px] border-l-blue border-solid tab:block"></div>
            <span>Sign Up</span>
          </div>
        </div>

        {/* <div className="hidden w-[50%] grow rounded-[8px] authpage_banner h-screen overflow-hidden tab:block">
          <AuthHeader />
        </div> */}
      </div>
    </>
  );
}
