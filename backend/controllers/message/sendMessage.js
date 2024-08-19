import chat from "../../models/chat.js";

const sendMessage= async(req,res)=>{
    try {
        const message=req.body.message;
        const user=req.user;
        if(user.role==="student"){
            const Id=user._id;

            const userChat= await chat.findOne({studentId:Id});

            if(!userChat){
                const newChat= new chat({
                    studentId:Id,
                    messages:[
                        {
                            text: message,
                            byStudent: true
                        }
                    ]
                })
                

                await newChat.save();
                return res.status(200).json({message: "message sent"});
            }

            userChat.messages.push({
                text:message,
                byStudent: true
            })

            await userChat.save();

            res.status(200).json({message: "message sent"});

        }

        else{
            const Id= req.body.studentId;
            const message= req.body.message;
            const userChat= await chat.findOne({studentId:Id});
            if(!userChat){
                const newChat= new chat({
                    studentId: Id,
                    messages: [
                        {
                            text: message,
                            byStudent: false
                        }
                    ]
                })
                newChat.save();
                return res.status(200).json({message: "message sent"});
            }

            userChat.messages.push({
                text: message,
                byStudent: false
            })

            await userChat.save();

            res.status(200).json({message: "message sent"});

        }

        
    } catch (error) {
        console.log("error in sendMessage controller ", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export default sendMessage;