import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  let users = await prisma.user.findFirst({
    where: { id: "acc4fb7b-6ee0-4a14-b272-dd6725534c16" },
  });
  return NextResponse.json(users);
}
