const express = require('express')
const router = express.Router()
const {addMovie, getWatchlist, deleteMovie} = require('../controllers/watchlistController')
const { isLogin } = require('../middleware/auth')

router.post('/addMovie/:movieId', isLogin, addMovie)
router.get('/getWatchlist', isLogin, getWatchlist)
router.delete('/deleteMovie/:movieId', isLogin, deleteMovie)

module.exports = router