

export const authorizedRole = (...roles)=>{
    if(!req.user){
        return res.status(401).json({message : "Unauthorized"})
    }
    if(!roles.include(req.user.role))
}