const express=require("express")
const { getAllJobs, createJob, getjobbyID, updateJobs, deleteJobs } = require("../controller/jobscontroller")
const jobrouter=express.Router()

jobrouter.route("/").get(getAllJobs).post(createJob)
jobrouter.route("/:id").get(getjobbyID).patch(updateJobs).delete(deleteJobs)

module.exports=jobrouter