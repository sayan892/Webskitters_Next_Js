import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  
  const url = request.nextUrl.clone();

  let isLogin = request.cookies.get("loggedIn");
  if (!isLogin) {
    if (request.nextUrl.pathname.startsWith("/product")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (url.pathname === "/") {
      url.pathname = "/product";
      return NextResponse.redirect(url);
    }
  }
}
