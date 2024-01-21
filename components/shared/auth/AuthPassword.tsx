"use client";

import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const AuthPassword = () => {
  const [seePassword, setSeePassword] = useState(false);

  return (
    <>
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
          // value={credentials.password}
          // onChange={handleChange}
        />

        {seePassword ? (
          <FaRegEye
            className="absolute top-[30px] right-[10px] text-[#00000082] text-[20px] cursor-pointer select-none"
            onClick={() => {
              setSeePassword(!seePassword);
            }}
          />
        ) : (
          <FaRegEyeSlash
            className="absolute top-[30px] right-[10px] text-[#00000082] text-[20px] cursor-pointer select-none"
            onClick={() => {
              setSeePassword(!seePassword);
            }}
          />
        )}
      </div>
    </>
  );
};

export default AuthPassword;
