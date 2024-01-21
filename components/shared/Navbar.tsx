"use client";

import { deleteAuthCookies, getAuthCookies } from "@/lib/cookies/authCookies";
import signOut from "@/lib/supabase/signOut";
import readUserSessionInClient from "@/lib/supabase/userSessionClient";
import brand from "@/public/assets/Navbar/brand.svg";
import NavbarItems from "@/static/data/NavbarItems";
import ToastStyle from "@/static/data/ToastStyle";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineRight } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const router = useRouter();

  async function checkOAuth() {
    const cookies = await getAuthCookies();

    if (cookies) {
      toast.success("Logged in");
      deleteAuthCookies();
    }
  }

  async function fetchUserSession() {
    try {
      // checkOAuth();
      const { data } = await readUserSessionInClient();
      console.log(data);
      setIsUserLoggedIn(!!data?.session);
    } catch (error) {
      console.error("Error fetching user session:", error);
    }
  }

  useEffect(() => {
    fetchUserSession();
  }, []);

  return (
    <>
      <Toaster toastOptions={ToastStyle} />
      <nav className="py-4 desktop:py-7  absolute z-10 w-full flex">
        <div className="flex items-center justify-between mx-auto w-full px-8 desktop:px-[120px]">
          <Link href="/">
            <Image src={brand} alt="brand" height={38} width={38} />
          </Link>

          <div className="desktop:flex items-center gap-6 hidden">
            {NavbarItems?.map((item, index) => {
              return (
                <Link
                  href={item.url}
                  className="font-poppins font-[600] text-[15px] no-underline pt-[10px] text-black"
                  key={index}
                >
                  {item?.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            {isUserLoggedIn ? (
              <button className=" hidden desktop:flex items-center justify-center gap-2 px-[18px] py-[12px] rounded-[6px] bg-blue text-white">
                <span
                  className="text-[15px] font-poppins leading-none"
                  onClick={() => {
                    signOut();
                    toast.success("Logged out");
                    setIsUserLoggedIn(false);
                    router.push("/");
                  }}
                >
                  Logout
                </span>
              </button>
            ) : (
              <Link href={"/auth/signup"}>
                <button className=" hidden desktop:flex items-center justify-center gap-2 px-[18px] py-[12px] rounded-[6px] bg-blue text-white">
                  <span className="text-[15px] font-poppins leading-none">
                    Sign Up
                  </span>
                  <AiOutlineRight className="text-[15px]" />
                </button>
              </Link>
            )}

            <div className="bg-[#ffffff3c] px-[20px] py-[8px] rounded-[20px] desktop:hidden ">
              <GiHamburgerMenu className="w-[24px] font-[500] h-[24px] text-blue" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
