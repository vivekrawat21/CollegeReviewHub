import connectToDB from "@/DB/db";
import Review from "@/models/Review";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function GET(request: NextRequest, { params }: any) {
  try {
    const Reviews = await Review.find({ users: params.id });

    const response = NextResponse.json({
      message: "Review fetched successfully!",
      success: true,
      Reviews,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
