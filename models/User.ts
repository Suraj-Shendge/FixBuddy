import { model, models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["worker", "customer", "admin"], required: true },
    avatar: String,
    location: {
      lat: Number,
      lng: Number,
      city: String
    },
    status: { type: String, enum: ["active", "suspended"], default: "active" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

export const User = models.User || model("User", userSchema);
