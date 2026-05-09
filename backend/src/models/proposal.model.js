import mongoose from "mongoose";



const proposalSchema = new mongoose.Schema({
    job : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Job",
        required : true,
    },
    freelancer : {
        type : mongoose.model.Types.ObjectId,
        ref : "User",
        required : true,
    },
    coverLetter : {
        type : String,
        required : true,
    },
    bidAmount : {
        type : Number,
        required : true,
    },
    status : {
        type : String,
        enum : [
            "pending",
        "accepted",
        "rejected",
        ],
        default: "pending",
    }
})

const Proposal = mongoose.model("Proposal",proposalSchema);
export const Proposal;