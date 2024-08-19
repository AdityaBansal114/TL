import jwt from 'jsonwebtoken'
import User from '../models/user.js';

const validateUser= async(req,res,next)=>{
    try {
        const token= req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "You are not logged in"});
        }

        const decoded= jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error:"Unauthorized - Invalid Token "});
        }

        const user= await User.findById(decoded.Id).select("-password");

        if(!user){
            return res.status(401).json({error: "User not found"})
        }

        req.user=user;

        next();
        
        
    } catch (error) {
        onsole.log("error in validate User middleware ", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export default validateUser;