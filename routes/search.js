const express = require('express')
const { searchMovies, searchPerson } = require('../controllers/searchController')
const router = express.Router()

router.get('/movie', searchMovies)
router.get('/person', searchPerson)

module.exports = router