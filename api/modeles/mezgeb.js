const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const mezgebSchema = new Schema({ 
    name:{type:String,
    required:true},
    phone: {type:String,
    required:true, unique:true},   
    address:{type:String,
    required:true},
    work:{type:String,
    required:true},
})

const MezgebModel = mongoose.model('mezgeb', mezgebSchema)

module.exports = MezgebModel