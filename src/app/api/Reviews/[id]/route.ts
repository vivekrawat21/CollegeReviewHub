import connectToDB from "../../../../DB/db";
import Review from "../../../../models/Review";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: any) {
  try {
    const { id } = params;
    const { newTitle: notesTitle, newDescription: notesDescription } =
      await request.json();

    await connectToDB();

    const updatedNotes = await Review.findByIdAndUpdate(id, {
      notesTitle,
      notesDescription,
    });

    if (!updatedNotes) {
      const response = NextResponse.json(
        { error: "Not Updated" },
        { status: 404 }
      );
      response.headers.set("Access-Control-Allow-Origin", "*");
      response.headers.set("Access-Control-Allow-Methods", "*");
      response.headers.set("Access-Control-Allow-Headers", "*");
      return response;
    }

    const response = NextResponse.json({
      message: "Updated Notes Successfully",
      status: 200,
    });
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "*");
    response.headers.set("Access-Control-Allow-Headers", "*");

    return response;
  } catch (error: any) {
    console.error("Error in PUT request:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: any, { params }: any) {
  const { id } = params;
  await connectToDB();
  const Note = await Review.findOne({ _id: id });

  const response = NextResponse.json({ Note }, { status: 200 });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "*");
  response.headers.set("Access-Control-Allow-Headers", "*");

  return response;
}
