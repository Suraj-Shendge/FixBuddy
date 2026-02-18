import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { WorkerProfile } from "@/models/WorkerProfile";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  const worker = await WorkerProfile.findOne({ userId: params.id });
  if (!worker) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(worker);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  const payload = await req.json();
  const worker = await WorkerProfile.findOneAndUpdate({ userId: params.id }, payload, { new: true });
  return NextResponse.json(worker);
}
