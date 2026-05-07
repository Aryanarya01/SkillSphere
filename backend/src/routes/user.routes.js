import { Router } from "express";
import { Login, Register } from "../controllers/user.controller";

const router = Router();

router.route("/register").post(Register);
router.route("/login").post(Login);


export default router;