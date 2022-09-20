const express = require('express')
const router = new express.Router()
const Teacher = require('../models/schema')

// Load index page
router.get('/', (req, res)=>{
    res.render('index')
})


// Add a new record
router.post('/', async(req,res)=>{
    const teacher = await new Teacher({
        name : req.body.name,
        email : req.body.email,
        mobile : req.body.mobile,
        city : req.body.city
    })
    teacher.save().then(()=>{
        console.log("teacher added");
        res.status(201).render('index')
    }).catch((err)=>{
        console.log(err);
    })
})

// Get List of all records
router.get('/list', (req, res)=>{
    const list = Teacher.find((err, data)=>{
        if(!err){
            res.render('list', {
            list : data
            })
        }else{
            console.log("There is no any data");
        }
    })
})


// show page for updatinng
router.get(`/addUpdate/:id`, (req, res)=>{
    Teacher.findById(req.params.id, (err, data)=>{
        if(!err){
            res.render('addUpdate', {
                teacher : data
            });
        }
    })
})


// Update individual record
router.post(`/addUpdate`, async(req, res)=>{
    try {
        const updateTeacher = await Teacher.findByIdAndUpdate(req.body.id, {
            name : req.body.name,
            email : req.body.email,
            mobile : req.body.mobile,
            city : req.body.city 
        }).then(()=>{
            const list = Teacher.find((err, data)=>{
                if(!err){
                    res.render('list', {
                    list : data
                    })
                }else{
                    console.log("There is no any data");
                }
            })
        }).catch((err)=>{
            console.log("couldn't update");
        })
    } catch (error) {
        
    }
})


// Delete any Record
router.get('/delete/:id', async(req, res)=>{
    try {
        const deleteRecord = await Teacher.findByIdAndDelete(req.params.id, {new: true})
        .then(()=>{
            Teacher.find((err, data)=>{
                if(!err){
                    res.render('list', {
                    list : data
                    })
                }else{
                    console.log("There is no any data");
                }
            })
        }).catch((err)=>{
            console.log("couldn't update");
        })
    } catch (error) {
        console.log(error)
    }
    
    
})

module.exports = router