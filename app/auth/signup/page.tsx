import { Metadata } from "next";
import SignUpForm from "./components/SignUpForm";

export const metadata: Metadata = {
  title: "The Techies | Sign Up",
  description: "The best tech community ever.",
};

export default async function SignUp() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen relative pt-6 overflow-hidden max-xs:overflow-x-hidden">
        <div className="relative z-30 mb-10 border-solid border-yellow-400 border-[1px] bg-yellow-100 px-4 py-2 rounded-[6px] font-montserrat">
          <p>
            ⚠️ We are still working on the Database, if you sign up now your
            data might be deleted.
          </p>
        </div>
        <div className="blob1"></div>
        <div className="blob2"></div>
        <SignUpForm />
      </div>
    </>
  );
}
