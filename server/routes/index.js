//array of objects to be stored
const database = []
const mongoose = require('mongoose')
const models = require('../models')

const Url = mongoose.model('Url', models.Url)

module.exports = {
  saveUrl(req, res){
      var longUrl = req.body.url;
      var shortUrl = req.body.shortUrl;

      const makeid = () => {
        let text = ''
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 7; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
      }
      if (req.body.shortUrl.length === 0) {
       //first, generate the code
        req.body.shortUrl = makeid()
      }
      const url = new Url(req.body)
      url.save(function (err, model) {
          if (err) {
              return console.error(err)
          }
          console.log(model, 'saved!!!')
          res.status(201).send(model)
      })
  }
}
/*

console.log(makeid())

module.exports = {

  postForm(req,res) {
    //store it and send it
    database.push(req.body)
    // if the code is 0 characters, send 200 'okay' and generate random code with the function makeid()
    if (req.body.code.length === 0) {
     //first, generate the code
      req.body.code = makeid()
      //then, store it
      database.push(req.body)
      res.status(200).send({
        message : makeid(),
        database: database
      })
      //if the code is less than 6 characters, send 500 'error'
    } else if (req.body.code.length < 6) {
      //don't store invalid codes
      res.status(500).send({
        message : 'Too short!! Please enter a code that is at least 6 characters',
        database: database
      })
    } else {
      //store it
      database.push(req.body)
      res.status(200).send({
        message : req.body.code,
        database : database
      })
    }

    res.status(200).send({
        message : req.body.code,
        message : 'Here is your long URL: ${req.body.longUrl}. Here is your short URL: ${req.body.code}'
      })
  }
  /*
  posts: require('./posts.js'),
  comments: require('./comments.js')
  */
