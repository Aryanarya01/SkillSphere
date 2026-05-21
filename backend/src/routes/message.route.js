import { Router } from "express";
import { sendMessage } from "../controllers/message.controller.js";
import {Protect} from "../middleware/protect.js"

const router = Router();

router.route("messages/send").post(Protect,sendMessage)

export default router;
