import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role.js";
import { acceptProposal, applyJob, getJobProposals } from "../controllers/proposal.controller.js";


const router = Router();

router.route("/proposal/apply/:JobId").post(Protect,authorizedRole("freelancer"),applyJob);
router.route("/proposal/job/:JobId").get(Protect, authorizeRole("client"),getJobProposals)
router.route("/proposal/accept/:id").put(Protect,authorizeRole("client"),acceptProposal);

export default router;
