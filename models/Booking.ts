import { model, models, Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    customerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    workerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    skill: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    price: { type: Number, required: true },
    status: {
      type: String,
      enum: ["requested", "accepted", "on_the_way", "completed", "cancelled"],
      default: "requested"
    }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

export const Booking = models.Booking || model("Booking", bookingSchema);
