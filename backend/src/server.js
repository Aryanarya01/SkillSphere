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
import messageRoute from "./routes/message.route.js";
import portfolioRoute from "./routes/portfolio.route.js";

const app = express();
const server = createServer(app);

dotenv.config();

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true,
  },
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
//routes
app.use(userRouter);
app.use(freelancerRouter);
app.use(jobRoute);
app.use(proposalRoute);
app.use(reviweRoute);
app.use(adminRoute);
app.use(notificationRoute);
app.use(messageRoute);
app.use(portfolioRoute);

app.use("/uploads", express.static("uploads"));

const users = {};
io.on("connection", (socket) => {
  console.log("User Connected", socket.id);
  socket.on("register", (userId) => {
    users[userId] = socket.id;
    console.log(users);
    io.emit("onlineUser", Object.keys(users));
  });

  socket.on("recieveMessage", ({ recieverId, message }) => {
    const socketId = users[recieverId];
    if (socketId) {
      io.to(socketId).emit("recieveMessage", message);
    }
  });

  socket.on("disconnect", () => {
    for (const userId in users) {
      if (users[userId] === socket.id) {
        delete users[userId];
      }
    }
    console.log("User disconnected");
    io.emit("onlineUser", Object.keys(users));
  });
});

app.get("/", (req, res) => {
  res.send("Backend running");
});
const startDB = async () => {
  const connect = await mongoose.connect(
    process.env.MONGO_URI
  );
  console.log("DB connected");

  server.listen(process.env.PORT, () => {
    console.log(`Server is listining to port ${process.env.PORT}`);
  });
};
startDB();
export { io, users };
