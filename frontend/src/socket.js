import { io } from "socket.io-client";
const socket = io("http://localhost:9090", {
  withCredentials: true,
});

export default socket;
