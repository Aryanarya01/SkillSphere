import { Router } from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import { Protect } from "../middleware/protect.js";

const router = Router();

router.route("messages/send").post(Protect, sendMessage);
router.route("messages/:id").get(Protect, getMessages);

export default router;
