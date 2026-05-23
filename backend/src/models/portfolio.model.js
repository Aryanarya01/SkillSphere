import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technology: [
    {
      type: String,
    },
  ],
  githubLink: {
    type: String,
    default: "",
  },
  liveLink: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
});


const Portfolio = mongoose.model("Portfolio",portfolioSchema);
export default Portfolio;