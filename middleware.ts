import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  console.log('hello world');
  return NextResponse.redirect(new URL('/', request.url));
  return Response.json({ msg: 'hello world' });
}

export const config = {
  matcher: ['/about/:path*', '/tours/:path*'],
};
