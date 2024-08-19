import studentList from "../../models/studentList.js";


const getStudents= async(req,res)=>{
    try {

        const role=req.user.role;
        const Id=req.user._id;

        if(role!=="instructor" || role!=="admin"){
            return res.status(400).json({error:"not authorized"});
        }


        try {

        const list= await studentList.findOne({instructorId:Id});
        if(!list){
            const newList= new studentList({
                instructorId:Id,
            })
            await newList.save();
            
            return res.status(200).json(newList.students);
        }

        res.status(200).json(list.students);
            
        } catch (error) {
        console.log("error in getStudents controller ", error.message);
        res.status(500).json({error:"Internal Server Error"});
        }

        
        
    } catch (error) {
        console.log("error in getStudents controller ", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export default getStudents;