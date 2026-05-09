import { Router } from "express";
import { createJob, deleteJob, getAllJobs, getSingleJob, updateJob } from "../controllers/job.controller.js";
import { Protect } from "../middleware/protect.js";


const router = Router();

router.route("/create_job").post(Protect,createJob);
router.route("/get_all_job").get(Protect,getAllJobs);
router.route("/get_single_job").get(Protect,getSingleJob);
router.route("/update_job").put(Protect,updateJob);
router.route("/delete_job").delete(Protect,deleteJob)


export default router;