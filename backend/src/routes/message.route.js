import { Router } from "express";
import { getConversations, getMessages, sendMessage } from "../controllers/message.controller.js";
import { Protect } from "../middleware/protect.js";

const router = Router();

router.route("/messages/send").post(Protect, sendMessage);
router.route("/messages/:id").get(Protect, getMessages);
router.route("/messages/conversations/all").get(Protect,getConversations);
export default router;
