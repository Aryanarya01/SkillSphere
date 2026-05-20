import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

import userRouter from "./routes/user.routes.js";
import freelancerRouter from "./routes/freelancer.route.js";
import jobRoute from "./routes/job.route.js";
import proposalRoute from "./routes/proposal.route.js";
import reviweRoute from "./routes/review.route.js";
import adminRoute from "./routes/admin.route.js";
import notificationRoute from "./routes/notification.route.js";

const app = express();
const port = 9090;
const server = createServer(app);

dotenv.config();

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

 

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
//routes
app.use(userRouter);
app.use(freelancerRouter);
app.use(jobRoute);
app.use(proposalRoute);
app.use(reviweRoute);
app.use(adminRoute);
app.use(notificationRoute);

app.use("/uploads", express.static("uploads"));


const users = {};
io.on("connection",(socket)=>{
  console.log("User Connected",socket.id);
  socket.on("register",(userId)=>{
    users[userId] = socket.id;
    console.log(users)
  })
  io.emit("onlineUser",
    Object.keys(users)
  )
  socket.on("disconnect",()=>{
    for(const userId in users){
      if(users[userId] === socket.id){
        delete users[userId];
      }
    }
    console.log('User disconnected');
    io.emit("onlineUser",
      Object.keys(users)
    )
  })
})


const startDB = async () => {
  const connect = await mongoose.connect(
    "mongodb+srv://aryanarya01:aryan5555@skillsphere.jcqnrhp.mongodb.net/?appName=SkillSphere",
  );
  console.log("DB connected");

  server.listen(port, () => {
    console.log(`Server is listining to port ${port}`);
  });
};
startDB();
export {io,users};