const express = require('express')
const router = express.Router()
// const userRoutes = require('./user')
const movieRoutes = require('./movie')
const searchRoutes = require('./search')

// router.use('/user', userRoutes)
router.use('/movie', movieRoutes)
router.use('/search', searchRoutes)

module.exports = router
