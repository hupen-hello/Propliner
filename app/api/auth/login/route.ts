import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'propliners-super-secret-key');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    
    if (email === 'propline@gmail.com' && password === 'admin@123') {
      
      const token = await new SignJWT({ email, role: 'admin' })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('2h')
        .sign(SECRET_KEY);

      // 2. Response 
      const response = NextResponse.json({ success: true, message: 'Login successful' }, { status: 200 });

      // 3. Cookie 
      response.cookies.set({
        name: 'admin_token',
        value: token,
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 2, // 2 hours
      });

      return response;
    }

    // Galat password/email
    return NextResponse.json({ success: false, message: 'Invalid email or password' }, { status: 401 });

  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}