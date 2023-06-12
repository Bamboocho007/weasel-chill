import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({
    name: "User 1",
    age: 18,
  });
}
