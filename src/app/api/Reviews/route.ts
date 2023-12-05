import connectToDB from "@/DB/db";
import Review from "@/models/Review";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";

connectToDB();

export async function GET(request: NextRequest) {
  try {
    const reviews = await Review.find().populate("user");

    const response = NextResponse.json({
      message: "Review fetched successfully",
      success: true,
      reviews,
      User,
    });

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { collegeName, review, creator, creatorImgUrl } = reqBody;
    console.log(reqBody);

    const reviews = await Review.create({
      collegeName,
      review,
      User,
      creator,
      creatorImgUrl,
    });

    console.log(reviews);

    const response = NextResponse.json({
      message: "Review created successfully!",
      success: true,
    });

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectToDB();
  await Review.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
