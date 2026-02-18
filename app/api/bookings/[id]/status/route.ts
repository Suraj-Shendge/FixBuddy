import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { Booking } from "@/models/Booking";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  const { status } = await req.json();
  const booking = await Booking.findByIdAndUpdate(params.id, { status }, { new: true });
  if (!booking) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(booking);
}
