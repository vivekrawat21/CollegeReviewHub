import connectToDB from "@/DB/db";
import Review from "@/models/Review";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function GET(request: NextRequest) {
  try {
    const loggedInUserId = localStorage.getItem("id");

    if (!loggedInUserId) {
      return NextResponse.json(
        { error: "User not logged in or userId not found in localStorage" },
        { status: 401 }
      );
    }

    const reviews = await Review.find({ _id: loggedInUserId });

    const response = NextResponse.json({
      message: "Review fetched successfully!",
      success: true,
      reviews,
    });
    console.log(response);

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
