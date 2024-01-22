"use client";

import Side from "@/public/assets/auth/side.png";
import Image from "next/image";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/Form";
import { Input } from "@/components/shared/Input";
import Submit from "@/components/shared/auth/Submit";

import { formSchemaSignIn } from "@/lib/FormSchema";
import ToastStyle from "@/static/data/ToastStyle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import * as z from "zod";
import { signInWithEmailAndPassword } from "../../actions";

const SignInForm = () => {
  const [seePassword, setSeePassword] = useState(false);
  const router = useRouter();

  const { execute, result, status } = useAction(signInWithEmailAndPassword, {
    onSuccess: () => {
      toast.success("Signed in");
      setTimeout(() => {
        router.push("/");
      }, 800);
    },

    onError: (error) => {
      const serverError = error?.serverError;
      const errorMessage =
        typeof serverError === "string" ? serverError : "An error occurred";
      toast.error(errorMessage);
    },
  });

  const form = useForm<z.infer<typeof formSchemaSignIn>>({
    resolver: zodResolver(formSchemaSignIn),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchemaSignIn>) {
    execute(values);
  }

  return (
    <>
      <Toaster toastOptions={ToastStyle} />
      <div className="md:formbg relative p-6 w-[88vw] desktop:w-[850px]">
        <div className="flex gap-4 rounded-[12px] justify-around items-center ">
          <div className="">
            <h1 className="font-poppins text-[1.8rem] font-bold text-black mb-4">
              Sign In
            </h1>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="johndoe@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            placeholder="*********"
                            {...field}
                            type={seePassword ? "text" : "password"}
                          />
                        </FormControl>
                        {seePassword ? (
                          <FaRegEye
                            className="absolute top-[13px] right-[10px] text-[#00000082] text-[20px] cursor-pointer select-none"
                            onClick={() => {
                              setSeePassword(!seePassword);
                            }}
                          />
                        ) : (
                          <FaRegEyeSlash
                            className="absolute top-[13px] right-[10px] text-[#00000082] text-[20px] cursor-pointer select-none"
                            onClick={() => {
                              setSeePassword(!seePassword);
                            }}
                          />
                        )}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Submit to="/auth/signup" parent="signin" status={status} />
              </form>
            </Form>
          </div>

          <div>
            <Image
              src={Side}
              width={400}
              height={400}
              alt="side"
              className="hidden desktop:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
