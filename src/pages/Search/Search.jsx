import "./Search.scss";

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Layout } from "../../layout/Layout";
import axios from "axios";
import foto1 from "../../assets/images/foto1.png";
import searchLogo from "../../assets/images/search.png";

export const Search = () => {
  //untuk berpindah halaman
  let navigate = useNavigate();
  //

  //untuk mengambil data yang di lempar dari navigasi
  const { state } = useLocation();
  const { movieName } = state;
  //

  const [movies, setMovies] = useState([]);
  const [searchMovieName, setSearchMovieName] = useState(movieName);

  const headers = {
    "Content-Type": "appplication.json",
  };

  const searchMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=f4cf4882bb4a1025d54e7abd91962ecc&query=${searchMovieName}`,
        { headers }
      );
      if (response.status === 200) {
        console.log(response);
        setMovies(response.data.results);
      }
    } catch (error) {}
  };

  const handleSearch = (e) => {
    setSearchMovieName(e.target.value);
  };

  const goDetail = (id) => {
    navigate(`/detail`, {
      state: {
        id,
      },
    });
  };

  useEffect(() => {
    searchMovie();
  }, [searchMovieName]);

  return (
    <Layout>
      <div className="main-container">
        <div className="main-left">
          <div className="input">
            <img className="search-logo" src={searchLogo} />
            <input
              className="text-input"
              type="text"
              placeholder="Search Movie Here"
              onChange={handleSearch}
            />
          </div>
          <div className="main-home-trending">
            <div className="movie-list-trending">
              {movies.map((item) => (
                <div className="card-movie" onClick={() => goDetail(item.id)}>
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
      </div>
    </Layout>
  );
};
