import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb'; 
// (Agar path error de toh '@/lib/mongodb' use karein)
import Property from '../../../models/Property'; 
// (Agar path error de toh '@/models/Property' use karein)

// ==========================================
// GET API: Database se saari properties laane ke liye
// ==========================================
export async function GET() {
  try {
    // 1. Database se connect ho jao
    await connectToDatabase();
    
    // 2. Saari properties dhundo (.sort se nayi wali sabse upar aayegi)
    const properties = await Property.find({}).sort({ createdAt: -1 });
    
    // 3. Frontend ko data bhej do
    return NextResponse.json(
      { success: true, data: properties },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: "Properties lane mein error aayi", details: error.message },
      { status: 500 }
    );
  }
}

// ==========================================
// POST API: Admin panel se nayi property Database me dalne ke liye
// ==========================================
export async function POST(request: Request) {
  try {
    // 1. Frontend form se aane wala data (body) read karo
    const body = await request.json();
    
    // 2. Database se connect ho jao
    await connectToDatabase();
    
    // 3. Database me nayi property create (Save) karo
    const newProperty = await Property.create(body);
    
    // 4. Success message wapas bhej do
    return NextResponse.json(
      { success: true, message: "Property successfully add ho gayi!", data: newProperty },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: "Property add karne mein fail ho gaye", details: error.message },
      { status: 500 }
    );
  }
}