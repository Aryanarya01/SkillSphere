import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role.js";
import { AdminAnalysisData } from "../controllers/admin.controller.js";

const router = Router();

router.route("/stats").get(Protect, authorizedRole("admin"), AdminAnalysisData);

export default router;
