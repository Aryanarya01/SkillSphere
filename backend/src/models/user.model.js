import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  profilePicture: {
    type: String,
    default: "/uploads/default.jpg",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ["client", "freelancer", "admin"],
    default: "client",
  },
  savedJobs : [
        {
          type : mongoose.Schema.Types.ObjectId,
          ref : "Job",
        }
      ],
      isVerified: {
      type: Boolean,
      default: false,
    },
});

const User = mongoose.model("User", userSchema);
export default User;
