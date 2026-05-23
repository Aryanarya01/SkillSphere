

export const createProject = async(req,res)=>{
    try{
        const {title, description, technology, githubLink, liveLink} = req.body;
    }catch(err){
        return res.status(500).json({message : "Server Error"})
    }
}