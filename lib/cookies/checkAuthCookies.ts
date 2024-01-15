"use server";

import { cookies } from "next/headers";

export default async function checkAuthCookies(data: { name: string }) {
  if (cookies().get(data.name)) {
    cookies().delete(data.name);
    return true;
  }

  return false;
}
