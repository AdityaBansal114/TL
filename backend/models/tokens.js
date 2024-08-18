import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    Id: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    token: {
        type : String,
        required: true
    }
})

const TokenRevoke= mongoose.model("TokenRevoke",userSchema);

export default TokenRevoke;