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

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("client", "-password");
    return res.status(200).json({ jobs });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//getSingleJobs

export const getSingleJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate(
      "client",
      "-password",
    );
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    return res.status(200).json({ job });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//udpateJob

export const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    if (job.client.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Access Denied" });
    }
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({ message: "Job Updated", updateJob });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


//DeleteJob

export const deleteJob = async(req,res)=>{
    try{
        const job_to_delete = await Job.findById(req.params.id);
        
    }catch(err){
        return res.status(500).json({message : err.message})
    }
}