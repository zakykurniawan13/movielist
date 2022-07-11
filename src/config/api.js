import axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3/'
export const apiGetMovieTrending = () => {
    //  {
    //   const response = await axios.get(
    //     "https://api.themoviedb.org/3/trending/movie/week?api_key=f4cf4882bb4a1025d54e7abd91962ecc",
    //     { headers }
    //   );
    //   if (response.status === 200) {
    //     setMoviesTrending(response.data.results);
    //   }
    // } catch (error) {
    //   console.log(error, "error");
    // }
    return axios(
        {
            method:'GET',
            url: baseUrl + "trending/movie/week?api_key=f4cf4882bb4a1025d54e7abd91962ecc"
        }
    )
  };