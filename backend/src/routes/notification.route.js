import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { getNotification } from "../controllers/notification.controller.js";


const router = Router();


router.route("/").get(Protect,getNotification)

export default router;