import { model, models, Schema } from "mongoose";

const workerProfileSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    skills: [{ type: String, required: true }],
    experienceYears: { type: Number, default: 0 },
    skillLevel: { type: String, enum: ["bronze", "silver", "gold", "pro"], default: "bronze" },
    availabilityStatus: { type: String, enum: ["available", "busy", "offline"], default: "offline" },
    completedJobs: { type: Number, default: 0 },
    ratingAverage: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
    approved: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const WorkerProfile = models.WorkerProfile || model("WorkerProfile", workerProfileSchema);
