const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const AdminSchema = new Schema({
    name:String,
    password:String
})

const AdminModel = mongoose.model('Admin', AdminSchema)

module.exports = AdminModel