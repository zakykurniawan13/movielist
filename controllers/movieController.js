const { default: axios } = require("axios");
require('dotenv').config()

const movieController = {
    getTopRated: async (req,res)=>{
        
        const query = req.query
        
        try {
            
            const response = await axios.get(process.env.API_MOVIE_DB + '/top_rated', {
                params: {...query,
                    api_key: process.env.API_KEY}
            })

            if(!response){
                return res.status(500).json({
                    status: "Failed to retrieve movies",
                    message: "Internal Server Error",
                    result: {}
                })
            }
            res.status(200).json(response.data)

        } catch (error) {
            res.json(error)
        }
    },
    getPopular: async (req,res)=>{
        
        const query = req.query
        
        try {
            
            const response = await axios.get(process.env.API_MOVIE_DB + '/popular', {
                params: {...query,
                    api_key: process.env.API_KEY}
            })

            if(!response){
                return res.status(500).json({
                    status: "Failed to retrieve movies",
                    message: "Internal Server Error",
                    result: {}
                })
            }
            res.status(200).json(response.data)

        } catch (error) {
            res.json(error)
        }
    },
    getNowPlaying: async (req,res)=>{
        
        const query = req.query
        
        try {
            
            const response = await axios.get(process.env.API_MOVIE_DB + '/now_playing', {
                params: {...query,
                    api_key: process.env.API_KEY}
            })

            if(!response){
                return res.status(500).json({
                    status: "Failed to retrieve movies",
                    message: "Internal Server Error",
                    result: {}
                })
            }
            res.status(200).json(response.data)

        } catch (error) {
            res.json(error)
        }
    },
    getLatest: async (req,res)=>{
        
        const query = req.query
        
        try {
            
            const response = await axios.get(process.env.API_MOVIE_DB + '/latest', {
                params: {...query,
                    api_key: process.env.API_KEY}
            })

            if(!response){
                return res.status(500).json({
                    status: "Failed to retrieve movies",
                    message: "Internal Server Error",
                    result: {}
                })
            }
            res.status(200).json(response.data)

        } catch (error) {
            res.json(error)
        }
    },
    getRecommendations: async (req,res)=>{
        const id = req.params.id
        const query = req.query
        
        try {
            
            const response = await axios.get(process.env.API_MOVIE_DB + '/'+id+'/recommendations', {
                params: {...query,
                    api_key: process.env.API_KEY}
            })

            if(!response){
                return res.status(500).json({
                    status: "Failed to retrieve movies",
                    message: "Internal Server Error",
                    result: {}
                })
            }
            res.status(200).json(response.data)

        } catch (error) {
            res.json(error)
        }
    },
    
    getSimiliarMovies: async (req,res)=>{
        const id = req.params.id
        const query = req.query
        
        try {
            
            const response = await axios.get(process.env.API_MOVIE_DB + '/'+id+'/similiar', {
                params: {...query,
                    api_key: process.env.API_KEY}
            })

            if(!response){
                return res.status(500).json({
                    status: "Failed to retrieve movies",
                    message: "Internal Server Error",
                    result: {}
                })
            }
            res.status(200).json(response.data)

        } catch (error) {
            res.json(error)
        }
    },
    getReviews: async (req,res)=>{
        const id = req.params.id
        const query = req.query
        
        try {
            
            const response = await axios.get(process.env.API_MOVIE_DB + '/'+id+'/reviews', {
                params: {...query,
                    api_key: process.env.API_KEY}
            })

            if(!response){
                return res.status(500).json({
                    status: "Failed to retrieve movies",
                    message: "Internal Server Error",
                    result: {}
                })
            }
            res.status(200).json(response.data)

        } catch (error) {
            res.json(error)
        }
    },
    getDetails: async (req,res)=>{
        const id = req.params.id
        const query = req.query
        try {
            const response = await axios.get(process.env.API_MOVIE_DB + '/'+id,{
                params: {...query,
                    api_key: process.env.API_KEY}
            })

            if(!response){
                return res.status(404).json({
                    status: "not found",
                    message: "movie does not exist",
                    result: {}
                })
            }
            
            return res.status(200).json(response.data)

        } catch (error) {
            return res.json(error)
        }
    },
    rateMovie: async (req,res)=>{
        const id = req.params.id
        const query = req.query
        try {
            const response = await axios.get(process.env.API_MOVIE_DB + '/'+id+'/rating',{
                params: {...query,
                    api_key: process.env.API_KEY}
            })

            if(!response){
                return res.status(404).json({
                    status: "not found",
                    message: "movie does not exist",
                    result: {}
                })
            }
            
            return res.status(200).json(response.data)

        } catch (error) {
            return res.json(error)
        }
    },
    deleteRating: async (req,res)=>{
        const id = req.params.id
        const query = req.query
        try {
            const response = await axios.get(process.env.API_MOVIE_DB + '/'+id+'/rating',{
                params: {...query,
                    api_key: process.env.API_KEY}
            })

            if(!response){
                return res.status(404).json({
                    status: "not found",
                    message: "movie does not exist",
                    result: {}
                })
            }
            
            return res.status(200).json(response.data)

        } catch (error) {
            return res.json(error)
        }
    }
}

module.exports = movieController