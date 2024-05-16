import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  console.log('Middleware executed')
  let verify = request.cookies.get("loggedIn");
  if (!verify) {
    return NextResponse.redirect(
      new URL('/', request.url)
    )
  }

}
 

export const config = {
  matcher: '/product',
}