import { Router } from "express";
import { createJob } from "../controllers/job.controller";


const router = Router();

router.route("/create_job").post(createJob);
route


export default router;