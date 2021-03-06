//array of objects to be stored
const database = []
const mongoose = require('mongoose')
const models = require('../models')

const Url = mongoose.model('Url', models.Url)

module.exports = {
  saveUrl(req, res){
  //  res.status(201).send(req.body)


      const makeid = () => {
        let text = ''
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 7; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
      }
      //in case this breaks, try console.log(req.body)
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
    },

    redirectFromCode(req, res) {
        // const FindCode = req.params.redirectFromCode
        console.log(req.body)
        Url.findOne({ 'shortUrl': req.params.code}, function(err,model){
          //res.status(200).send(model);
            res.redirect(model.url)
        })
    },

    pingTest(request, response) {
        return response.status(201).send({
            'message': 'Cool beans, it worked!'
        })
    }
}


