

export const authorizedRole = (...roles)=>{
    return async (req,res,next)=>{
    if(!req.user){
        return res.status(401).json({message : "Unauthorized"})
    }
    if(!roles.include(req.user.role)){
        return res.status(403).json({
            message : "Access Denide"
        })
    }
    next()
}
};