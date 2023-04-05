const {StatusCodes}=require("http-status-codes");
const CustomApiError = require("./customErr");
class Unauthenticated extends CustomApiError{
    constructor(message){
        super(message)
        this.statuscode=StatusCodes.UNAUTHORIZED
    }
}

module.exports=Unauthenticated