import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
 

const app = express();
const port = 9090;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(userRouter);

const startDB = async () => {
  const connect = await mongoose.connect(
    "mongodb+srv://aryanarya01:aryan5555@skillsphere.jcqnrhp.mongodb.net/?appName=SkillSphere",
  );
  app.listen(port, () => {
    console.log(`Server is listining to port ${port}`);
  });
};
startDB();
