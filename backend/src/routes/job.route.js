import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getSingleJob,
  updateJob,
} from "../controllers/job.controller.js";
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role.js";

const router = Router();

router.route("/jobs/create").post(Protect, authorizedRole("client"), createJob);
router.route("/jobs").get(Protect, getAllJobs);
router.route("/jobs/:id").get(Protect, getSingleJob);
router.route("/jobs/:id").put(Protect, authorizedRole("client"), updateJob);
router.route("/jobs/:id").delete(Protect, authorizedRole("client"), deleteJob);

export default router;
