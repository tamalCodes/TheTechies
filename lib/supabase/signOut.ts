"use server";

import createSupabaseServerClient from "./server";

export default async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
}
