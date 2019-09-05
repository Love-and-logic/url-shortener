const dotenv= require('dotenv').config()
const express = require('express')
const errorhandler = require('errorhandler')
const logger = require('morgan')
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const path= require('path')



let app = express()
// create the database connection
const DATABASE_NAME = 'my_blog_database'
// const MONGODB_URI = 'mongodb://<dbuser>:<dbpassword>@ds115712.mlab.com:15712/my_blog_database' + DATABASE_NAME
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'))

// Middleware: Does stuff to the request and response objects before routing:
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())

app.use(express.static(path.join(__dirname, '../client/')))
app.get('/', (req, res) => {
    // route to serve up the homepage (index.html)
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/*', (req, res) => {
    // route to serve up the homepage (index.html)
    if(res.status(404)){
    res.sendFile(path.join(__dirname, '../client/404.html'))  
    }
})


app.get('/:code', routes.redirectFromCode)
app.post('/', routes.saveUrl)

app.listen(process.env.PORT || 3000)
