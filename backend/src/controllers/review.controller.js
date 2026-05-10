import { Review } from "../models/reviews.model.js";



export const createReview = async(req,res)=>{
    try{
        const {receiver,job,rating,comment} = req.body;
        const review = await Review.create({
            reviewer : req.user._id,
            receiver,
            job,
            rating,
            comment
        })

        return
    }catch(err){
        return res.status(500).json({message : err.message})
    }
}