const express = require('express');
const router = express.Router();
const Bookmarks = require('../models/bookmarks');

router.get('/', (req, res) =>{
    Bookmarks.find({}, (err, findBookmarks) => {
        res.json(findBookmarks);
    })
});

router.delete('/:id', (req, res) => {
    Bookmarks.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
        res.json(deletedBookmark);
    })
})

router.post('/', (req, res) => {
    Bookmarks.create(req.body, (err, newBookmark) => {
        res.json(newBookmark);
    });
    console.log("Post Route Accessed")
})

router.put('/:id', (req, res) => {
    Bookmarks.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBookmark) => {
        res.json(updatedBookmark)
    })
})

module.exports = router;