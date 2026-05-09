import Job from "../models/job.model.js";

export const createJob = async (req, res) => {
  try {
    const { title, description, budget, skillsRequired, deadline } = req.body;
    if (!title || !description || !budget) {
      return res.status(400).json({
        message: "Required fields missing",
      });
    }
    const job = await Job.create({
      client: req.user._id,
      title,
      description,
      budget,
      skillsRequired,
      deadline,
    });

    return res.status(201).json({
      message: "Job created successfully",
      job,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


//getAllJob

export const getAllJobs = async (req,res)=>{
    try{

    }catch(err){
        return res.status(500).json({message : err.message})
    }
}