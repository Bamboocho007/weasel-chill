import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  let users = await prisma.user.findFirst({
    where: { id: params.id },
  });
  return NextResponse.json(users);
}
