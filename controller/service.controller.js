const { StatusCodes } = require('http-status-codes')
const Service = require('../model/service.model')

//get services
const getAllServices = async (req,res)=>{
    try {
        let data = await Service.find({})
        res.status(StatusCodes.OK).json({length:data.length,services:data})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
    }
}

//get single service
const getsingleService = async (req,res)=>{
    try {
        let id = req.params.id
        let extService = await Service.findById({_id:id})
        if(!extService)
        res.status(StatusCodes.NOT_FOUND).json({msg:`service id not found`})
        res.status(StatusCodes.OK).json({service:extService})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
    }
}

//add service
const addService = async (req,res)=>{
    try {
        const {name,desc,price,category,gender,doc_id} = req.body 
       const newData= await Service.create({
        name,
        desc,
        price,
        category,
        gender,
        doc_id
       })
       //we can even just pass req.body inside create , n get new data added successfully

        res.status(StatusCodes.OK).json({msg:"New data added succesfully",service:newData})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
    }
}

//update service
const updateService = async (req,res)=>{
    try {
        let id = req.params.id 
        let extData = await Service.findById({_id:id})
        if(!extData)
        return res.status(StatusCodes.NOT_FOUND).json({msg:`requested service id not found`})

        await Service.findByIdAndUpdate({_id:id},req.body)

        res.status(StatusCodes.OK).json({msg:"update successfull"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
    }
}


// delete service
const deleteService = async (req,res)=>{
    try {
        let id = req.params.id 
        let extSer = await Service.findById({_id:id})
        if(!extSer)
        return res.status(StatusCodes.NOT_FOUND).json({msg:`service id not found`})

        await Service.findByIdAndDelete({_id:id})
        res.status(StatusCodes.OK).json({msg:"delete successfull"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
    }
}

module.exports = {getAllServices,getsingleService,addService,updateService,deleteService}
