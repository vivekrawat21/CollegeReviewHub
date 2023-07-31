import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    request.cookies.delete("token");
    return NextResponse.json({
      message: "Logout successful",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
