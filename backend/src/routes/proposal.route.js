import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role.js";
import {
  acceptProposal,
  applyJob,
  getJobProposals,
  rejectProposal,
} from "../controllers/proposal.controller.js";

const router = Router();

router
  .route("/proposal/apply/:JobId")
  .post(Protect, authorizedRole("freelancer"), applyJob);
router
  .route("/proposal/job/:JobId")
  .get(Protect, authorizedRole("client"), getJobProposals);
router
  .route("/proposal/accept/:id")
  .put(Protect, authorizedRole("client"), acceptProposal);
router
  .route("/proposal/reject/:id")
  .put(Protect, authorizedRole("client"), rejectProposal);
export default router;
