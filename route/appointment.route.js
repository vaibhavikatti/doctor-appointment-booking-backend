const {getAppointments,getSingleAppointment,addAppointment,updateAppointment,deleteAppointment} = require('../controller/appointment.controller')
const appointmentRoute = require('express').Router()

//--read all --get--
appointmentRoute.get(`/all`,getAppointments)

//read single
appointmentRoute.get(`/single/:id`,getSingleAppointment)
//--create appointment--post--
appointmentRoute.post(`/add`,addAppointment)
//--edit appointment-patch
appointmentRoute.patch(`/update/:id`,updateAppointment)

//--delete appointment--delete
appointmentRoute.delete(`/delete/:id`,deleteAppointment)

module.exports = appointmentRoute