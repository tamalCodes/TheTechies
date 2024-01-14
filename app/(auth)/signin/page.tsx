import SignInForm from "./components/SignInForm";

export default function SignIn() {
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
