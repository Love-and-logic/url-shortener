const express = require('express')
const errorhandler = require('errorhandler')
const logger = require('morgan')
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')


let app = express()
// create the database connection
const DATABASE_NAME = 'my_blog_database'
const MONGODB_URI = 'mongodb://localhost:27017/' + DATABASE_NAME
mongoose.connect(MONGODB_URI)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'))

// Middleware: Does stuff to the request and response objects before routing:
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())


app.post('/urls', routes.saveUrl)
app.get('/', routes.pingTest)
app.get('/api/', routes.pingTest)
app.get('/urls', routes.pingTest)
app.get('/:code', routes.redirectFromCode)

app.listen(3000)
