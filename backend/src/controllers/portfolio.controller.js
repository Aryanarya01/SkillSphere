

export const createProject = async(req,res)=>{
    try{
        const {} = req.body;
    }catch(err){
        return res.status(500).json({message : "Server Error"})
    }
}