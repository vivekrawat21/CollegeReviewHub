import connectToDB from "@/DB/db";
import Review from "@/models/Review";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function PUT(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { _id, collegeName, review, users } = reqBody;

    const reviews = await Review.findByIdAndUpdate(
      { _id },
      {
        collegeName,
        review,
        users,
      }
    );

    console.log(reviews);

    const response = NextResponse.json(
      {
        message: "Review updated successfully",
        success: true,
      },
      {
        status: 200,
      }
    );

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { _id } = reqBody;

    const reviews = await Review.findByIdAndDelete({ _id });

    console.log(reviews);

    const response = NextResponse.json(
      {
        message: "Review deleted successfully",
        success: true,
      },
      {
        status: 200,
      }
    );

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { users } = reqBody;
    const reviews = await Review.find({
      users,
    });

    const response = NextResponse.json(
      {
        message: "Reviews fetched successfully",
        success: true,
        reviews,
      },
      {
        status: 200,
      }
    );

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
