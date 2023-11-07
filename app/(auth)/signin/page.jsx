import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

import donut from "public/assets/auth/donut.png";
import EllipseBottom from "public/assets/auth/EllipseBottom.png";
import EllipseTop from "public/assets/auth/EllipseTop.png";

export default function SignIn() {
  return (
    <>
      <div className="w-full max-h-screen tab:flex gap-8">
        <div className="px-8 tab:px-0 tab:w-[50%] tab:grow tab:flex tab:flex-col tab:items-center tab:justify-center">
          <div className="tab:w-[85%] desktop:w-[500px]">
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
              <Link href={"/signup"}>
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden w-[50%] grow bg-[#312F2F] h-screen overflow-hidden relative tab:block">
          <div className="absolute   min-w-full min-h-full z-1">
            <Image
              src={EllipseTop}
              alt="donut"
              width={800}
              height={700}
              objectFit="contain"
              className="w-full"
            />
          </div>
          <div className="absolute left-[30px] top-[-10px] min-w-full min-h-full z-2">
            <Image
              src={donut}
              alt="donut"
              width={800}
              height={700}
              objectFit="contain"
              className="w-full"
            />
          </div>
          <div className="absolute left-0 bottom-0 min-w-full min-h-full z-3">
            <Image
              src={EllipseBottom}
              alt="donut"
              width={800}
              height={700}
              objectFit="contain"
              className=" scale-x-[-1] bottom-[-140px] absolute left-[-190px] w-full"
            />
          </div>

          <h1 className="absolute bottom-[50px] left-[50px] z-4 font-poppins font-bold text-white opacity-90 text-4xl">
            The best tech <br />
            community ever.
          </h1>
        </div>
      </div>
    </>
  );
}
