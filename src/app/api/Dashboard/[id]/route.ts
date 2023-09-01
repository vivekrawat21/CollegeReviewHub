import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: Request, res: Response) {
  try {
  } catch (err) {
    NextResponse.json({
      message: "Not Updated Yet",
    });
  }
}

export async function DELETE(req: Request, res: Response) {
  try {
  } catch (err) {
    NextResponse.json({
      message: "Not Deleted Yet",
    });
  }
}

export async function GET(req: Request, { params }: any, res: Response) {
  console.log(params);
  return NextResponse.json({
    message: "Getting Data",
  });
}
