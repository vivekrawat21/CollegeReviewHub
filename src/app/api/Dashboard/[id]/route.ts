import { NextRequest, NextResponse } from "next/server";
export async function PUT(req: Request, res: Response) {
  try {
  } catch (err) {
    NextResponse.json({
      message: "Not Updated",
    });
  }
}

export async function DELETE(req: Request, res: Response) {
  try {
  } catch (err) {
    NextResponse.json({
      message: "Not Deleted",
    });
  }
}
