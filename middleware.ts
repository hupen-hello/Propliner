import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'propliners-super-secret-key');

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  const isProtectedPath = path.startsWith('/admin');
  const isLoginPath = path === '/superlogin';

  const token = request.cookies.get('admin_token')?.value;

  // FIX: Agar token nahi hai aur admin khol raha hai, toh '/superlogin' par bhejo
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL('/superlogin', request.url));
  }

  // Agar token hai, toh verify karo
  if (isProtectedPath && token) {
    try {
      await jwtVerify(token, SECRET_KEY);
      return NextResponse.next(); 
    } catch (error) {
      const response = NextResponse.redirect(new URL('/superlogin', request.url));
      response.cookies.delete('admin_token');
      return response;
    }
  }

  // Agar pehle se login hai aur login page khol raha hai, toh admin par bhejo
  if (isLoginPath && token) {
    try {
      await jwtVerify(token, SECRET_KEY);
      return NextResponse.redirect(new URL('/admin', request.url)); 
    } catch (error) {
      // Ignore
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/superlogin'],
};