
import jwt from "jsonwebtoken"

export const Protect = async(req,res)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(404).json({message : "Token not found!"});
        }
        const decoded = jwt.verify(token,JWT_SECRET);
        const user 
    }catch(err){
        return res.status(500).json({message : "Server Error!"})
    }
}
