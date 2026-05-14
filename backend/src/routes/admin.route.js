import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role.js";


const router = Router();

router.route("/stats").get(Protect,authorizedRole("admin"),)

export default router;