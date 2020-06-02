const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
    address: String,
    complete: Boolean
})

const Bookmarks = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmarks;