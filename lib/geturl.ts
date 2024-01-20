import { setAuthCookies } from "./cookies/authCookies";

const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ??
    "http://localhost:3000/";

  url = url.includes("http") ? url : `https://${url}/auth/callback`;
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;

  setAuthCookies();

  return url;
};

export default getURL;
