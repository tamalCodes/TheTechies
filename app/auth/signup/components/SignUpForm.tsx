"use client";

import Submit from "@/components/shared/auth/Submit";
import Side from "@/public/assets/auth/side.png";
import Image from "next/image";
import { useState } from "react";

import ToastStyle from "@/static/data/ToastStyle";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { signUpWithEmailAndPassword } from "../../actions";

const SignUpForm = () => {
  const [credentials, setCredentials] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const router = useRouter();
  const [seePassword, setSeePassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signUpWithEmailAndPassword(credentials);
    const { error } = JSON.parse(res);

    if (error?.message) {
      toast.error(error.message);
    } else {
      toast.success("Logged in");

      setTimeout(() => {
        router.push("/");
      }, 700);
    }
  };

  return (
    <>
      <Toaster toastOptions={ToastStyle} />
      <div className="md:formbg relative p-6 w-[88vw] desktop:w-[850px]">
        <div className="flex gap-4 rounded-[12px] justify-around items-center ">
          <div className="">
            <h1 className="font-poppins text-[1.8rem] font-bold text-black">
              Sign Up
            </h1>
            <form
              action="submit"
              className="flex flex-col gap-5 mt-4"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
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
                  value={credentials.fullname}
                  onChange={handleChange}
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
                  value={credentials.email}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <label htmlFor="password" className="auth_label">
                  Password
                </label>
                <input
                  type={seePassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="*********"
                  className="auth_input"
                  value={credentials.password}
                  onChange={handleChange}
                />

                {seePassword ? (
                  <FaRegEye
                    className="absolute top-[39px] right-[10px] text-[#00000082] text-[20px] cursor-pointer select-none"
                    onClick={() => {
                      setSeePassword(!seePassword);
                    }}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="absolute top-[39px] right-[10px] text-[#00000082] text-[20px] cursor-pointer select-none"
                    onClick={() => {
                      setSeePassword(!seePassword);
                    }}
                  />
                )}
              </div>

              <Submit to="/auth/signin" parent="signup" />
            </form>
          </div>

          <div>
            <Image
              src={Side}
              width={400}
              height={400}
              alt="side"
              className="hidden desktop:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
