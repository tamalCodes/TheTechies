import Landing from "@/components/private/Landing";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      {/* <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: "Poppins",
            fontSize: "1.5rem",
          },
        }}
      /> */}

      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen relative pt-6 max-xs:overflow-x-hidden">
        <div className="blob1"></div>
        <div className="blob2"></div>

        <Landing />
      </div>
    </>
  );
}