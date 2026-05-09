import Job from "../models/job.model.js";
import { Proposal } from "../models/proposal.model.js";


//apply job
export const applyJob = async(req,res)=>{
    try{
        const {coverLetter, bidAmount} = req.body;
        const JobId = req.params.JobId;


        const job = await Job.findById(JobId);
        if(!job){
            return res.status(404).json({message : "Job not found!"});
        }
        const existingProposal = await Proposal.findOne({
            job : JobId,
            freelancer : req.user._id,
        })
        if(existingProposal){
            return res.status(400).json({message : "Already applied to this job"});
        }
        const Proposal = await Proposal.create({
            job : JobId,
            freelancer : req.user._id,
            coverLetter,
            bidAmount,
        })
    }catch(err){
        return res.status(500).json({message : err.message})
    }
}