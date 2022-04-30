const express = require('express')
const { searchMovies } = require('../controllers/searchController')
const router = express.Router()

router.get('/movie', searchMovies)

module.exports = router