import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role.js";
import { AdminAnalysisData, deleteJobAdmin, deleteUser, getAllJobsAdmin, getAllUser } from "../controllers/admin.controller.js";

const router = Router();

router.route("/admin/stats").get(Protect, authorizedRole("admin"), AdminAnalysisData);
router.route("/admin/users").get(Protect,authorizedRole("admin"),getAllUser);
router.route("/admin/user/:id").delete(Protect,authorizedRole("admin"),deleteUser);
router.route("/admin/jobs").get(Protect,authorizedRole("admin"),getAllJobsAdmin);
router.route("/admin/job/:id").delete(Protect,authorizedRole("admin"),deleteJobAdmin);


export default router;
