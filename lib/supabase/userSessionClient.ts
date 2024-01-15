"use client";

import createSupabaseServerClient from "./client";

export default function readUserSessionInClient() {
  const supabase = createSupabaseServerClient();

  return supabase.auth.getSession();
}
