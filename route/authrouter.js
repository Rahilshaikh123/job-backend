const {registerUser,loginUser}=require("../controller/authcontroller")
const express=require("express")
const authrouter=express.Router()

authrouter.post('/register',registerUser)
authrouter.post("/login",loginUser)


module.exports=authrouter