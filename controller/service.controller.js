const { StatusCodes } = require('http-status-codes')

//get services
const getAllServices = async (req,res)=>{
    try {
        res.status(StatusCodes.OK).json({msg:"get all services"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
    }
}

//get single service
const getsingleService = async (req,res)=>{
    try {
        res.status(StatusCodes.OK).json({msg:"get single services"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
    }
}

//add service
const addService = async (req,res)=>{
    try {
        res.status(StatusCodes.OK).json({msg:"add service"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
    }
}

//update service
const updateService = async (req,res)=>{
    try {
        res.status(StatusCodes.OK).json({msg:"update service"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
    }
}


// delete service
const deleteService = async (req,res)=>{
    try {
        res.status(StatusCodes.OK).json({msg:"delete service"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
    }
}

module.exports = {getAllServices,getsingleService,addService,updateService,deleteService}
