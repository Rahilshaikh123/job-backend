const { StatusCodes } = require("http-status-codes")
const CustomApiError = require("../error/customErr")

const errorHandlerMIddleware=(err,req,res,next)=>{
    if (err instanceof CustomApiError){
       return res.status(err.statuscode).json({msg:err.message})
    }
    console.log(err)
   return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({Error:err.message})
}

module.exports=errorHandlerMIddleware