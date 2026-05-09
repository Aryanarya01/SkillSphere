import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role.js";
import { applyJob, getJobProposals } from "../controllers/proposal.controller.js";


const router = Router();

router.route("/proposal/apply/:JobId").post(Protect,authorizedRole("freelancer"),applyJob);
router.route("/proposal/job/:JobId").get(Protect, authorizeRoles("client"),getJobProposals)

export default router;
