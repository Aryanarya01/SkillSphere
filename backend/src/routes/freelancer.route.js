import express, { Router } from "express"
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role.js";
import { getMyFreelancerProfile } from "../controllers/freelancer.controller";
const router = Router();


router.route("/my-profile").get(Protect,authorizedRole("freelancer"),getMyFreelancerProfile);



export default router