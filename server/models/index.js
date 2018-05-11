const mongoose = require('mongoose')

//Define a schema
const UrlSchema = new mongoose.Schema({
    code: String,
    url: String
})

module.exports = mongoose.model('Url', UrlSchema);
