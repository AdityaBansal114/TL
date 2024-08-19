import mongoose, { modelNames } from "mongoose";

const messageSchema= new mongoose.Schema({
    text :{
        type: String,
        required: true
    },
    byStudent:{
        type: Boolean,
        required: true,
        default: true
    }
})

const userSchema= new mongoose.Schema({
    studentId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required : true
    },

    messages :{
        type:[messageSchema],
        default:[],
        required:true
    }

})

const chat= mongoose.model('chat', userSchema);

export default chat;