import Notification from "../models/notification.model.js"


export const getNotification = async(req,res)=>{
    try{
        const notifications = await Notification.find({
            user : req.user._id,
        }).sort({
            
        })
    }catch(err){
        return res.status(500).json({message : err.message})
    }
}