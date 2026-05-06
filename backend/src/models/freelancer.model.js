import mongoose from "mongoose";

const freelancerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
    },
    bio: {
      type: String,
    },
    skills: [
      {
        name: String,
        level: String,
      },
    ],
    experiences: [
      {
        company: String,
        role: String,
        duration: Number,
        description: String,
      },
    ],
    portfolio: [
      {
        title: String,
        image: String,
        description: String,
        link: String,
      },
    ],
    availability: {
      type: String,
    },
    hourRate: {
      type: Number,
    },
    location: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    resume: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Freelancer = mongoose.model("Freelancer", freelancerSchema);
export default Freelancer;
