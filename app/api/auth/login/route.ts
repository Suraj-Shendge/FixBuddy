import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db/mongoose";
import { User } from "@/models/User";

export async function POST(req: NextRequest) {
  const { phone, password } = await req.json();
  await connectDB();
  const user = await User.findOne({ phone });
  if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  return NextResponse.json({ id: user.id, role: user.role, name: user.name });
}
