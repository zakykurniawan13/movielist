const { default: axios } = require("axios");

const searchController = {

    searchMovies: async (req,res)=>{
        const query = req.query
        try {
            
            const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                params: query
            })

            if(!response){
                return res.status(404).json({
                    status: "not found",
                    message: "movies with such name does not exist!",
                    result: {}
                })
            }

            res.status(200).json(response.data)

        } catch (error) {
            res.status(404).json(error)
        }
    },
    
}

module.exports = searchController