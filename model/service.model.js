const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true
    },desc:{
        type:String,
        required:true,
        trim: true
    },
    image:{
        type:Object,
        default:{
            url:"https://tse3.mm.bing.net/th?id=OIP.gLDQbKOuZV8D33EJV8sR0QHaHa&pid=Api&P=0&h=180"
        }
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    category:{
        type:String,
        required:true,
        trim: true
    },
    gender:{
        type:String,
        required:true,
        trim: true
    },
    doc_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }

},{
    collection:"services",
    timestamps:true
})

module.exports =mongoose.model("Service",serviceSchema)