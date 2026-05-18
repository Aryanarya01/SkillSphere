import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role.js";
import {
  getAllFreelancer,
  getMyFreelancerProfile,
  getSingleFreelancer,
  updateFreelancerProfile,
} from "../controllers/freelancer.controller.js";
const router = Router();

router
  .route("/freelancers/my_profile")
  .get(Protect, authorizedRole("freelancer"), getMyFreelancerProfile);
router
  .route("/freelancers/update_profile")
  .put(Protect, authorizedRole("freelancer"), updateFreelancerProfile);
router.route("/freelancers/all").get(getAllFreelancer);
router.route("/freelancers/:id").get(getSingleFreelancer);
router.route("/freelancer/verify/:id").put(Protect,authorizedRole("admin"),

export default router;
