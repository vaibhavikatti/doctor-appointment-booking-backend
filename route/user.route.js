const userRoute = require('express').Router()
const {readAllUSers,getSingleUser} = require('../controller/user.controller')

//--read all user--get
userRoute.get(`/all`,readAllUSers)

//--get single user --get
userRoute.get(`/single/:id`,getSingleUser)

module.exports = userRoute