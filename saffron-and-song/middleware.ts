import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "fa"] as const;
type AppLocale = typeof SUPPORTED_LOCALES[number];

function detectLocale(req: NextRequest): AppLocale {
  const urlLocale = req.nextUrl.pathname.split("/")[1];
  if (SUPPORTED_LOCALES.includes(urlLocale as AppLocale)) return urlLocale as AppLocale;
  const header = req.headers.get("accept-language") || "";
  if (header.toLowerCase().includes("fa")) return "fa";
  return "en";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = SUPPORTED_LOCALES.some((l) => pathname.startsWith(`/${l}`));
  const locale = detectLocale(req);
  const dir = locale === "fa" ? "rtl" : "ltr";

  if (!hasLocale) {
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    const res = NextResponse.redirect(url);
    res.headers.set("x-locale", locale);
    res.headers.set("x-dir", dir);
    return res;
  }

  const res = NextResponse.next();
  res.headers.set("x-locale", locale);
  res.headers.set("x-dir", dir);
  return res;
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg)$).*)",
  ],
};


