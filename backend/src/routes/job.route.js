import { Router } from "express";
import { createJob, getAllJobs, getSingleJob } from "../controllers/job.controller.js";


const router = Router();

router.route("/create_job").post(createJob);
router.route("get_all_job").get(getAllJobs);
router.route("get_single_job").get(getSingleJob);



export default router;