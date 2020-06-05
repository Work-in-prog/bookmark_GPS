const mongoose = require('../db/connection')

const bookmarkSchema = new mongoose.Schema({
    address: String,
    complete: Boolean,
    lat: Number,
    lon: Number
})

mongoose.model('Bookmark', bookmarkSchema);

module.exports = mongoose;