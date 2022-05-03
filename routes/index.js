const express = require('express')
const router = express.Router()
// const userRoutes = require('./user')
const movieRoutes = require('./movie')
const searchRoutes = require('./search')
const watchlistRoutes = require('./watchlist')

// router.use('/user', userRoutes)
router.use('/movie', movieRoutes)
router.use('/search', searchRoutes)
router.use('/watchlist', watchlistRoutes)

module.exports = router
