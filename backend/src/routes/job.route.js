import { Router } from "express";
import { createJob, deleteJob, getAllJobs, getSingleJob, updateJob } from "../controllers/job.controller.js";
import { Protect } from "../middleware/protect.js";
import { authorizedRole } from "../middleware/role.js";


const router = Router();

router.route("/jobs/").post(Protect,authorizedRole("client"),createJob);
router.route("/jobs/").get(Protect,getAllJobs);
router.route("/jobs/").get(Protect,getSingleJob);
router.route("/jobs/").put(Protect,updateJob);
router.route("/jobs/").delete(Protect,deleteJob)


export default router;