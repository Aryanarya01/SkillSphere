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
    const {...dataForUpdate} = req.body;
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
    } = dataForUpdate;

    const freelancer = await Freelancer.findOne({
        user : req.user._id,
    })
    if(!freelancer){
        return res.status(404).json({message : "Freelancer not found!"})
    }
    const profile_to_update = await Freelancer.findOne({
        user : freelancer._id
    });
     Object.assign(profile_to_update, dataForUpdate);
    await profile_to_update.save();
    return res.status(200).json({ message: "Profile Updated!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
