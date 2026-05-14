import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role.js";
import { AdminAnalysisData, deleteUser, getAllUser } from "../controllers/admin.controller.js";

const router = Router();

router.route("/admin/stats").get(Protect, authorizedRole("admin"), AdminAnalysisData);
router.route("admin/users").get(Protect,authorizedRole("admin"),getAllUser);
router.route("/admin/user/:id").delete(Protect,authorizedRole("admin"),deleteUser);

export default router;
