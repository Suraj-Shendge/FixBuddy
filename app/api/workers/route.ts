import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { WorkerProfile } from "@/models/WorkerProfile";
import { sortWorkers } from "@/lib/utils/matching";

export async function GET(req: NextRequest) {
  await connectDB();
  const skill = req.nextUrl.searchParams.get("skill");
  const docs = await WorkerProfile.find(skill ? { skills: skill } : {}).lean();
  const sorted = sortWorkers(docs.map((doc: any) => ({ ...doc, distance: doc.distance })));
  return NextResponse.json(sorted);
}
