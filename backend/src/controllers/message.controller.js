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
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
