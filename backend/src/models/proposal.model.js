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
    
})

const Proposal = mongoose.model("Proposal",proposalSchema);
export const Proposal;