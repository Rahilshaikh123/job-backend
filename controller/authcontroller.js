const {User }=require("../model/usermodel")
const Unauthenticated = require("../error/unthenticated")
const BadRequest = require("../error/badrequest")
const NotFound = require("../error/notfound")


const registerUser=async(req,res,next)=>{
    const email=req.body.email
    const user= await User.findOne({email:email})
    if(user){
        throw new BadRequest("user alredy exist")
    }
    const details=req.body 
    
    const createuser= await User.create(details)
   const token=createuser.jwtSignu()
    res.status(200).json({token})


}

const loginUser=async(req,res,next)=>{
    const {email,password}=req.body
    if (!email&&!password){
        throw new BadRequest("please provide proper cridential")
    }

    const existUser= await User.findOne({email:email}) 

    if(!existUser){
        throw new NotFound("This email do not belong to any User Try again .")
        }
    
    const pass= await existUser.checkpass(password)
    if(!pass){
        throw new Unauthenticated("Password is  not matching please enter correct password ")
    }

    const token=await existUser.jwtSignu()
    

    
    res.status(200).json({token})
}


module.exports={
    loginUser,
    registerUser
}