import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { createReview } from "../controllers/review.controller.js";


const router = Router();

router.route("/reviews/create").post(Protect,createReview)

export default router;
