import "./Home.scss";

import React, { useEffect, useState } from "react";

import { Layout } from "../../layout/Layout";
import armydeadmovie from "../../assets/images/armydead.jpg";
import axios from "axios";
import brightmovie from "../../assets/images/bright.jpg";
import extraction2movie from "../../assets/images/extraction2.jpg";
import extractionmovie from "../../assets/images/extraction.jpg";
import foto1 from "../../assets/images/foto1.png";
import rednoticemovie from "../../assets/images/red notice.jpg";
import spidermanmovie from "../../assets/images/spiderman.jpg";

export const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [recent, setRecent] = useState([]);

  const getMovieTrending = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=f4cf4882bb4a1025d54e7abd91962ecc",
        { headers }
      );
      if (response.status === 200) {
        setMoviesTrending(response.data.results);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const getRecent = async () => {
    try {
      const headers ={
        "Content-Type": "appplication.json",
      };
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=f4cf4882bb4a1025d54e7abd91962ecc&language=en-US&page=1",
        { headers }
      );
      if (response.status === 200) {
        setRecent(response.data.results);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  
  useEffect(() => {
    getMovieTrending();
    getRecent();
  }, []);

  return (
    <Layout>
      <div className="main-container">
        <div className="main-left">
          <div className="main-home">
            <img className="main-home-foto" src={foto1} />
            <div className="main-home-foto-title">
              {" "}
              Watch Your Favourites Movie
            </div>
          </div>
          <div className="main-home-trending">
            <div className="main-home-trending-header">
              <div className="main-home-trending-title">Trending Movie</div>
              <div className="main-home-trending-subtitle">See all</div>
            </div>
            <div className="movie-list-trending">
              {moviesTrending.map((item) => (
                <div className="card-movie">
                  <img
                    className="card-movie-foto"
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  />
                  <div className="card-content">
                    <div className="card-content-left">
                      <div className="card-content-left-title">
                        {item.title}
                      </div>
                      <div
                        className="card-content-left-subtitle"
                        style={{
                          color: "#878787",
                          fontSize: "12px",
                        }}
                      >
                        {item.release_date}
                      </div>
                    </div>
                    <div className="card-content-right">
                      <div
                        className="card-content-action"
                        style={{
                          backgroundColor: "rgba(158,7,33,0.68)",
                          borderRadius: "20px",
                        }}
                      >
                        Watch Now
                      </div>
                      <div
                        className="card-content-action"
                        style={{
                          backgroundColor: "#F6C600",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        ImDb {item.vote_average}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="main-right">
          <div className="main-genre">
            <div className="content-label">Genre</div>
            <div className="list-genre">
              <div
                className="genre-item"
                style={{
                  backgroundColor: "rgba(158,7,33,0.68)",
                }}
              >
                Action
              </div>
              <div className="genre-item">Adventure</div>
              <div className="genre-item">Comedy</div>
              <div className="genre-item">Drama</div>
              <div className="genre-item">Horor</div>
              <div className="genre-item">Romance</div>
            </div>
          </div>
          <div className="main-recent">
            <div className="content-label"> Recent</div>
            {recent.map((item) => (
               <div className="card-movie">
               <img className="card-movie-foto" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
               <div className="card-content">
                 <div className="card-content-left">
                   <div className="card-content-left-title">{item.title}</div>
                   <div
                     className="card-content-left-subtitle"
                     style={{
                       color: "#878787",
                       fontSize: "12px",
                     }}
                   >
                     {item.release_date}
                   </div>
                 </div>
                 <div className="card-content-right">
                   <div
                     className="card-content-action"
                     style={{
                       backgroundColor: "rgba(158,7,33,0.68)",
                       borderRadius: "20px",
                     }}
                   >
                     Watch Now
                   </div>
                   <div
                     className="card-content-action"
                     style={{
                       backgroundColor: "#F6C600",
                       color: "black",
                       fontWeight: "bold",
                     }}
                   >
                     ImDb {item.vote_average}
                   </div>
                 </div>
               </div>
             </div>
            ))}
           
          </div>
        </div>
      </div>
    </Layout>
  );
};
