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
    const dataForUpdate = req.body;

    const freelancer = await Freelancer.findOne({
      user: req.user._id,
    });

    if (!freelancer) {
      return res.status(404).json({
        message: "Freelancer not found!",
      });
    }

    Object.assign(freelancer, dataForUpdate);

    await freelancer.save();

    return res.status(200).json({
      message: "Profile Updated!",
      freelancer,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const getAllFreelancer = async (req, res) => {
  try {
    const freelancer = await Freelancer.find().populate("user", "-password");
    return res.status(200).json({ freelancer });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getSingleFreelancer = async (req, res) => {
  try {
    const freelancer = await Freelancer.findById(req.params.id);
    if (!freelancer) {
      return res.status(404).json({ message: "freelancer not found!" });
    }
    return res.status(200).json({ freelancer });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const verifiedFreelancer = async (req, res) => {
  try {
    const freelancer = await Freelancer.findById(req.params.id);
    if (!freelancer) {
      return res.status(404).json({ message: "Freelancer not found!" });
    }
    freelancer.isVerified = true;
    await freelancer.save();
    return res
      .status(200)
      .json({ message: "Freelancer verified successfully!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


