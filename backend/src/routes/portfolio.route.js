import {Router} from "express"
import {Protect} from "../middleware/protect.js";
import upload from "../middleware/upload.middleware.js"
import { createProject, getUserProjects } from "../controllers/portfolio.controller.js";
const router = Router();

router.route("portfolio/create").post(Protect,upload.single("image"),createProject);
router.route("portfolio/:id").get(getUserProjects);
export default router;