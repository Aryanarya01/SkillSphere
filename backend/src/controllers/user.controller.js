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
    if(user){
        return res.status(404).json({message : "User Already exists!"});
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = User.create({
        name,
        username,
        email,
        password : hashedPassword,
    })
    return res.status(200).json({message : "User registered successfully"});
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};



export const Login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message : "All fields are required"});
        }
        const user = await User.findOne({email})
        if(!user){
        return res.status(404).json({message : "User not found!"});
    }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(403).json({message : "Invalid credientials"})
        }
    }catch(err){
        return res.status(500).json({message : "Server Error!"})
    }
}