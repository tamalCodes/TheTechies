import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function AuthHeader({ goBack }) {
  return (
    <>
      <div className="flex gap-3 items-center">
        <Link href={"/"}>
          <button className="flex items-center gap-2 border-blue border-solid border-[1px]  rounded-[8px] text-[15px] h-[38px] px-3  font-poppins tab:hidden ">
            <FiArrowLeft className="text-[20px]" />
          </button>
        </Link>

        <button className="flex items-center gap-2 rounded-[8px] text-[16px] px-3 h-[38px] text-black border-blue border-solid border-[1px] font-poppins tab:hidden">
          <FcGoogle className="text-[20px]" />
          Continue with Google
        </button>

        {goBack && (
          <Link href={"/"}>
            <button className="flex items-center gap-2 bg-black font-poppins text-white text-[15px] px-4 py-2 rounded-[6px]">
              <FiArrowLeft className="text-[16px]" />
              Go Back
            </button>
          </Link>
        )}
      </div>
    </>
  );
}
