import { model, models, Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    bookingId: { type: Schema.Types.ObjectId, ref: "Booking", required: true },
    customerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    workerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    tags: [{ type: String }],
    comment: String
  },
  { timestamps: true }
);

export const Review = models.Review || model("Review", reviewSchema);
