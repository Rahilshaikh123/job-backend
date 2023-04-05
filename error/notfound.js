const {StatusCodes}=require("http-status-codes");
const CustomApiError = require("./customErr");
class NotFound extends CustomApiError{
    constructor(message){
        super(message)
        this.statuscode=StatusCodes.BAD_REQUEST
    }
}

module.exports=NotFound