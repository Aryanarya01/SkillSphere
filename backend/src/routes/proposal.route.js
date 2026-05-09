import { Router } from "express";
import { Protect } from "../middleware/protect";


const router = Router();

router.route("/proposal/:JobId").post(Protect)

export default router;
