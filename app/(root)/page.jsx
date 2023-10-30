import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Navbar from "components/shared/Navbar";
import Footer from "components/shared/Footer";
import Landing from "components/private/Landing";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen relative px-0 py-[10px] ">
        <div className="blob1"></div>
        <div className="blob2"></div>

        <Landing />
      </div>
    </>
  );
}
