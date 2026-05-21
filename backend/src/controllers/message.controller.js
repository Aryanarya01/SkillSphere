import Message from "../models/message.model.js";
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

export const getMessages = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const messages = await Message.find({
      $or: [
        {
          sender: req.user._id,
          reciever: receiverId,
        },
        {
          sender: receiverId,
          reciever: req.user._id,
        },
      ],
    }).sort({
      createdAt: 1,
    });
    return res.status(200).json({
      messages,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getConversations = async (req, res) => {
  try {
    const userId = req.user._id;
    const messages = await Message.find({
      $or :[
        { 
          sender : userId
        },
        {
          reciever : userId 
        }
      ]
    }).populate("sender","name profilePicture").populate("reciever", "name profilePicture").sort({
      updatedAt : -1
    })

    // ->>>>>>>now we remove duplicates
    const conversationMap = new Map();
      messages.forEach((msg)=>{
        const otherUser = msg.sender._id.toString() === userId.toString()
        ? msg.reciever : msg.sender;
        if(!conversationMap.has(otherUser._id.toString())){
            conversationMap.set(otherUser._id.toString(),otherUser)
        }
      });
      const conversations = Array.from(conversationMap.values())

  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
