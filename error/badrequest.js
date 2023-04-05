const {StatusCodes}=require("http-status-codes");
const CustomApiError = require("./customErr");
class BadRequest extends CustomApiError{
    constructor(message){
        super(message)
        this.statuscode=StatusCodes.BAD_REQUEST
    }
}

module.exports=BadRequest