import { Message } from "../models/message.model.js";

export const sendMessage = async(req,res)=>{
    try{
        const {reciever, text} = req.body;
        const message = await Message.
    }catch(err){
        return res.status(500).json({message : err.message})
    }
}
