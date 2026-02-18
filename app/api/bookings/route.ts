import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { Booking } from "@/models/Booking";

export async function POST(req: NextRequest) {
  await connectDB();
  const payload = await req.json();
  const booking = await Booking.create(payload);
  return NextResponse.json(booking, { status: 201 });
}
