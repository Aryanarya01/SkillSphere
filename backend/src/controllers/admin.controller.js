import User from "../models/user.model.js"


export const AdminAnalysisData = async(req,res)=>{
    try{
        const totalUser = await User
    }catch(err){
        return res.status(500).json({message : err.message})
    }
}