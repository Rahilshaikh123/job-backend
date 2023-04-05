const mongoose=require("mongoose")

const connect=()=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(console.log("conncted to db"))
}

module.exports=connect

