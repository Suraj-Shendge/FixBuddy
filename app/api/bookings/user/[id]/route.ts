import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { Booking } from "@/models/Booking";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const bookings = await Booking.find({ $or: [{ customerId: params.id }, { workerId: params.id }] }).sort({ createdAt: -1 });
  return NextResponse.json(bookings);
}
