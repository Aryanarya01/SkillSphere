import Portfolio from "../models/portfolio.model";


export const createProject = async(req,res)=>{
    try{
        const {title, description, technology, githubLink, liveLink} = req.body;
        const portfolio = await Portfolio.create({
            title,
            description,
            technology : technologies.split(","),,
            githubLink,
            liveLink,
        })
    }catch(err){
        return res.status(500).json({message : "Server Error"})
    }
}