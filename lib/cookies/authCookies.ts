"use server";

import { cookies } from "next/headers";

export async function setAuthCookies() {
  cookies().set("oauth_initiated", "true");
}

export async function getAuthCookies() {
  const cookie = cookies().get("oauth_initiated");
  return cookie ? true : false;
}

export async function deleteAuthCookies() {
  cookies().delete("oauth_initiated");
}
