const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const router = require('./router/appController')
const port = process.env.PORT || 3000;
require('./db/connect')


// give a path for  static data
app.use(express.static(path.join(__dirname, '../public/')))
// Set hbs as a view engine
app.set('view engine', 'hbs')

// define path of view as view is not at default path
app.set('views', path.join(__dirname, '../tempelates/views'))

// Register partials
hbs.registerPartials(path.join(__dirname, '../tempelates/partials'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Using express router (from router/appController)
app.use(router)


app.listen(port, ()=>{
    console.log(`Express connected`);
})