// // require and instantiate express
// var express = require('express');
// var app = express();
// // we'll need the path module to correctly concatenate our paths
// var path = require('path');
//
// var bodyParser = require('body-parser');
//
// var mongoose = require('mongoose');
// var config = require('./config');
// // base58 for encoding and decoding functions
// var shortenURL = require('./shorteningAlgo.js');
//
// // grab the url model
// var Url = require('./models/url');
//
// // handles JSON bodies
// app.use(bodyParser.json());
// // handles URL encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));
//
// // tell Express to serve files from our public folder
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.get('/', function(req, res){
//   // route to serve up the homepage (index.html)
//   res.sendFile(path.join(__dirname, 'client/index.html'));
// });
//
// var server = app.listen(3000, function(){
//   console.log('Server listening on port 3000');
// });
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./server/routes/config');
var shorteningAlgo = require('./shorteningAlgo.js');

// grab the url model
var Url = require('./server/models/url.js');

// create a connection to our MongoDB
mongoose.connect('mongodb://' + config.db.host + '/' + config.db.name, {autoIndex: false});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// tell Express to serve file from our public folder
app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function(req, res){
  // route to serve up the homepage (index.html)
  res.sendFile(path.join(__dirname, './client/index.html'));
});

//---do i need to do this!?
// app.get('/api/shorten', function(req, res){
//   res.sendFile(path.join(__dirname, 'javascripts/shorten.js'));
// });

app.post('/api/shorten', function(req, res){
  var longUrl = req.body.url;
  var shortUrl = '';

  // check if url already exists in database
  Url.findOne({long_url: longUrl}, function (err, doc){
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

  });

});

app.get('/:encoded_id', function(req, res){
  var shorteningAlgoID = req.params.encoded_id;
  var id = shorteningAlgo.decode(shorteningAlgoID);

  // check if url already exists in database
  Url.findOne({_id: id}, function (err, doc){
    if (doc) {
      // found an entry in the DB, redirect the user to their destination
      res.redirect(doc.long_url);
    } else {
      // nothing found, take 'em home
      res.redirect(config.webhost);
    }
  });

});

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
