require("dotenv").config()
require("express-async-errors")


const express=require("express")
const connect = require("./dbconnect/dbconnect")


const authrouter = require("./route/authrouter")
const jobrouter = require("./route/jobrouter")


const errorHandlerMIddleware = require("./middleware/exrrorhandler")
const authHandler=require("./middleware/autherization")
const notFound = require("./middleware/pagenotfound")


const app =express()
const PORT=process.env.PORT

app.use(express.json())
app.use("/api/v1",authrouter)
app.use("/api/v1/job",authHandler,jobrouter)


app.use(errorHandlerMIddleware)
app.use(notFound)

const server =async()=>{
    app.listen(PORT,async()=>{
        await connect()
        console.log(`your server is started at port: ${PORT}`)
})}

server()
