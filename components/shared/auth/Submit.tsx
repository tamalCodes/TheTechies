"use client";

import getURL from "@/lib/geturl";
import createSupabaseServerClient from "@/lib/supabase/client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Submit: React.FC<{ to: string; parent: string }> = ({ to, parent }) => {
  // Creating supabase client (frontend side) and then using it to sign in with google
  // after signing in with google, it will redirect to the url that is passed in the options

  const supabase = createSupabaseServerClient();
  const handleGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: getURL(),
      },
    });
  };

  return (
    <div>
      <button className=" bg-blue rounded-[8px] text-[16px] px-8 py-2 text-white font-poppins tracking-[1px] font-medium mt-8 w-full">
        Sign {parent === "signup" ? "Up" : "In"}
      </button>

      <div className="flex gap-3 items-center mt-1">
        <hr className="w-full" />
        <span className="font-poppins font-semibold opacity-50 text-[16px]">
          OR
        </span>
        <hr className="w-full" />
      </div>

      <button
        className="rounded-[8px] text-[16px] desktop:px-8 py-2 font-poppins tracking-[1px] font-medium mt-1 w-full border-solid border-[1px] border-black text-black flex items-center justify-center gap-2"
        onClick={(e) => {
          e.preventDefault();
          handleGoogle();
        }}
      >
        <FcGoogle className="text-[21px]" />{" "}
        <span className="leading-[1]">Continue with Google</span>
      </button>

      <div className="font-poppins flex gap-3 items-center justify-center mt-7 text-[16px]">
        <Link href={to}>
          <span className="underline">
            {parent === "signin" ? "Don't" : "Already"} have an account? Sign{" "}
            {parent === "signin" ? "up" : "in"}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Submit;
