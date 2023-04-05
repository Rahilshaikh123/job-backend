const mongoose=require("mongoose")

const jobSchema=mongoose.Schema({
    company:{
        type:String,
        required:true

    },
    position:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:["interview","succesfull","pending","rejected"],
        default:"pending"

    },
    createdfor:{
        type:mongoose.Types.ObjectId,
        ref:"Jobuser",
        required:true
    }

},{timestamps:true})
module.exports=mongoose.model("Job",jobSchema)