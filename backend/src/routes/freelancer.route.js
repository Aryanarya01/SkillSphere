import express, { Router } from "express"
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role";
const router = Router();


router.route("/my-profile").get(Protect,authorizedRole())


export default router