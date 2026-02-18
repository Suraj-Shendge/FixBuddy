import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { Review } from "@/models/Review";
import { WorkerProfile } from "@/models/WorkerProfile";

export async function POST(req: NextRequest) {
  await connectDB();
  const payload = await req.json();
  const review = await Review.create(payload);

  const workerReviews = await Review.find({ workerId: payload.workerId });
  const avg = workerReviews.reduce((acc, cur) => acc + cur.rating, 0) / workerReviews.length;
  await WorkerProfile.findOneAndUpdate({ userId: payload.workerId }, { ratingAverage: avg, totalReviews: workerReviews.length });

  return NextResponse.json(review, { status: 201 });
}
