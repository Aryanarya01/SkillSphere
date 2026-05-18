import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { getNotification, markAsRead } from "../controllers/notification.controller.js";


const router = Router();


router.route("/notifications").get(Protect,getNotification)
router.route("/notifications/read").put(Protect,markAsRead);

export default router;