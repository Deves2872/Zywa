import { asyncHandler } from "../utils/asyncHandler.js";
import { Order } from "../models/orders.models.js";
import { ApiError } from "../utils/ApiError.js";

export const getStatus = asyncHandler(async (req, res) => {
  try {
    const { cardId, userContact } = req.body || req.query;
    let newcardId;
    if (!cardId) {
      newcardId = await Order.find({ userContact: userContact });
    } else {
      newcardId = await Order.find({ cardId: cardId });
    }
    console.log(newcardId[0]);
    const { SystemLog } = newcardId[0];
    console.log(SystemLog);
    SystemLog.sort((a, b) => a.Time - b.Time);
    return res.json(SystemLog);
  } catch (error) {
    throw new ApiError(400, "Something went wrong!!");
  }
});
