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
      else if (req.body.code.length < 6) {
      //don't store invalid codes
      res.status(500).send({
        message : 'Too short!! Please enter a code that is at least 6 characters',
      })
      }
    res.status(200).send({
        message : 'Here is your long URL: ${req.body.longUrl}. Here is your short URL: ${req.body.shortUrl}'
      })
  }
