import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb'; 
// (Agar import path error de, toh '@/lib/mongodb' try kijiyega)

export async function GET() {
  try {
    await connectToDatabase();
    
    return NextResponse.json(
      { status: "success", message: "Mubarak ho! Database ekdum sahi connect ho gaya hai! 🎉" },
      { status: 200 }
    );

  } catch (error: any) {
    return NextResponse.json(
      { status: "error", message: "Connection fail ho gaya bhai.", details: error.message },
      { status: 500 }
    );
  }
}