
import User from "../../models/user.js"
import TokenRevoke from '../../models/tokens.js'
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";

const login = async(req,res)=>{
    try {

    const {email , password } = req.body
    const user = await User.findOne({email});
    const isPassValid = await bcrypt.compare(password, user? user.password : "");

    if(!user || !isPassValid){
        return res.status(400).json({error:"Invalid username or password"})
    }

    const fullName=user.fullName;
    const Id= user._id;

    const jwttoken = jwt.sign({email, fullName},process.env.JWT_SECRET,{
        expiresIn: '15d'
    });


    if(user.role==="instructor" || user.role==="admin"){

        const isPresent = await TokenRevoke.findOne(Id);
        if(!isPresent){
            const newToken= new TokenRevoke({
                Id,
                token:jwttoken
            })
            await newToken.save();
        }
        else{
            isPresent.token=jwttoken;
        }
    }

    res.cookie("jwt",jwttoken, {
        maxAge: 15*24*60*60*1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV!=="development"
    })

    res.status(200).json({
        userId: user._id,
        fullName,
        email,
        role: user.role,
    })

        
    } catch (error) {
        console.log("error in login controller", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export default login