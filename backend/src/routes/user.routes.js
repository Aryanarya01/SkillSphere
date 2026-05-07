import { Router } from "express";
import { Register } from "../controllers/user.controller";

const router = Router();

router.route("/register").post(Register)