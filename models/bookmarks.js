const mongoose = require('../db/connection')

const bookmarkSchema = new mongoose.Schema({
    address: String,
    complete: Boolean
})

mongoose.model('Bookmark', bookmarkSchema);

module.exports = mongoose;