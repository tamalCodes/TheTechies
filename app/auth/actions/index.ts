"use server";

import { action } from "@/lib/SafeAction";
import createSupabaseServerClient from "@/lib/supabase/server";

import { z } from "zod";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  full_name: z.string().min(5),
});

export const signUpWithEmailAndPassword = action(
  authSchema,
  async ({ email, password, full_name }) => {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: full_name,
          username: email?.toString().split("@")[0],
        },
      },
    });
  }
);

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  // return JSON.stringify(result);
}
