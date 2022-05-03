const express = require('express')
const router = express.Router()
const {addMovie} = require('../controllers/watchlistController')

router.post('/addMovie/:movieId', addMovie)
// router.get('/getBookmark/:id', getBookmark)
// router.update('/deleteBookmark/:id', deleteBookmark)

module.exports = router