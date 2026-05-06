import express from "express"
import cookieParser from "cookie-parser"
const app = express();
const port = 9090;
app.use(express.json());
app.use(cookieParser())


const startDB = async()=>{
    
}