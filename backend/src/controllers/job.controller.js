

export const createJob = async(req,res)=>{
    try{
        const {title,
      description,
      budget,
      skillsRequired,
      deadline} = req.body;
       
    }catch(err){
        return res.status(500).json({message : err.message})
    }
}