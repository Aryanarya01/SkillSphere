

//apply job
export const applyJob = async(req,res)=>{
    try{
        const {coverLetter, bidAmount} = req.body;
        const JobId = req.params.JobId;
        
    }catch(err){
        return res.status(500).json({message : err.message})
    }
}