export const Protect = async(req,res)=>{
    try{
        const token = req.cookies;
        if(!token){
            return res.status(404).json({message : "Token not found!"});
        }
        
    }catch(err){
        return res.status(500).json({message : "Server Error!"})
    }
}
