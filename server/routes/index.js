//array of objects to be stored
const database = []
const mongoose = require('mongoose')
const models = require('../models')

const Url = mongoose.model('Url', models.Url)

module.exports = {
saveUrl(req, res){

    ///if empty . then

    const makeid = () => {
      let text = ''
      const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }

    if (req.body.shortenUrl.length === 0) {
     //
      req.body.shortenUrl = makeid()
    }

    const url = new Url (req.body)
    url.save (function (err, model) {
        if (err) {
          return console.error(err)
        }
        console.log(model,'Saved!!!')
        res.status(201).send(model)
    })
  }
}
