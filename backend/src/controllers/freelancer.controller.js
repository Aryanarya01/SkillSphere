import Freelancer from "../models/freelancer.model.js";

export const getMyFreelancerProfile = async (req, res) => {
  try {
    const freelancer = await Freelancer.findOne({
      user: req.user._id,
    }).populate("user", "-password");
    if (!freelancer) {
      return res.status(404).json({ message: "Freelancer not found" });
    }

    return res.status(200).json({ freelancer });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateFreelancerProfile = async (req, res) => {
  try {
    const {...dataForUbdate} = req.body;
    const {
      title,
      bio,
      skills,
      experiences,
      portfolio,
      availability,
      hourlyRate,
      location,
      resume,
    } = dataForUbdate;

    const freelancer = await Freelancer.findOne({
        user : req.user._id,
    })
    if(!freelancer){
        return res.status(404).json({message : "Freelancer not found!"})
    }
    const existingFreelancer = await Freelancer.findOne({$or:[{username},{email}]});
    if(existingFreelancer || String(existingFreelancer._id)!== String(freelancer._id))
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
