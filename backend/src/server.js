import express from "express"
import cookieParser from "cookie-parser"
const app = express();
const port = 9090;
app.use(express.json());
app.use(cookieParser())


const startDB = async()=>{
    const connect  = await mongoose.connect("mongodb+srv://aryanarya01:aryan5555@skillsphere.jcqnrhp.mongodb.net/?appName=SkillSphere")
    app.listen(port,()=>{
        console.log(`Server is listining to port ${port}`)
    })

}