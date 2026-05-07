import { use } from "react";
import User from "../models/user.model";
import bcrypt from "bcrypt"


export const Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    if(!name || !username || !email || !password){
        return res.status(400).json({message : "All fields are required!"});
    }
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({message : "User not found!"});
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = User.create({
        name,
        username,
        email,
        password : hashedPassword,
    })
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};
