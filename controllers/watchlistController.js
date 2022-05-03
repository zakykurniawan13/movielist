require('dotenv').config()
const {User, Movie, Watchlist} = require('../models')
const { default: axios } = require("axios");

const watchlistController = {
    addMovie: async (req,res)=>{
        const {movieId} = req.params
        const {userId} = req.query
        try {
            
            const user = await User.findOne({
                where: {
                    id: userId
                }
            })
            
            if(!user){
                return res.status(500).json({
                    status: 'Access Denied',
                    message: 'You do not have access',
                    result: {}
                })
            }
            
            const {data} = await axios.get(process.env.API_MOVIE_DB + '/' + movieId,{
                params: {api_key: process.env.API_KEY}
            })

            if(!data){
                return res.status(404).json({
                    status: "not found",
                    message: "movie does not exist",
                    result: {}
                })
            }
            
            let movie = await Movie.findOne({
                where: {
                    title: data.title
                }
            })

            if(!movie){
                movie = await Movie.create({...data})

            }
            console.log(movie, 'asdasd')

            if(!movie){
                return res.status(500).json({
                    status: "Internal Server Error",
                    message: "Failed to dump movie data to database",
                    result: {}
                })
            }
            
            const watchlist = await user.addMovie(movie, {through: 'watchlist'})

            if(watchlist[0] == 0){
                return res.status(400).json({
                    status: "Bad Request",
                    message: "Failed to add movie to watchlist. Movie is already added in the watchlist",
                    result: {}
                })
            }

            return res.status(201).json({
                    status: "success",
                    message: "successfully added movie to watchlist",
                    result: watchlist
                })
        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error",
                message: error.message,
                result: {}
            })
        }
    },
    getWatchlist: async (req,res) => {
        const {userId} = req.query //
        try {
            const watchlist = await User.findOne({
                where: {
                    id: userId
                },
                attributes: {
                    exclude: ['email','password','createdAt','updatedAt']
                },
                include: {
                    model: Movie,
                    through: 'Watchlist',
                    required: true,
                    attributes: {
                        exclude: ['createdAt']
                    },
                }
            })

            if(!watchlist){
                return res.status(404).json({
                    status: 'Not Found',
                    message: 'failed to fetch watchlist',
                    result: {}
                })
            }

            res.status(200).json({
                status: 'success',
                message: 'successfully retrieved watchlist',
                result: watchlist
            })

        } catch (error) {
            return res.status(500).json({
                status: 'Internal Server Error',
                message: error.message,
                result: {}
            })
        }
    },
    deleteMovie: async (req,res) => {
        const {movieId} = req.params
        const {userId} = req.query
        try {
            const user = await User.findOne({
                where: {id: userId}
            })

            const remove = await user.removeMovie([movieId])

            if(!remove){
                return res.status(404).json({
                    status: 'Failed',
                    message: 'You have not added this movie to watchlist',
                    result: {}
                })
            }

            res.status(201).json({
                status: 'success',
                message: 'successfully deleted movie from watchlist',
                result: remove
            })
        } catch (error) {
            return res.status(500).json({
                status: 'Internal Server Error',
                message: error.message,
                result: {}
            })
        }
    }
}

module.exports = watchlistController