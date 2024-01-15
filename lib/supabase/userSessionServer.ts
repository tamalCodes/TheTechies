"use server";

import createSupabaseServerClient from "./server";

export default async function readUserSessionInServer() {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.getSession();
}
