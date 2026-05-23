import {Router} from "express"
import {Protect} from "../middleware/protect.js";
import upload from "../middleware/upload.middleware.js"
const router = Router();

router.route("portfolio/create").post(Protect,uploa)
export default router;