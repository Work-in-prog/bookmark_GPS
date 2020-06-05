const mongoose = require('../db/connection')

const bookmarkSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number,
    direction: String
})

mongoose.model('Bookmark', bookmarkSchema);

module.exports = mongoose;