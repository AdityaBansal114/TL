import chat from "../../models/chat.js";

const getMessages = async(req,res)=>{
    try {

        const studentId= req.user.role === "student"? req.user._id : req.body.studentId;


        const student= await chat.findOne({studentId});
        const messages= student.messages;

        if(student && messages){
            return res.status(200).json(messages);
        }

        res.status(500).json({error: "internal error"});

        
    } catch (error) {
        console.log("error in getMessages controller ", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export default getMessages;