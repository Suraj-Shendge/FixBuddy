import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db/mongoose";
import { User } from "@/models/User";
import { WorkerProfile } from "@/models/WorkerProfile";

async function seed() {
  await connectDB();
  await User.deleteMany({});
  await WorkerProfile.deleteMany({});

  const password = await bcrypt.hash("123456", 10);

  const customer = await User.create({ name: "Asha", phone: "9000000001", password, role: "customer" });
  const worker = await User.create({ name: "Ravi", phone: "9000000002", password, role: "worker" });
  await User.create({ name: "Admin", phone: "9000000003", password, role: "admin" });

  await WorkerProfile.create({
    userId: worker._id,
    skills: ["Plumber", "Electrician"],
    experienceYears: 6,
    skillLevel: "gold",
    availabilityStatus: "available",
    completedJobs: 120,
    ratingAverage: 4.8,
    totalReviews: 93,
    approved: true
  });

  console.log("Seed complete", { customer: customer.id, worker: worker.id });
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
