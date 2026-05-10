import mongoose from "mongoose";


export const reviewSchema = new mongoose.Schema({
    reviewer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    receiver : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    
})