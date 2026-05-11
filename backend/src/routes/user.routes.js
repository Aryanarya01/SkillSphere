import { Router } from "express";
import { Login, Logout, Register } from "../controllers/user.controller.js";
import {Protect} from "../middleware/protect.js"
const router = Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Protect,Logout);
export default router;
