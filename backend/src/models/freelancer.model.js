import mongoose from "mongoose";

const freelancerSchema = new mongoose.Schema({
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
});
