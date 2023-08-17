const serviceRoute = require('express').Router()

const {getAllServices,getsingleService,addService,updateService,deleteService} = require('../controller/service.controller')

//validate login authgenication
const auth = require('../middleware/auth.middleware')
const doctorAuth = require('../middleware/doctor.role')

//---get all services --get
serviceRoute.get(`/all`,auth,getAllServices)

//--get single service --get
serviceRoute.get(`/single/:id`,auth,getsingleService)

//--add service --post
serviceRoute.post(`/add`,auth,doctorAuth,addService)

//--update service --patch
serviceRoute.patch(`/update/:id`,auth,doctorAuth,updateService)

//--delete service--delete
serviceRoute.delete(`/delete/:id`,auth,doctorAuth,deleteService)

module.exports = serviceRoute