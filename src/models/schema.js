// Define schema of database created in db/connect.js

const mongoose = require('mongoose')
const teacherSchema = new mongoose.Schema({
    name : String,
    email : String,
    mobile : Number,
    city : String
})

const Teacher = new mongoose.model('Teacher', teacherSchema)

module.exports = Teacher