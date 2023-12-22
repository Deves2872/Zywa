import { Router } from "express";
import { getStatus } from "../controllers/getStatus.controller.js";

const router = Router();

router.route("/get_card_status").post(getStatus);

export default router;
