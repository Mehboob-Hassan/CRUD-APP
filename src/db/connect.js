// Connect to database and create new db as crduapp

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/crudapp')
.then(()=>{
    console.log('database connected');
}).catch((err)=>{
    console.log(`db connection failed`, err);
})