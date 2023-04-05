const jwt =require("jsonwebtoken")
const Unauthenticated = require("../error/unthenticated")
const authHandler = require("./exrrorhandler")
const BadRequest = require("../error/badrequest")
const jwtVerify=(req,res,next)=>{
    const autheader=req.headers.authorization
    if(!autheader&&!autheader.startsWith("Bearer")){
        throw new Unauthenticated ("autherization fail")
    }
    const token=autheader.split(" ")[1]
        try {
            const payload=jwt.verify(token,process.env.JWT_SECRET)
            console.log(payload)
            req.user={userId:payload.userId}
            next()

        } catch (error) {
            throw new BadRequest("authorization fail")
            
        }
}
module.exports=authHandler




module.exports=jwtVerify