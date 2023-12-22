import mongoose, { Schema } from "mongoose";

const ordersSchema = new Schema({
  cardId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  userContact: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  SystemLog: [
    {
      Time: {
        type: Date,
        required: true,
      },
      Comment: {
        type: String,
      },
    },
  ],
});

export const Order = mongoose.model("Order", ordersSchema);
