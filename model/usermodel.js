require("dotenv").config()
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:50,
        minLength:4
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:Number,
    },
    password:{
        type:String,
        required:true
    }

})

UserSchema.pre("save",function(){
    const salt=bcrypt.genSaltSync(10)
    this.password=bcrypt.hashSync(this.password,salt)


})

UserSchema.methods.jwtSignu= function(){
    console.log("bahar hu")
    return jwt.sign({userId:this._id,email:this.email},process.env.JWT_SECRET,)
    
    
   

}

UserSchema.methods.checkpass=(async function(password){
    const ispass=await bcrypt.compare(password,this.password)
    console.log(ispass)
    return (ispass)
})


const User=mongoose.model("Jobuser",UserSchema)
module.exports={
    User,
    
}