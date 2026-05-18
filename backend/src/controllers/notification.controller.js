import Notification from "../models/notification.model.js";

export const getNotification = async (req, res) => {
  try {
    const notifications = await Notification.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });
    return res.status(200).json({
      notifications,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};



export const markAsRead = async(req,res)=>{
    try{
        await Notification.updateMany({
            user : req.user._id,
            read : false,
        },{
            read : true,
        })
        return res.status(200).json({message : "Notification mark as read",})
    }catch(err){
        return res.status(500).json({message : err.message})
    }
}