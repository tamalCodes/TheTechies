import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FiArrowLeft } from "react-icons/fi";

export default function Signup() {
  return (
    <>
      <div className="px-8 pt-8">
        <div className="flex gap-3 items-center">
          <Link href={"/"}>
            <button className="flex items-center gap-2 border-blue border-solid border-[1px]  rounded-[8px] text-[15px] h-[38px] px-3  font-poppins ">
              <FiArrowLeft className="text-[20px]" />
            </button>
          </Link>

          <button className="flex items-center gap-2 rounded-[8px] text-[16px] px-3 h-[38px] text-black border-blue border-solid border-[1px] font-poppins ">
            <FcGoogle className="text-[20px]" />
            Continue with Google
          </button>
        </div>

        <h1 className=" mt-8 text-[28px] font-poppins font-bold">
          Join TekHub today
        </h1>

        <form action="submit" className="mt-5 mb-7 flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="auth_label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
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
            <label htmlFor="name" className="auth_label">
              Username
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="johndoe123"
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

        <p className="font-poppins text-[16px]">
          Already have an account ?{" "}
          <span className="font-semibold text-blue">Login</span>
        </p>

        <button className=" bg-blue rounded-[8px] text-[16px] px-8 py-2 text-white font-poppins tracking-[1px] font-medium mt-2">
          Sign up
        </button>
      </div>
    </>
  );
}
