const express = require('express')
const router = express.Router()
const {getTopRated,getPopular,getNowPlaying,getLatest,getDetails,getRecommendations,getReviews,getSimiliarMovies} = require('../controllers/movieController')

router.get('/top_rated', getTopRated)
router.get('/popular', getPopular)
router.get('/now_playing', getNowPlaying)
router.get('/latest', getLatest)
router.get('/:id', getDetails)
router.get('/:id/recommendations', getRecommendations)
router.get('/:id/similiar', getSimiliarMovies)
router.get('/:id/reviews', getReviews)

//Example queries
//localhost:2000/api/v1/movie/top_rated?api_key=3308e162386788cc29ba57ad419bcb89&language=en-US&page=1

// router.post('/:id/rating', rateMovie)
// router.delete('/:id', deleteRating)

module.exports = router