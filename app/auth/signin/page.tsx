import { Metadata } from "next";
import SignInForm from "./components/SignInForm";

export const metadata: Metadata = {
  title: "The Techies | Sign In",
  description: "The best tech community ever.",
};

export default async function SignIn() {
  // const { data } = await readUserSessionInServer();

  // if (data.session) {
  //   return redirect("/");
  // }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen relative pt-6 max-xs:overflow-x-hidden">
        <div className="blob1"></div>
        <div className="blob2"></div>
        <SignInForm />
      </div>
    </>
  );
}
