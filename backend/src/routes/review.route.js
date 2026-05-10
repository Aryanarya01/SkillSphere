import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { createReview, getUserReview } from "../controllers/review.controller.js";


const router = Router();

router.route("/reviews/create").post(Protect,createReview)
router.route("/review/:userId").get(Protect,getUserReview);
export default router;
