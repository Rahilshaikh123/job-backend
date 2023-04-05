const { StatusCodes } = require("http-status-codes")
const BadRequest = require("../error/badrequest")
const Job=require("../model/jobmodel")
const NotFound = require("../error/notfound")

const getAllJobs=async(req,res)=>{
    const  jobs=await Job.find({createdfor:req.user.userId})


    res.status(StatusCodes.ACCEPTED).json({jobs})

}
const getjobbyID=async(req,res)=>{
    const userId=req.user.userId
    const jobId=req.params.id
    const jobs=await Job.find({
        createdfor:userId,_id:jobId
    })
    if(!jobs){
        throw new NotFound(" Job do not exist ")
    }
    res.status(StatusCodes.ACCEPTED).json({jobs})

}
const createJob=async(req,res)=>{
    
    req.body.createdfor=req.user.userId

    const job=await Job.create(req.body) 
    res.status(StatusCodes.ACCEPTED).json({job})

}
const updateJobs=async(req,res)=>{
    const {
        body:{company,position},
        params:{id},
        user:{userId}

    }=req
    if(!company&&!position){
        throw new BadRequest("please provide details to update")
    }
    
    const job=await Job.findByIdAndUpdate({_id:id,createdfor:userId},req.body,{new:true})
    if(job){
        throw new BadRequest("job do not exist")
    }


    res.status(StatusCodes.ACCEPTED).json({job})

}
const  deleteJobs=async(req,res)=>{
    const {params:{id},user:{userId}}=req
    const job=await Job.findByIdAndDelete({_id:id,createdfor:userId})
    if(job){
        throw new BadRequest("job do not exist")
    }
    res.status(StatusCodes.ACCEPTED).json({job})

}
module.exports={
    getAllJobs,
    getjobbyID,
    createJob,
    deleteJobs,
    updateJobs
}