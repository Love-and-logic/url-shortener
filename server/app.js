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

// Middleware: Does stuff to the request and response objects
// before routing:
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())

app.post('/response', routes.postForm)

app.post('/api/shorten', function(req, res){
    var longUrl = req.body.url;
    var shortUrl = '';
    res.status(200).send(req.body)
    // check if url already exists in database
    /*Url.findOne({long_url: longUrl}, function (err, doc){
      if (doc){
        // base58 encode the unique _id of that document and construct the short URL
        shortUrl = config.webhost + shorteningAlgo.encode(doc._id);

        // since the document exists, we return it without creating a new entry
        res.send({'shortUrl': shortUrl});
      } else {
        // The long URL was not found in the long_url field in our urls
        // collection, so we need to create a new entry:
        var newUrl = Url({
          long_url: longUrl
        });

        // save the new link
        newUrl.save(function(err) {
          if (err){
            console.log(err);
          }

          // construct the short URL
          shortUrl = config.webhost + shorteningAlgo.encode(newUrl._id);

          res.send({'shortUrl': shortUrl});
        });
    }

    });*/
})


app.listen(3000)
