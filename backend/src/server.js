import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import userRouter from "./routes/user.routes.js";
import freelancerRouter from "./routes/freelancer.route.js";
import jobRoute from "./routes/job.route.js";
import proposalRoute from "./routes/proposal.route.js";
import reviweRoute from "./routes/review.route.js";
import adminRoute from "./routes/admin.route.js";
import notificationRoute from "./routes/notification.route.js"



const app = express();
const port = 9090;

dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

//routes
app.use(userRouter);
app.use(freelancerRouter);
app.use(jobRoute);
app.use(proposalRoute);
app.use(reviweRoute);
app.use(adminRoute);
app.use
app.use(
  "/uploads",
  express.static("uploads")
);
const startDB = async () => {
  const connect = await mongoose.connect(
    "mongodb+srv://aryanarya01:aryan5555@skillsphere.jcqnrhp.mongodb.net/?appName=SkillSphere",
  );
  console.log("DB connected");

  app.listen(port, () => {
    console.log(`Server is listining to port ${port}`);
  });
};
startDB();
