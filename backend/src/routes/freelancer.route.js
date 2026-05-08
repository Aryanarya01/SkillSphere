import express, { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role.js";
import {
  getAllFreelancer,
  getMyFreelancerProfile,
  getSingleFreelancer,
} from "../controllers/freelancer.controller.js";
const router = Router();

router
  .route("freelancers/my-profile")
  .get(Protect, authorizedRole("freelancer"), getMyFreelancerProfile);
router
  .route("freelancers/update-profile")
  .put(Protect, authorizeRoles("freelancer"), UpdateFreelancerProfile);
router.route("freelancers/all").get(getAllFreelancer);
router.route("/:id").get(getSingleFreelancer);

export default router;
