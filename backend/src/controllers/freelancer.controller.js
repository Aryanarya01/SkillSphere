import Freelancer from "../models/freelancer.model.js"



export const getMyFreelancerProfile = async(req,res)=>{
    try{
        const freelancer = await Freelancer.findOne({
            user : req.user._id
        }).populate("user","-password");
        if(!freelancer){
            return 
        }
    }catch(err){
        return res.status(500).json({message : err.message})
    }
}