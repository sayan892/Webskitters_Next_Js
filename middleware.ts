import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  
  let verify = request.cookies.get("loggedIn");

  if (!verify) {
    return NextResponse.redirect(
      new URL('/', request.url)
    )
  }
}
 
export const config = {
  // Matcher should be an array of strings or regular expressions
  matcher: '/product'
}
