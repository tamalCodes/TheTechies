import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Navbar from "components/shared/Navbar";
import Footer from "components/shared/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen relative px-0 py-[10px] bg-gradient-to-b from-gray-900 from-30% to-black ">
        <Image
          src="./assets/linegrid.svg"
          width={800}
          height={800}
          alt="Hello world"
          className="abosolute w-full h-full inset-0"
        />
      </div>
    </>
  );
}
