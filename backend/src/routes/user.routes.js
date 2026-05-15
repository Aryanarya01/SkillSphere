import { Router } from "express";
import {
  Login,
  Logout,
  Register,
  updateProfile,
} from "../controllers/user.controller.js";
import { Protect } from "../middleware/protect.js";
import upload from "../middleware/upload.middleware.js";
const router = Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Protect, Logout);
router
  .route("/update-profile")
  .put(Protect, upload.single("profilePicture"), updateProfile);
export default router;
