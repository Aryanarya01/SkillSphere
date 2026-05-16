import Job from "../models/job.model.js";
import User from "../models/user.model.js";

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
    const { keyword, status, minBudget } = req.query;
    const query = {};
    if (keyword) {
      query.title = {
        $regex: keyword,
        $options: "i",
      };
    }

    if (status) {
      query.status = status;
    }
    if (minBudget) {
      query.budget = {
        $gte: Number(minBudget),
      };
    }

    const jobs = await Job.find(query).populate("client", "-password");
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
    return res.status(200).json({ message: "Job Updated", updatedJob });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//DeleteJob

export const deleteJob = async (req, res) => {
  try {
    const job_to_delete = await Job.findById(req.params.id);
    if (!job_to_delete) {
      return res.status(404).json({ message: "Job not Found" });
    }
    if (job_to_delete.client.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Access Denied" });
    }
    await job_to_delete.deleteOne();
    return res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getMyJobs = async (req, res) => {
  try {
    const jobs = await Job.find({
      client: req.user._id,
    });
    return res.status(200).json({ jobs });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};


export const savedJobs = async(req,res)=>{
  try{
    const user = await User.findById(req.params._id);
    const jobId = req.params.id;
    if(user.savedJobs.includes(jobId)){
      return res.status(400).json({message : "Job already saved",})
    }
    user.savedJobs.push(jobId);
    await user.save();
    return res.status(200).json({
      message:
        "Job saved successfully",
    });
  }catch(err){
    return req.status(500).json({message : err.message})
  }
}

export const getSavedJobs = async(req,res)=>{
  try{
    const user = await User.findById(req.params._id).populate("savedJobs");
    return res.status(200).json({jobs : user.savedJobs})
  }catch(err){
    return req.status(500).json({message : err.message})
  }
}