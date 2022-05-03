const { default: axios } = require("axios");
require('dotenv').config()

const searchController = {
    searchMovies: async (req,res)=>{
        const query = req.query
        try {
            
            const response = await axios.get(process.env.API_SEARCH_DB + '/movie', {
                params: {...query,
                    api_key: process.env.API_KEY}
            })

            if(!response){
                return res.status(404).json({
                    status: "not found",
                    message: "movies with such name does not exist!",
                    result: {}
                })
            }

            return res.status(200).json({
                status: "success",
                message: "successfully found searched movies",
                result: response.data
            })

        } catch (error) {
            res.status(404).json(error)
        }
    },
    searchPerson: async (req,res)=>{
        const query = req.query
        try {
            
            const response = await axios.get(process.env.API_SEARCH_DB + '/person', {
                params: {...query,
                api_key: process.env.API_KEY}
            })

            if(!response){
                return res.status(404).json({
                    status: "not found",
                    message: "The person you are looking for does not exist!",
                    result: {}
                })
            }

            return res.status(200).json({
                status: "success",
                message: "successfully found searched person",
                result: response.data
            })
        } catch (error) {
            res.status(404).json(error)
        }
    },
    
}

module.exports = searchController