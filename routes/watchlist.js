const express = require('express')
const router = express.Router()
const {addMovie, getWatchlist, deleteMovie} = require('../controllers/watchlistController')

router.post('/addMovie/:movieId', addMovie)
router.get('/getWatchlist', getWatchlist)
router.delete('/deleteMovie/:movieId', deleteMovie)

module.exports = router