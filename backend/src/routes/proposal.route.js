import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role.js";
import { applyJob } from "../controllers/proposal.controller.js";


const router = Router();

router.route("/proposal/:JobId").post(Protect,authorizedRole("freelancer"),applyJob);


export default router;
