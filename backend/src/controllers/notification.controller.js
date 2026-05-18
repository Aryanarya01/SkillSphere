import Notification from "../models/notification.model.js"


export const getNotification = async(req,res)=>{
    try{
        const notifications = await Notification.fin
    }catch(err){
        return res.status(500).json({message : err.message})
    }
}