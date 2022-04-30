const { default: axios } = require("axios");


// app.get('/movie/:id',async (req,res) => {
//     const id = req.params.id
//     try {
//         const response = await axios.get('https://api.themoviedb.org/3/movie/'+id, {
//             params: {
//                 api_key: "3308e162386788cc29ba57ad419bcb89"
//             }
//         });
//         res.status(200).json(response.data)
//     } catch (error) {
//       console.error(error);
//     }
//   })

const movieController = {
    getTopRated: async (req,res)=>{
        
        const query = req.query
        
        try {
            
            const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
                params: {...query,
                    api_key: "3308e162386788cc29ba57ad419bcb89"}
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
            
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                params: {...query,
                    api_key: "3308e162386788cc29ba57ad419bcb89"}
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
            
            const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
                params: {...query,
                    api_key: "3308e162386788cc29ba57ad419bcb89"}
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
            
            const response = await axios.get('https://api.themoviedb.org/3/movie/latest', {
                params: {...query,
                    api_key: "3308e162386788cc29ba57ad419bcb89"}
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
            
            const response = await axios.get('https://api.themoviedb.org/3/movie/'+id+'/recommendations', {
                params: {...query,
                    api_key: "3308e162386788cc29ba57ad419bcb89"}
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
            
            const response = await axios.get('https://api.themoviedb.org/3/movie/'+id+'/similiar', {
                params: {...query,
                    api_key: "3308e162386788cc29ba57ad419bcb89"}
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
            
            const response = await axios.get('https://api.themoviedb.org/3/movie/'+id+'/reviews', {
                params: {...query,
                    api_key: "3308e162386788cc29ba57ad419bcb89"}
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
            const response = await axios.get('https://api.themoviedb.org/3/movie/'+id,{
                params: {...query,
                    api_key: "3308e162386788cc29ba57ad419bcb89"}
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
            const response = await axios.get('https://api.themoviedb.org/3/movie/'+id+'/rating',{
                params: {...query,
                    api_key: "3308e162386788cc29ba57ad419bcb89"}
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
            const response = await axios.get('https://api.themoviedb.org/3/movie/'+id+'/rating',{
                params: {...query,
                    api_key: "3308e162386788cc29ba57ad419bcb89"}
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