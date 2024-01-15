interface Cookie {
  name: string;
  value: string | null | undefined;
  options?: CookieOptions;
}

interface CookieOptions {
  domain?: string;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: string;
  expires?: Date;
}

export default Cookie;
