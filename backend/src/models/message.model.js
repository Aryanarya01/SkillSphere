import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    sender : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    reciever : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    }

});
    
const Message = mongoose.model("Message", messageSchema);
export const Message;
