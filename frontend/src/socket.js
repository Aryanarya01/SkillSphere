import { io } from "socket.io-client";
const socket = io("https://skillsphere-xt39.onrender.com", {
  withCredentials: true,
});

export default socket;
