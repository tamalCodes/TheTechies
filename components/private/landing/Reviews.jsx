import Image from "next/image";

import user1 from "public/assets/landing/user1.webp";
import user2 from "public/assets/landing/user2.webp";
import user3 from "public/assets/landing/user3.webp";
import user4 from "public/assets/landing/user4.webp";

export default function Reviews() {
  return (
    <>
      <div className="flex items-center tab:flex-col gap-2 tab:items-start ">
        <div className="relative flex w-[109px] h-[33px]">
          <Image
            src={user1}
            width={400}
            height={400}
            alt="Hello world"
            className="avatar left-0 z-[4]"
          />
          <Image
            src={user2}
            width={400}
            height={400}
            alt="Hello world"
            className="avatar left-12 z-[2] "
          />
          <Image
            src={user3}
            width={400}
            height={400}
            alt="Hello world"
            className="avatar left-6 z-[3]"
          />
          <Image
            src={user4}
            width={400}
            height={400}
            alt="Hello world"
            className="avatar  left-[75px]"
          />
        </div>

        <div className="h-[46px] border-l-[3px] border-l-blue border-solid tab:hidden"></div>

        <p className="font-poppins text-black text-[16px] font-normal m-0 leading-none">
          Trusted by over <br className="tab:hidden" />
          <span className="font-semibold">1000+</span> techies
        </p>
      </div>
    </>
  );
}
