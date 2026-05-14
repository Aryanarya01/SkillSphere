import Job from "../models/job.model.js";
import Proposal from "../models/proposal.model.js";
import User from "../models/user.model.js";

export const AdminAnalysisData = async (req, res) => {
  try {
    const totalUser = await User.countDocuments();
    const totalJobs = await Job.countDocuments();
    const totalProposals = await Proposal.countDocuments();

    return res.status(200).json({
      totalUser,
      totalJobs,
      totalProposals,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};



export const getAllUser = async(req,res)=>{
  try{
    
  }catch(err){
    return res.status(500).json({message : err.message})
  }
}