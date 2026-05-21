import { Message } from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { reciever, text } = req.body;
    const message = await Message.create({
      sender: req.user._id,
      reciever,
      text,
    });
    return res.status(201).json({ message });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


export const getMessages = async(req,res)=>{
    try{
        const 
    }catch(err){
        return res.status(500).json({message : err.message});
    }
}