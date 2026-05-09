import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role";


const router = Router();

router.route("/proposal/:JobId").post(Protect,authorizedRole("freelancer"),)

export default router;
