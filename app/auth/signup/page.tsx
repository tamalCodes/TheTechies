import { Metadata } from "next";
import SignUpForm from "./components/SignUpForm";

export const metadata: Metadata = {
  title: "The Techies | Sign Up",
  description: "The best tech community ever.",
};

export default async function SignUp() {
  // const { data } = await readUserSessionInServer();

  // if (data.session) {
  //   return redirect("/");
  // }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen relative pt-6 max-xs:overflow-x-hidden">
        <div className="blob1"></div>
        <div className="blob2"></div>
        <SignUpForm />
      </div>
    </>
  );
}
