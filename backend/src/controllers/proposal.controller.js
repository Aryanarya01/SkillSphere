import Job from "../models/job.model.js";
import Proposal from "../models/proposal.model.js";

//apply job
export const applyJob = async (req, res) => {
  try {
    const { coverLetter, bidAmount } = req.body;
    const JobId = req.params.JobId;

    const job = await Job.findById(JobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found!" });
    }
    const existingProposal = await Proposal.findOne({
      job: JobId,
      freelancer: req.user._id,
    });
    if (existingProposal) {
      return res.status(400).json({ message: "Already applied to this job" });
    }
    const proposal = await Proposal.create({
      job: JobId,
      freelancer: req.user._id,
      coverLetter,
      bidAmount,
    });
    return res
      .status(201)
      .json({ message: "Proposal submitted successfully", proposal });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//getJobProposals(client)
export const getJobProposals = async (req, res) => {
  try {
    const JobId = req.params.JobId;
    const proposal = await Proposal.find({
      job: JobId,
    })
      .populate("freelancer", "-password")
      .populate("job");
    return res.status(200).json({ proposal });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// acceptProposal
export const acceptProposal = async (req, res) => {
  try {
    const proposal = await Proposal.findById(req.params.id);
    if (!proposal) {
      return res.status(404).json({ message: "Proposal not found" });
    }
    proposal.status = "accepted";
    await proposal.save();

    return res.status(200).json({ message: "Proposal accepted", proposal });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//rejectProposal
export const rejectProposal = async (req, res) => {
  try {
    const proposal = await Proposal.findById(req.params.id);
    if (!proposal) {
      return res.status(404).json({ message: "Proposal not found" });
    }
    proposal.status = "rejected";
    await proposal.save();
    return res.status(200).json({ message: "Proposal rejected", proposal });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


export const getMyProposals = async(req,res)=>{
  try{
    const proposals = await Proposal.findById({freelancer : req.user._id}).populate("job");
    return res.status(200).json({proposals})
  }catch(err){
    return res.status(500).json({message : err.message})
  }
}