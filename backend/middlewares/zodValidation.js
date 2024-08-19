import {LoginSchemaZod, requestMailSchemaZod, resetPawwsordSchemaZod, SignupSchemaZod} from "../zod/authmodels.js"
import {z} from 'zod'
import { sendMessageZodSchemaStudent , sendMessageZodSchemaInstructor} from "../zod/sendMessageModels.js";

export const LoginValidation= (req,res,next)=>{
    try {

        const valid= LoginSchemaZod.safeParse(req.body);
        if(valid.success===true){
            next();
        }
        else{
            return res.status(400).json({message: "Check your inputs"});
        }
        
    } catch (error) {
        res.status(400).json({message: "Check your inputs"})
    }
}





export const SignupValidation= (req,res,next)=>{
    try {

        const valid= SignupSchemaZod.safeParse(req.body);
        if(valid.success===true){
            next();
        }
        else{
            return res.status(400).json({message: "Check your inputs"});
        }

        
    } catch (error) {
        res.status(400).json({message: "Check your inputs"})
        
    }
}





export const requestMailValidation= (req,res,next)=>{
    try {

        const valid= requestMailSchemaZod.safeParse(req.body);
        if(valid.success===true){
            next();
        }
        else{
            return res.status(400).json({message: "Check your inputs"});
        }

        
    } catch (error) {
        res.status(400).json({message: "Check your inputs"})
        
    }
}



export const resetPassValidation= (req,res,next)=>{
    try {

        const valid= resetPawwsordSchemaZod.safeParse(req.body);
        if(valid.success===true){
            next();
        }
        else{
            return res.status(400).json({message: "Check your inputs"});
        }

        
    } catch (error) {
        res.status(400).json({message: "Check your inputs"})
        
    }
}


export const sendMessageZodValidation= (req,res,next)=>{

    try {

        if(req.user.role==="student"){
            const valid= sendMessageZodSchemaStudent.safeParse(req.body);
            if(valid.success===true){
                next();
            }
            else{
            return res.status(400).json({message: "Check your inputs"});
            }
        }
        else{
            const valid= sendMessageZodSchemaInstructor.safeParse(req.body);
            if(valid.success===true){
                next();
            }
            else{
            return res.status(400).json({message: "Check your inputs"});
            }
        }
        
    } catch (error) {
        res.status(400).json({message: "Check your inputs"})
    }
    
}