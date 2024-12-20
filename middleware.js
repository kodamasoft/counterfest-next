import { NextResponse } from "next/server";

let locales = ['en', 'jp'];

// Get the preferred locale from the request headers
function getLocale(request) {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return locales[0]; // default to first locale if none provided

  const preferredLocales = acceptLanguage.split(',').map((lang) => lang.split(';')[0]);
  return preferredLocales.find((locale) => locales.includes(locale)) || locales[0];
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: 
  [
    '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'
  ]
};
