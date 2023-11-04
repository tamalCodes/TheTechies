import Navbar from "components/shared/Navbar";
import Landing from "components/private/Landing";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen relative pt-6 max-xs:overflow-x-hidden">
        <div className="blob1"></div>
        <div className="blob2"></div>

        <Landing />
      </div>
    </>
  );
}
