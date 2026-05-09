import mongoose from "mongoose";



const proposalSchema = new mongoose.Schema({
    job : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Job",
        required : true,
    },
    free
})

const Proposal = mongoose.model("Proposal",proposalSchema);
export const Proposal;