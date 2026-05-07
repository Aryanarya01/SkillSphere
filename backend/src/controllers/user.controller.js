

export const Register = async(req,res)=>{
    try{
        const {name,username, email, password} = req.body;
        
    }catch(err){
        return res.status(500).json({message : "Server Error"})
    }
}