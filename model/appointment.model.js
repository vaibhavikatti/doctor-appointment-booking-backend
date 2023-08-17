const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
     user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    service_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
     doc_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        trim: true
    },
    
    app_date:{
        type:String,
        default:new Date().toLocaleString()
    },
    app_status:{
        type:String,
        default:"pending",
        enum:['pending','booked','cancelled']
    },
    isActive:{
        type:Boolean,
        default: true
    },confirm:{
        type:Boolean,
        default:false
    }
},{
    collection:"appointments",
    timestamps:true
})

module.exports = mongoose.model("Appointment",appointmentSchema)