const { StatusCodes } = require('http-status-codes')

// get all user data
const readAllUSers = async (req,res)=>{
    try {
        res.status(StatusCodes.OK).json({msg:"read all users"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
    }
}

//get single user data
const getSingleUser = async (req,res)=>{
    try {
        res.status(StatusCodes.OK).json({msg:"get single user"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
    }
}

module.exports = {readAllUSers,getSingleUser}


