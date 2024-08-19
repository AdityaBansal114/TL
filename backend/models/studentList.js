import mongoose from "mongoose";

const student= new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    fullName:{
        type: String,
        required :true
    }
})

const studentsAssigned= new mongoose.Schema({
    instructorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    students : {
        type:[student],
        default: [],
        required:true
    }
})


const studentList= mongoose.model('studentList', studentsAssigned);

export default studentList;