const serviceRoute = require('express').Router()

const {getAllServices,getsingleService,addService,updateService,deleteService} = require('../controller/service.controller')

//---get all services --get
serviceRoute.get(`/all`,getAllServices)

//--get single service --get
serviceRoute.get(`/single/:id`,getsingleService)

//--add service --post
serviceRoute.post(`/add`,addService)

//--update service --patch
serviceRoute.patch(`/update/:id`,updateService)

//--delete service--delete
serviceRoute.delete(`/delete/:id`,deleteService)

module.exports = serviceRoute