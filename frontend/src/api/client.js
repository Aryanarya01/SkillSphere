import axios from "axios";

export const BASE_URL = "https://skillsphere-xt39.onrender.com";

const clientServer = axios.create({
  baseURL: BASE_URL,
   withCredentials: true,
});


export default clientServer;