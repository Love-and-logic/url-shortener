const mongoose = require('mongoose')

//Define a schema
const UrlSchema = new mongoose.Schema({
    url: String,
    shortenUrl: String
})

module.exports = mongoose.model('Url', UrlSchema);
