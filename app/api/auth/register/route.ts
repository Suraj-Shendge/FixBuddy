import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db/mongoose";
import { User } from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const hashed = await bcrypt.hash(body.password, 10);
    await connectDB();
    const user = await User.create({ ...body, password: hashed });
    return NextResponse.json({ id: user.id, role: user.role }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Registration failed", details: (error as Error).message }, { status: 400 });
  }
}
