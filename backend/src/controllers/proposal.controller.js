import Job from "../models/job.model.js";


//apply job
export const applyJob = async(req,res)=>{
    try{
        const {coverLetter, bidAmount} = req.body;
        const JobId = req.params.JobId;


        const job = await Job.findById(JobId);
        if(!job){
            return res.status(404).json({message : "Job not found!"});
        }
        
    }catch(err){
        return res.status(500).json({message : err.message})
    }
}