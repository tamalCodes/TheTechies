"use server";

import { cookies } from "next/headers";

export default async function setCookies(data: { name: string; value?: any }) {
  cookies().set(data?.name, data?.value);
}
