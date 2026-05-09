import { Router } from "express";
import { createJob, deleteJob, getAllJobs, getSingleJob, updateJob } from "../controllers/job.controller.js";


const router = Router();

router.route("/create_job").post(createJob);
router.route("get_all_job").get(getAllJobs);
router.route("get_single_job").get(getSingleJob);
router.route("update_job").put(updateJob);
router.route("delete_job").delete(deleteJob)


export default router;