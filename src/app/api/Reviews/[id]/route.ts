import connectToDB from "@/DB/db";
import Review from "@/models/Review";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const { id } = params;
  await connectToDB();
  const topic = await Review.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
