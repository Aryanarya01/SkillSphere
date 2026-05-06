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
  active : {
    type : Boolean,
    default : true,
  },
  profilePicture : {
    type : String,
    default : "default.jpg",
  },
  create
});

const User = mongoose.model("User", userSchema);
export const User;
